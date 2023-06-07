import { AzureMonitorTraceExporter } from '@azure/monitor-opentelemetry-exporter';
import {
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
  SpanStatusCode,
} from '@opentelemetry/api';
import { W3CTraceContextPropagator } from '@opentelemetry/core';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { IncomingMessage } from 'http';
import { SERVICE_ID } from './constants';

export const configureTelemetry = (config: {
  connectionString: string;
  env: string;
  enableTelemetry: boolean;
  softwareVersion: string;
}) => {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.WARN);
  if (config.enableTelemetry) {
    const resource = Resource.default().merge(
      new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: `${SERVICE_ID}_${config.env}`,
        [SemanticResourceAttributes.SERVICE_VERSION]: config.softwareVersion,
        [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: config.env,
        application: `${SERVICE_ID}_${config.env}`,
      }),
    );

    const provider = new NodeTracerProvider({ resource });

    const exporter = new AzureMonitorTraceExporter({
      connectionString: config.connectionString,
    });

    provider.addSpanProcessor(new BatchSpanProcessor(exporter));

    provider.register({
      propagator: new W3CTraceContextPropagator(),
    });

    registerInstrumentations({
      instrumentations: [
        new NestInstrumentation(),
        new HttpInstrumentation({
          ignoreOutgoingRequestHook: (request) => {
            return request.headers['x-no-trace']?.toString() === 'true';
          },
          ignoreIncomingRequestHook: (request) => {
            return request.url.includes('health');
          },
          applyCustomAttributesOnSpan: (span, request, response) => {
            if (request instanceof IncomingMessage) {
              span.setAttributes({
                [SemanticResourceAttributes.SERVICE_VERSION]:
                  config.softwareVersion,
                ['request.method']: request.method,
                ['request.user-agent']: request.headers['user-agent'],
              });

              if (response.statusCode > 399) {
                span.setStatus({ code: SpanStatusCode.ERROR });
              }
            }
          },
        }),
      ],
    });
  }
};
