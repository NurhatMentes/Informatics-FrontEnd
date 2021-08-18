import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { SecurityCameraSystemImage } from '../models/securityCameraSystemImage';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityCameraSystemImageService {

  constructor(private httpClient: HttpClient) { }


  getSecurityCameraImages(): Observable<ListResponseModel<SecurityCameraSystemImage>> {
    let newPath = environment.apiUrl + "SecurityCameraSystemImages/getall";
    return this.httpClient.get<ListResponseModel<SecurityCameraSystemImage>>(newPath);
  }

  getSecurityCameraImagesById(id: number): Observable<ListResponseModel<SecurityCameraSystemImage>> {
    let newPath = environment.apiUrl + 'SecurityCameraSystemImages/getimagesbysecuritycameraid?=' + id;
    return this.httpClient.get<ListResponseModel<SecurityCameraSystemImage>>(newPath);
  }

  addProduct(securityImageCameraSystem: SecurityCameraSystemImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "SecurityCameraSystemImages/add", securityImageCameraSystem)
  }


  upload(ImageAdd: SecurityCameraSystemImage): Observable<ResponseModel> {
    let newPath = environment.apiUrl + "SecurityCameraSystemImages";
    return this.httpClient.post<ResponseModel>(newPath, ImageAdd);
  }

  updated(ImageAdd: SecurityCameraSystemImage): Observable<ResponseModel> {
    let newPath = environment.apiUrl + "SecurityCameraSystemImages/add";
    return this.httpClient.post<ResponseModel>(newPath, ImageAdd);
  }
  
}