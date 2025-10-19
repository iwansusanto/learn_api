import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

export interface SendOTPPublic {
  phone: string;
  //otp: string,
  expires: Date;
}

export interface UserPublic {
  uuid: string;
  username: string;
  verified: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
}
