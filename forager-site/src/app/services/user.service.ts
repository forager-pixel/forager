import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private appConfigService: AppConfigService,
    private http: HttpClient
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appConfigService.apiBaseUrl}/users`);
  }
}
