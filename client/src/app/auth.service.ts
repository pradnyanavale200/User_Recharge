import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  forgetPassword(data) {
    return this.http.post(this.authApi + '/forgetpassword', data);
  }
  login(data) {
    return this.http.post(this.authApi + '/login', data);
  }
  register(data) {
    return this.http.post(this.authApi + '/signup', data);
  }
  findbal(data) {
    return this.http.post(this.authApi + '/findbal', data);
  }
  updatecusto(data1){
    return this.http.put(this.authApi + `/updatecusto`, data1);
  }
  checktransactionpass(data2){
    return this.http.post(this.authApi + '/checktransactionpass', data2);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
