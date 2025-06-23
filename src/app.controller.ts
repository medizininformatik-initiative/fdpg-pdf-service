import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  StreamableFile,
} from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';
import { PrintDto } from './dto/Print.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  async health(): Promise<string> {
    return 'ok';
  }

  @Post('proposal/buffer')
  async generateProposalPdf(
    @Body() { data, dataPrivacyTexts, dataSources }: PrintDto,
  ): Promise<Buffer> {
    const buffer = await this.appService.generatePdf(
      data,
      dataPrivacyTexts,
      dataSources,
    );
    return buffer;
  }

  @Post('proposal/file')
  async generateProposalPdfFile(
    @Body() { data, dataPrivacyTexts, dataSources }: PrintDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="download.pdf"',
    });
    const buffer = await this.appService.generatePdf(
      data,
      dataPrivacyTexts,
      dataSources,
    );
    return new StreamableFile(buffer);
  }
}
