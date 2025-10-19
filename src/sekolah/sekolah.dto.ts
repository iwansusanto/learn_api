import { IsNotEmpty } from 'class-validator';

export class AddSekolahDTO {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  no_telp: string;
}
