import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-office-material-detail',
  templateUrl: './office-material-detail.component.html',
  styleUrls: ['./office-material-detail.component.css']
})
export class OfficeMaterialDetailComponent implements OnInit {

  officeMaterials: OfficeMaterial[] = [];
  imageBasePath = environment.baseUrl
  dataLoaded = false;

  constructor(private officeMaterialService: OfficeMaterialService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getProductDetail(params["id"]);
      }
    });
  }


  getProductDetail(id: number) {
    this.officeMaterialService.getProductDetail(id).subscribe(response => {
      this.officeMaterials = response.data;
      this.dataLoaded = true;
      console.log(this.officeMaterials = response.data)
    })
  }
}
