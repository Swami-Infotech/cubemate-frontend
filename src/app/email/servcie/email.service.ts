import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { forgetpass } from '../model/foeget';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  forgetpassword(data:forgetpass){
    return this.http.post(this.baseurl + "Auth/ForgetPassword",data)
  }
}
