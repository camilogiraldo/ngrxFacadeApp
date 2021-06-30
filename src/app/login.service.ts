import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(name: string): Observable<any> {
    const ENDPOINT = `https://randomuser.me/api/?seed=${name}`;
    return this.http.get(ENDPOINT);
  }
}
