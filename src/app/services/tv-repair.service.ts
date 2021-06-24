import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TvRepair } from '../models/tvRepair';

@Injectable({
  providedIn: 'root'
})
export class TvRepairService {


  constructor(private httpClient: HttpClient) { }


  getTvRepairs(): Observable<ListResponseModel<TvRepair>> {
    let newPath = environment.apiUrl + 'TvRepairs/getall';
    return this.httpClient.get<ListResponseModel<TvRepair>>(newPath);
  }
}
