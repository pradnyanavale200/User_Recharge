import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  selected: string;
  customer=[]
  datapacklist=[]
  constructor(
    private studentServive: StudentService
  ) { }

  ngOnInit() {
    this.studentServive.show().subscribe((res: any) => {
      this.customer=res.company;
      console.log('yeye2')
      alert(res.msg);
      console.log(res);
    }, (error) => {

      console.log(error);
      alert(error.msg);

    });
  }
  datapack(value){
    const data = {
      company: value
    };
    console.log("yebaba",value)
    this.studentServive.showpack(data).subscribe((res: any) => {
      this.datapacklist=res.pack;
      console.log('yeye2')
      alert(res.msg);
      console.log(res);
    }, (error) => {

      console.log(error);
      alert(error.msg);

    });
  }
}
