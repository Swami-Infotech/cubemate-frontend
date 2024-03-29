import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  signup(data:any){
    return this.http.post(this.baseurl + "Web/WebSignUp",data)
  }
  GetAllCategory(){
    return this.http.get(this.baseurl+"App/GetAllCategories")
  }
}
