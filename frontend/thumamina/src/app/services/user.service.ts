import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Update, User,login, edit } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addRunner(value: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:4304/api/clients';

  constructor(private http:HttpClient) { }


  //create a user
  addUser(user:User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, user);
  
  }


//read user
  getUsers(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }


//read user by id
  getUser(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
  //update
  updateUser(user: Date, id: Date): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, user)
  }

  userLogin(login: login): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`, login)
    
  }

  removeUserById(id:User):Observable<any>{
    return this.http.delete<any[]>(`${this.baseUrl}${id}`);
  }

}


