import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { VideoEntryphoneSystem } from '../models/videoEntryphoneSystem';

@Injectable({
  providedIn: 'root'
})
export class VideoEntryphoneSystemService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getVideoEntryphoneSystems(): Observable<ListResponseModel<VideoEntryphoneSystem>> {
    let newPath = this.apiUrl + 'VideoEntryphoneSystems/getall';
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystem>>(newPath);
  }

  getProductDetail(id: number): Observable<ListResponseModel<VideoEntryphoneSystem>> {
    let newPath = this.apiUrl + 'SecurityCameraSystems/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystem>>(newPath);
  }
}
