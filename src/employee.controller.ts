import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.interface';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll(): Employee[] {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Employee | undefined {
    return this.employeeService.findOne(Number(id));
  }

  @Post()
  create(@Body() employee: Omit<Employee, 'id'>): Employee {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() update: Partial<Omit<Employee, 'id'>>): Employee | undefined {
    return this.employeeService.update(Number(id), update);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.employeeService.remove(Number(id));
  }
}