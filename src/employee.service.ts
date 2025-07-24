import { Injectable } from '@nestjs/common';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];
  private idCounter = 1;

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  create(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee = { ...employee, id: this.idCounter++ };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, update: Partial<Omit<Employee, 'id'>>): Employee | undefined {
    const employee = this.findOne(id);
    if (employee) {
      Object.assign(employee, update);
      return employee;
    }
    return undefined;
  }

  remove(id: number): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index > -1) {
      this.employees.splice(index, 1);
      return true;
    }
    return false;
  }
}