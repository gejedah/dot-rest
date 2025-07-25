import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
// import { CreateUserDto } from './dto/create-user.dto'; // Example DTO

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const newUser = this.userRepository.create(createUserDto);
  //   // return this.userRepository.save(newUser);
  //   return;
  // }

  // async update(id: number, updateUserDto: Partial<User>): Promise<User> {
  //   await this.userRepository.update(id, updateUserDto);
  //   return this.userRepository.findOneBy({ id });
  // }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
