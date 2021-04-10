import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { OfficeMaterialImage } from '../models/officeMaterialImage';

@Injectable({
  providedIn: 'root'
})
export class OfficeMaterialImageService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getOfficeMaterialImages(): Observable<ListResponseModel<OfficeMaterialImage>> {
    let newPath = this.apiUrl + "OfficeMaterialImages/getall";
    return this.httpClient.get<ListResponseModel<OfficeMaterialImage>>(newPath);
  }

  getOfficeMaterialImagesById(id:number): Observable<ListResponseModel<OfficeMaterialImage>> {
    let newPath = this.apiUrl + 'OfficeMaterialImages/getimagesbyofficematerialid?='+id;
    return this.httpClient.get<ListResponseModel<OfficeMaterialImage>>(newPath);
  }
}
