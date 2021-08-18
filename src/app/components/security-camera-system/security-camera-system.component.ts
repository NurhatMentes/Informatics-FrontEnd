import { Component, OnInit } from '@angular/core';
import { SecurityCameraSystem } from 'src/app/models/securityCameraSystem';
import { SecurityCameraSystemService } from 'src/app/guards/services/security-camera-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-security-camera-system',
  templateUrl: './security-camera-system.component.html',
  styleUrls: ['./security-camera-system.component.css']
})
export class SecurityCameraSystemComponent implements OnInit {

  securityCameraSystems: SecurityCameraSystem[] = [];
  imageBasePath = environment.baseUrl
  dataLoaded = false;

  constructor(private securityCameraService:SecurityCameraSystemService) { }

  ngOnInit(): void {
    this.getSecurityCameraSystems();
  }

  getSecurityCameraSystems() {
    this.securityCameraService.getSecurityCameraSystems().subscribe(response => {
      this.securityCameraSystems = response.data
      console.log(response.success)
      this.dataLoaded = true;
    })
  }
}
