import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TonerRefill } from '../models/tonerRefill';

@Injectable({
  providedIn: 'root'
})
export class TonerRefillService {



  constructor(private httpClient: HttpClient) { }


  getTonerRefills(): Observable<ListResponseModel<TonerRefill>> {
    let newPath = environment.apiUrl + 'TonerRefills/getall';
    return this.httpClient.get<ListResponseModel<TonerRefill>>(newPath);
  }
}
