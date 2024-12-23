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
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from '@opentelemetry/semantic-conventions';
import { IncomingMessage } from 'http';
import { SERVICE_ID } from './constants';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';

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
        [ATTR_SERVICE_NAME]: `${SERVICE_ID}_${config.env}`,
        [ATTR_SERVICE_VERSION]: config.softwareVersion,
        ['deployment.environment']: config.env,
        application: `${SERVICE_ID}_${config.env}`,
      }),
    );

    const spanProcessors = [
      new BatchSpanProcessor(
        new OTLPTraceExporter({
          url: config.connectionString,
        }),
      ),
    ];

    const provider = new NodeTracerProvider({
      resource,
      spanProcessors,
    });

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
                [ATTR_SERVICE_NAME]: config.softwareVersion,
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
