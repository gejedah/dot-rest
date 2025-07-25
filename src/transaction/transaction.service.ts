import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}


  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findOne(id: number): Promise<Transaction> {
    return this.transactionRepository.findOneBy({ id });
  }

  create(data: Partial<Transaction>): Promise<Transaction> {
    const transaction = this.transactionRepository.create(data);
    return this.transactionRepository.save(transaction);
  }

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
}
