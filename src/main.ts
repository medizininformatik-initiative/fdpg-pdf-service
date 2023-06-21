import { configureTelemetry } from './telemetry';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.local` });
dotenv.config();

configureTelemetry({
  env: process.env.ENV,
  connectionString: process.env.OTEL_EXPORTER_CONNECTION_STRING,
  enableTelemetry:
    (process.env.ENABLE_TELEMETRY ?? '').toLowerCase() === 'true',
  softwareVersion: process.env.SOFTWARE_VERSION,
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_PREFIX, SERVICE_NAME, SWAGGER_PATH } from './constants';
import { ValidationExceptionFilter } from './exceptions/validation/validation-exception.filter';
import { useContainer } from 'class-validator';

function configureSwagger(app: INestApplication) {
  if (process.env.ENV !== 'production') {
    const configService = app.get(ConfigService);
    const softwareVersion = configService.get('SOFTWARE_VERSION');

    const buildInfo = [
      `Release Date: ${configService.get('RELEASE_DATE')}`,
      `Release Time: ${configService.get('RELEASE_TIME')}`,
      `Release Number of Date: ${configService.get('RELEASE_NO_OF_DATE')}`,
      `Environment: ${configService.get('ENV')}`,
    ];

    const swaggerConfig = new DocumentBuilder()
      .setTitle(SERVICE_NAME)
      .setDescription(
        '<h3> Build Information:</strong> </h3>' + buildInfo.join('</br>'),
      )
      .setVersion(softwareVersion)
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup(SWAGGER_PATH, app, document);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix(API_PREFIX);
  app.useGlobalFilters(new ValidationExceptionFilter());

  app.enableVersioning({ type: VersioningType.URI });
  configureSwagger(app);

  // Adds DI for validators:
  // https://github.com/nestjs/nest/issues/528
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const exposedPort = +(configService.get<string>('EXPOSED_PORT') ?? 3000);
  console.log('Exposing on Port: ', exposedPort);
  await app.listen(exposedPort);
}
bootstrap();
