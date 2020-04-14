import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private studentServive: StudentService,
    private route: Router
  ) { }

  ngOnInit() {

  }
  recharge(){
    this.route.navigate(['/recharge']);
  }
  Transaction(){

  }

}
