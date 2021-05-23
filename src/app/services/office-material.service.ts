import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { OfficeMaterial } from '../models/officeMaterial';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OfficeMaterialService {
  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getOfficeMaterial(): Observable<ListResponseModel<OfficeMaterial>> {
    let newPath = this.apiUrl + 'OfficeMaterials/getall';
    return this.httpClient.get<ListResponseModel<OfficeMaterial>>(newPath);
  }

  getProductDetail(id: number): Observable<ListResponseModel<OfficeMaterial>>{
    let newPath = this.apiUrl + 'OfficeMaterials/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<OfficeMaterial>>(newPath);
  }
  
  //******POST******/

  addProduct(officeMaterial: OfficeMaterial): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "OfficeMaterials/add", officeMaterial)
  }

  updateProduct(officeMaterial: OfficeMaterial): Observable<SingleResponseModel<OfficeMaterial>> {
    return this.httpClient.post<SingleResponseModel<OfficeMaterial>>(this.apiUrl + "OfficeMaterials/update", officeMaterial)
  }


  deleteProduct(officeMaterial: OfficeMaterial): Observable<SingleResponseModel<OfficeMaterial>> {
    return this.httpClient.post<SingleResponseModel<OfficeMaterial>>(this.apiUrl + "OfficeMaterials/delete", officeMaterial)
  }
}
