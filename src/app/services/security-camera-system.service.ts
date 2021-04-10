import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SecurityCameraSystem } from '../models/securityCameraSystem';

@Injectable({
  providedIn: 'root'
})
export class SecurityCameraSystemService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getSecurityCameraSystems(): Observable<ListResponseModel<SecurityCameraSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getall';
    return this.httpClient.get<ListResponseModel<SecurityCameraSystem>>(newPath);
  }

  getProductDetail(id: number): Observable<ListResponseModel<SecurityCameraSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<SecurityCameraSystem>>(newPath);
  }
}
