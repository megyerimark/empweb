import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})


export class EmpComponent  implements OnInit{


  constructor(private api:ApiService) {}









  ngOnInit(): void {
    this.getEmployees();


  }

  getEmployees(){
    this.api.getEmployee().subscribe({
      next: data =>{
     
      },
      error: err =>{

      }

    });
  }

}
