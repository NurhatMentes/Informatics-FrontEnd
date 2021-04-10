import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TvRepair } from '../models/tvRepair';

@Injectable({
  providedIn: 'root'
})
export class TvRepairService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getTvRepairs(): Observable<ListResponseModel<TvRepair>> {
    let newPath = this.apiUrl + 'TvRepairs/getall';
    return this.httpClient.get<ListResponseModel<TvRepair>>(newPath);
  }
}
