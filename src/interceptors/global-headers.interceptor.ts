import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { Response as ExpressResponse } from 'express';
import { ConfigService } from '@nestjs/config';
import { SERVICE_ID_SHORT } from 'src/constants';

@Injectable()
export class GlobalHeadersInterceptor implements NestInterceptor {
  softwareVersion: string;
  releaseDate: string;
  releaseNoOfDate: string;
  env: string;

  constructor(private readonly configService: ConfigService) {
    this.softwareVersion = this.configService.get('SOFTWARE_VERSION');
    this.releaseDate = this.configService.get('RELEASE_DATE');
    this.releaseNoOfDate = this.configService.get('RELEASE_NO_OF_DATE');
    this.env = this.configService.get('ENV');
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ResponseObj: ExpressResponse = context.switchToHttp().getResponse();
    ResponseObj.setHeader(
      'x-software-version',
      `${SERVICE_ID_SHORT}-v${this.softwareVersion}-${this.releaseDate}+${this.releaseNoOfDate}-${this.env}`,
    );
    return next.handle();
  }
}
