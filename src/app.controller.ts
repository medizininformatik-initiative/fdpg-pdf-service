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
    @Body() { data, dataPrivacyTexts }: PrintDto,
  ): Promise<Buffer> {
    const buffer = await this.appService.generatePdf(data, dataPrivacyTexts);
    return buffer;
  }

  @Post('proposal/file')
  async generateProposalPdfFile(
    @Body() { data, dataPrivacyTexts }: PrintDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="download.pdf"',
    });
    const buffer = await this.appService.generatePdf(data, dataPrivacyTexts);
    return new StreamableFile(buffer);
  }
}
