import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSekolahDTO } from './sekolah.dto';

@Injectable()
export class SekolahService {
  private readonly logger = new Logger(SekolahService.name);

  constructor(private prisma: PrismaService) {}

  async list(body: any) {
    const sekolahList = await this.prisma.sekolah.findMany({});

    return sekolahList;
  }

  async add(body: AddSekolahDTO) {
    const sekolahCreate = await this.prisma.sekolah.create({
      data: {
        nama: body.nama,
        email: body.email,
        no_telp: body.no_telp,
        alamat: body.alamat,
      },
    });

    return sekolahCreate;
  }
}
