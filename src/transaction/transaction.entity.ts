import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  type: string;

  @CreateDateColumn()
  createdat: Date;

  @ManyToOne(() => User, (user) => user.transactions, { eager: true })
  user: User;
}
