import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modals/employees.modal';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : Employee[] = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.employeeService.getAllEmployees().subscribe(res => {
      console.log(res);
      this.employees = res;
    })
  }

}
