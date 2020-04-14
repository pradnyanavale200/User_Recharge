import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private studentServive: StudentService,
    private route: Router,
    private router: ActivatedRoute,
    private authServive: AuthService
  ) { }
    public user='';
    public balance='';
  ngOnInit() {
    let username= this.router.snapshot.paramMap.get('data.username');
    this.user = username;
    console.log(this.user)
  }
  recharge(){
    const data={
      username:this.user
    }

    this.route.navigate(['/recharge', this.user]);
  }
  Transaction(){

  }

}
