import { Body, Controller, Logger, Post, Response } from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { Response as ExpressResponse } from 'express';
import { OKException } from 'src/utilities/ok.exception';
import { AddSekolahDTO } from './sekolah.dto';

@Controller('sekolah')
export class SekolahController {
  constructor(private sekolahService: SekolahService) {}

  private readonly logger = new Logger(SekolahController.name, {
    timestamp: true,
  });

  @Post('list')
  async loggedIn(@Body() body: any, @Response() res: any) {
    const signin = await this.sekolahService.list(body);

    throw new OKException(signin, 'Success');
  }

  @Post('add')
  async add(@Body() body: AddSekolahDTO, @Response() res: any) {
    const signin = await this.sekolahService.add(body);

    throw new OKException(signin, 'Success');
  }
}
