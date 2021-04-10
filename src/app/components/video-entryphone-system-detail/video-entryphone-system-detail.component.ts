import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoEntryphoneSystem } from 'src/app/models/videoEntryphoneSystem';
import { VideoEntryphoneSystemService } from 'src/app/services/video-entryphone-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-entryphone-system-detail',
  templateUrl: './video-entryphone-system-detail.component.html',
  styleUrls: ['./video-entryphone-system-detail.component.css']
})
export class VideoEntryphoneSystemDetailComponent implements OnInit {

  videoEntryphoneSystems: VideoEntryphoneSystem[] = [];
  dataLoaded = false;
  imageBasePath = environment.baseUrl
  constructor(private videoEntryphoneService: VideoEntryphoneSystemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getProductDetail(params["id"]);
      }
    });
  }

  getProductDetail(id: number) {
    this.videoEntryphoneService.getProductDetail(id).subscribe(response => {
      this.videoEntryphoneSystems = response.data;
      console.log(this.videoEntryphoneSystems = response.data)
    })
  }
}
