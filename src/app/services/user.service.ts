import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = environment.apiUrl + 'Users/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}
