import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { login, User } from '../interface/user';
=======
import { Update, User } from '../interface/user';
>>>>>>> 867e5259c57596edfe1d966eed6b6f6928ac38e0

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:4304/api/clients/';

  constructor(private http:HttpClient) { }


  //create a user
  addUser(user:User):Observable<any>{
  return this.http.post<any>(`${this,this.baseUrl}`, user);
  
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
  updateUser(user: Update, id: Update): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, user)
  }

  userLogin(login: login): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`, login)
    
  }

  removeUserById(id:User):Observable<any>{
    return this.http.delete<any[]>(`${this.baseUrl}${id}`);
  }


}
