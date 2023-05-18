import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {UsuariosImage } from './entities/user-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios, UsuariosImage])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}