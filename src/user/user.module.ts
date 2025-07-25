// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity for this module
  providers: [UserService],
  controllers: [UserController],
  exports: [TypeOrmModule], // If other modules need to use User repository
})
export class UserModule {}
