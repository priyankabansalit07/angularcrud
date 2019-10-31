import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'employeeFilter'
})

// It is not good practice to use pipes in angular. For filtering on sorting you should implement logic in component
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm: string): Employee[] {
    if(!employees || !searchTerm){
      return employees;
    }

    return employees.filter(e=>e.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1); // return employee where Index of SearchTerm <> -1
//    return null;
  }

}
