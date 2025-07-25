import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity'; // Ensure this path is correct
import { Transaction } from './transaction/transaction.entity';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // or 'mysql', 'sqlite', etc.
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Transaction], // Path to your entities
        synchronize: false, // **IMPORTANT: Set to false in production! Use migrations.**
        logging: true, // Enable TypeORM logging (useful for development)
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController, UserController, TransactionController],
  providers: [AppService, UserService, TransactionService],
})
export class AppModule {}
