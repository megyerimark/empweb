import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})


export class EmpComponent  implements OnInit{
  employees!:any;
  actualGender!:string;



  constructor(private api:ApiService,
    private toastr: ToastrService) {}









  ngOnInit(): void {
    this.getEmployees();


  }

  getEmployees(){
    this.api.getEmployee().subscribe({
      next: data =>{
        this.employees = data
        this.toastr.success("Sikeres lekérdezés!")

      },
      error: err =>{
        this.toastr.error("Lekérdezés sikertelen!")

      }

    });
  }

}
