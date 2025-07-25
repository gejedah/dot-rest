import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '../entity/Employee';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  // Custom methods for interacting with Employee data can be added here
}