import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SatelliteSystem } from '../models/satelliteSystem';

@Injectable({
  providedIn: 'root'
})
export class SatelliteSystemService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getSatelliteSystems(): Observable<ListResponseModel<SatelliteSystem>> {
    let newPath = this.apiUrl + 'SatelliteSystems/getall';
    return this.httpClient.get<ListResponseModel<SatelliteSystem>>(newPath);
  }
}
