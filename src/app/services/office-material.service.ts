import { environment } from 'src/environments/environment';
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


  constructor(private httpClient: HttpClient) { }


  getOfficeMaterial(): Observable<ListResponseModel<OfficeMaterial>> {
    let newPath = environment.apiUrl + 'OfficeMaterials/getalldto';
    return this.httpClient.get<ListResponseModel<OfficeMaterial>>(newPath);
  }

  getProducts(): Observable<ListResponseModel<OfficeMaterial>> {
    let newPath = environment.apiUrl + 'OfficeMaterials/getall';
    return this.httpClient.get<ListResponseModel<OfficeMaterial>>(newPath);
  }

  getProductDetail(id: number): Observable<ListResponseModel<OfficeMaterial>>{
    let newPath = environment.apiUrl + 'OfficeMaterials/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<OfficeMaterial>>(newPath);
  }
  
  //******POST******/

  addProduct(officeMaterial: OfficeMaterial): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "OfficeMaterials/add", officeMaterial)
  }

  updateProduct(officeMaterial: OfficeMaterial): Observable<SingleResponseModel<OfficeMaterial>> {
    return this.httpClient.post<SingleResponseModel<OfficeMaterial>>(environment.apiUrl + "OfficeMaterials/update", officeMaterial)
  }


  deleteProduct(officeMaterial: OfficeMaterial): Observable<SingleResponseModel<OfficeMaterial>> {
    return this.httpClient.post<SingleResponseModel<OfficeMaterial>>(environment.apiUrl + "OfficeMaterials/delete", officeMaterial)
  }
}
