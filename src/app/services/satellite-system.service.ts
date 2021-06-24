import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SatelliteSystem } from '../models/satelliteSystem';

@Injectable({
  providedIn: 'root'
})
export class SatelliteSystemService {


  constructor(private httpClient: HttpClient) { }


  getSatelliteSystems(): Observable<ListResponseModel<SatelliteSystem>> {
    let newPath = environment.apiUrl + 'SatelliteSystems/getall';
    return this.httpClient.get<ListResponseModel<SatelliteSystem>>(newPath);
  }
}
