import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SecurityCameraSystem } from '../../models/securityCameraSystem';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { VideoEntryphoneSystem } from '../../models/videoEntryphoneSystem';

@Injectable({
  providedIn: 'root'
})
export class VideoEntryphoneSystemService {


  constructor(private httpClient: HttpClient) { }


  getVideoEntryphoneSystems(): Observable<ListResponseModel<VideoEntryphoneSystem>> {
    let newPath = environment.apiUrl + 'VideoEntryphoneSystems/getalldto';
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystem>>(newPath);
  }

  getProduct(): Observable<ListResponseModel<VideoEntryphoneSystem>> {
    let newPath = environment.apiUrl + 'VideoEntryphoneSystems/getall';
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystem>>(newPath);
  }

  getProductDetail(id: number): Observable<ListResponseModel<VideoEntryphoneSystem>> {
    let newPath = environment.apiUrl + 'VideoEntryphoneSystems/getproductdetail?id=' + id;
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystem>>(newPath);
  }

  //******POST******/

  addProduct(videoEntryphoneSystem: VideoEntryphoneSystem): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "VideoEntryphoneSystems/add", videoEntryphoneSystem)
  }

  updateProduct(videoEntryphoneSystem: VideoEntryphoneSystem): Observable<SingleResponseModel<VideoEntryphoneSystem>> {
    return this.httpClient.post<SingleResponseModel<VideoEntryphoneSystem>>(environment.apiUrl + "VideoEntryphoneSystems/update", videoEntryphoneSystem)
  }


  deleteProduct(videoEntryphoneSystem: VideoEntryphoneSystem): Observable<SingleResponseModel<VideoEntryphoneSystem>> {
    return this.httpClient.post<SingleResponseModel<VideoEntryphoneSystem>>(environment.apiUrl + "VideoEntryphoneSystems/delete", videoEntryphoneSystem)
  }
}
