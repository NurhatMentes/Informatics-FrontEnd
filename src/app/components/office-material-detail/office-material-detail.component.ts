import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialImage } from 'src/app/models/officeMaterialImage';
import { OfficeMaterialImageService } from 'src/app/services/office-material-image.service';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-office-material-detail',
  templateUrl: './office-material-detail.component.html',
  styleUrls: ['./office-material-detail.component.css']
})
export class OfficeMaterialDetailComponent implements OnInit {

  officeMaterials: OfficeMaterial[] = [];
  images: OfficeMaterialImage[] = [];
  imageBasePath = environment.baseUrl
  dataLoaded = false; 

  constructor(private officeMaterialService: OfficeMaterialService,
    private activatedRoute: ActivatedRoute,
  private imageService:OfficeMaterialImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getProductDetail(params["id"]);
        this.getOfficeMaterialImagesById(params["id"]);
      }
    });
  }

  getOfficeMaterialImagesById(id: number) {
    this.imageService.getOfficeMaterialImagesById(id).subscribe(response => {
      this.images = response.data;
      console.log(response.data)
    })
  }

  getProductDetail(id: number) {
    this.officeMaterialService.getProductDetail(id).subscribe(response => {
      this.officeMaterials = response.data;
      this.dataLoaded = true;
      console.log(this.officeMaterials = response.data)
    })
  }
}
