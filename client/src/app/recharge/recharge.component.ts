import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  rechargeForm: FormGroup;
  selected: string;
  customer=[]
  datapacklist=[]
  constructor(
    private studentServive: StudentService,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private authServive: AuthService,
    private route:Router
  ) { }
   public username='';
   public balance='';
  ngOnInit() {
    let user= this.router.snapshot.paramMap.get('this.user');
    this.username = user;

    this.studentServive.show().subscribe((res: any) => {
      this.customer=res.company;
      console.log('yeye2')
      alert(res.msg);
      console.log(res);
      this.rechargeForm = this.fb.group({
        mobileno: ['', Validators.required],
        company: ['', Validators.required],
        amount: ['', Validators.required],
        password: ['', Validators.required]
      });
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
      this.selected="true";
    }, (error) => {

      console.log(error);
      alert(error.msg);

    });
  }

  recharge(){
    const data = {
      username:this.username,
      mobileno: this.rechargeForm.get('mobileno').value,
      company: this.rechargeForm.get('company').value,
      amount: this.rechargeForm.get('amount').value,
      tranpass: this.rechargeForm.get('password').value
    };
    const data2 = {
      tranpass: data.tranpass,
      username: this.username
    };
    console.log(data);
    console.log(data2)
    const amt=data.amount;
    //checking transaction password

    this.authServive.checktransactionpass(data2).subscribe((response: any) => {
      alert(response.msg)
      console.log(response);

      this.studentServive.recharge(data).subscribe((response: any) => {
        alert(response.msg);
        console.log("baba",response);
        const data3 = {
          username:this.username
        };

        this.authServive.findbal(data3).subscribe((res: any) => {
          this.balance=res.bal;
          console.log("kaka",this.balance)
          alert(res.msg);
          const num1 = Number(this.balance)
          console.log(num1)
          const num2= Number(amt)
          console.log(num2)
          const num3 = (num1-num2).toString();
          console.log(num3)
          this.balance=num3;
          console.log(this.balance)

          const data1={
            username:this.username,
            balance:this.balance
          };
          const data={
            username:this.username
          };
          console.log("mama",data1)
          //updating user
          this.authServive.updatecusto(data1).subscribe((response: any) => {

          console.log(response);
          alert(response.msg);
          this.route.navigate(['/dashboard',data.username]);

        }, (error) => {

          console.log(error);
          alert(error.error.msg);

        });

        }, (error) => {

          console.log(error);
          alert(error.error.msg);

        });

      }, (error) => {

        console.log(error);
        alert(error.error.msg);

      });
  }, (error) => {
    console.log(error);
    alert(error.error.msg);

  });

  }
}
