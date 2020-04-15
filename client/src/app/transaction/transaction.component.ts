import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private studentServive: StudentService
  ) { }
  transaction=[];
  ngOnInit() {
    let user= this.router.snapshot.paramMap.get('this.user');
    const data={
      username: user
    }
    this.studentServive.showtransaction(data).subscribe((response: any) => {
      alert(response.msg);
      console.log("baba",response);
      this.transaction=response.pack;
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

}
