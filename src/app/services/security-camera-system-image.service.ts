import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { SecurityCameraSystemImage } from '../models/securityCameraSystemImage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityCameraSystemImageService {
  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getSecurityCameraImages(): Observable<ListResponseModel<SecurityCameraSystemImage>> {
    let newPath = this.apiUrl + "SecurityCameraSystemImages/getall";
    return this.httpClient.get<ListResponseModel<SecurityCameraSystemImage>>(newPath);
  }

  getSecurityCameraImagesById(id: number): Observable<ListResponseModel<SecurityCameraSystemImage>> {
    let newPath = this.apiUrl + 'SecurityCameraSystemImages/getimagesbysecuritycameraid?=' + id;
    return this.httpClient.get<ListResponseModel<SecurityCameraSystemImage>>(newPath);
  }
}
