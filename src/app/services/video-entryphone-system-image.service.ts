import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { VideoEntryphoneSystemImage } from '../models/videoEntryphoneSystemImage';

@Injectable({
  providedIn: 'root'
})
export class VideoEntryphoneSystemImageService {
  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getVideoEntryphoneImages(): Observable<ListResponseModel<VideoEntryphoneSystemImage>> {
    let newPath = this.apiUrl + "VideoEntryphoneSystems/getall";
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystemImage>>(newPath);
  }

  getVideoEntryphoneImagesById(id: number): Observable<ListResponseModel<VideoEntryphoneSystemImage>> {
    let newPath = this.apiUrl + 'VideoEntryphoneSystems/getimagesbyvideoentryphoneid?=' + id;
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystemImage>>(newPath);
  }
}
