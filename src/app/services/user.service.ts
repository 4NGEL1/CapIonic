import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersResponse, User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersResponse>{
    return this.http.get<UsersResponse>(`${environment.apiUrl}/users`);
  }

  getUser(id:number): Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
