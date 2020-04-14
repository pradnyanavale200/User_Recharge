import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentApi = 'http://localhost:3000/student';
  compApi = 'http://localhost:3000/company';
  rechApi = 'http://localhost:3000/recharge';
  tranApi = 'http://localhost:3000/transaction';
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  Delete(id) {
    return this.http.delete(this.studentApi + `/studentDelete/${id}`);
  }
  show(){
    console.log('yeye');
    return this.http.get(this.compApi + `/show`);
  }
  showpack(data){
    console.log('yeye');
    return this.http.post(this.rechApi + `/showpack`, data);
  }
  signup(data){
    return this.http.post(this.studentApi + `/signup`, data);
  }
  recharge(data){
    return this.http.post(this.tranApi + `/recharge`, data);
  }
  showone(data){
    return this.http.post(this.studentApi + `/showone`, data);
  }

  update(data){
    return this.http.put(this.studentApi + `/update`, data);
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
