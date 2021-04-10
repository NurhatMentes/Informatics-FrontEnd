import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerRepair } from '../models/computerRepair';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ComputerRepairService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getComputerRepairs(): Observable<ListResponseModel<ComputerRepair>>{
    let newPath = this.apiUrl + 'ComputerRepairs/getall';
    return this.httpClient.get<ListResponseModel<ComputerRepair>>(newPath);
  }
}
