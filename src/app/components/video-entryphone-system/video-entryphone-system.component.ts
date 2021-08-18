import { Component, OnInit } from '@angular/core';
import { VideoEntryphoneSystem } from 'src/app/models/videoEntryphoneSystem';
import { VideoEntryphoneSystemService } from 'src/app/guards/services/video-entryphone-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-entryphone-system',
  templateUrl: './video-entryphone-system.component.html',
  styleUrls: ['./video-entryphone-system.component.css']
})
export class VideoEntryphoneSystemComponent implements OnInit {

  videoEntryphoneSystems: VideoEntryphoneSystem[] = [];
  dataLoaded = false;
  imageBasePath = environment.baseUrl
  constructor(private videoEntryphoneService: VideoEntryphoneSystemService) { }

  ngOnInit(): void {
    this.getVideoEntryphoneSystems();
  }

  getVideoEntryphoneSystems() {
    this.videoEntryphoneService.getVideoEntryphoneSystems().subscribe(response => {
      this.videoEntryphoneSystems = response.data
      console.log(response.success)
      this.dataLoaded = true;
    })
  }
}
