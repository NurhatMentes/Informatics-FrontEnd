import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecurityCameraSystem } from 'src/app/models/securityCameraSystem';
import { SecurityCameraSystemService } from 'src/app/services/security-camera-system.service';
import { environment } from 'src/environments/environment';
import { ModalService } from '../dashboard/_modal';

@Component({
  selector: 'app-security-camera-system-detail',
  templateUrl: './security-camera-system-detail.component.html',
  styleUrls: ['./security-camera-system-detail.component.css']
})
export class SecurityCameraSystemDetailComponent implements OnInit {

  securityCameraSystems: SecurityCameraSystem[] = [];
  dataLoaded = false;
  imageBasePath = environment.baseUrl
  constructor(private cameraService: SecurityCameraSystemService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getProductDetail(params["id"]);
      }
    });
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getProductDetail(id: number) {
    this.cameraService.getProductDetail(id).subscribe(response => {
      this.securityCameraSystems = response.data;
      this.dataLoaded = true;
    })
  }

}
