import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import puppeteer, { PuppeteerLaunchOptions } from 'puppeteer';
import { trace } from '@opentelemetry/api';

type extendedWindow = typeof window & { data: any; dataPrivacyTexts: any };

@Injectable()
export class AppService {
  private isInsideDocker: boolean;
  private host: string;

  constructor(private configService: ConfigService) {
    this.isInsideDocker =
      this.configService.get<string>('INSIDE_DOCKER')?.toLowerCase() === 'true';
    this.host = this.configService.get<string>('PRINT_FRONTEND_HOST');
  }

  async generatePdf(data: any, dataPrivacyTexts: any): Promise<Buffer> {
    const url = `${this.host}/print/proposal`;
    const lang = 'de-DE';
    const options: PuppeteerLaunchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--headless',
        '--disable-gpu',
        '--disable-dev-shm-usage',
      ],
    };

    if (this.isInsideDocker) {
      options.executablePath = '/usr/bin/chromium-browser';
    }

    const browser = await puppeteer.launch(options);

    const page = await browser.newPage();
    page.emulateTimezone('Europe/Berlin');
    let error: Error;

    page.on('pageerror', (pageError) => {
      if (pageError.message.includes('FailedStateError')) {
        error = new Error(pageError.message);
        error.stack = pageError.stack;
        error.name = 'FailedStateError';
      }

      const tracer = trace.getTracer('basic');
      tracer
        .startSpan('PDF Page Error', {
          attributes: {
            ['pdf.pageError.name']: JSON.stringify(pageError.name),
            ['pdf.pageError.message']: JSON.stringify(pageError.message),
            ['pdf.pageError.stack']: JSON.stringify(pageError.stack),
            ['pdf.pageError.proposalId']: JSON.stringify(data.proposalId),
          },
        })
        .end();
    });

    await page.evaluateOnNewDocument(
      (data, lang, dataPrivacyTexts) => {
        Object.defineProperty(navigator, 'language', {
          get: () => {
            return lang;
          },
        });
        (window as extendedWindow).data = data;
        (window as extendedWindow).dataPrivacyTexts = dataPrivacyTexts;
      },
      data,
      lang,
      dataPrivacyTexts,
    );

    await page.goto(url, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf();

    await browser.close();

    if (error) {
      throw new InternalServerErrorException(error);
    }

    return Buffer.from(pdfBuffer);
  }
}
