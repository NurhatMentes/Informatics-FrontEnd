import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SecurityCameraSystem } from '../models/securityCameraSystem';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityCameraSystemService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getSecurityCameraSystems(): Observable<ListResponseModel<SecurityCameraSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getalldto';
    return this.httpClient.get<ListResponseModel<SecurityCameraSystem>>(newPath);
  }

  getProduct(): Observable<ListResponseModel<SecurityCameraSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getall';
    return this.httpClient.get<ListResponseModel<SecurityCameraSystem>>(newPath);
  }


  getProductDetail(id: number): Observable<ListResponseModel<SecurityCameraSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<SecurityCameraSystem>>(newPath);
  }

  //******POST******/

  addProduct(securityCameraSystem: SecurityCameraSystem): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "SecurityCameraSystems/add", securityCameraSystem)
  }

  updateProduct(securityCameraSystem: SecurityCameraSystem): Observable<SingleResponseModel<SecurityCameraSystem>> {
    return this.httpClient.post<SingleResponseModel<SecurityCameraSystem>>(this.apiUrl + "SecurityCameraSystems/update", securityCameraSystem)
  }


  deleteProduct(securityCameraSystem: SecurityCameraSystem): Observable<SingleResponseModel<SecurityCameraSystem>> {
    return this.httpClient.post<SingleResponseModel<SecurityCameraSystem>>(this.apiUrl + "SecurityCameraSystems/delete", securityCameraSystem)
  }
}
