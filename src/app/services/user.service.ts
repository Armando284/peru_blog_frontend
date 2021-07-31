import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/create`, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/update?userID=${id}`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.BASE_URL}/delete?userID=${id}`);
  }
}
