import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { environment } from 'src/environments/environment';
import {distinct} from'rxjs/operators'
import { from, pipe, zip } from 'rxjs';

@Component({
  selector: 'app-office-material',
  templateUrl: './office-material.component.html',
  styleUrls: ['./office-material.component.css']
})
export class OfficeMaterialComponent implements OnInit {

  officeMaterials: OfficeMaterial[] = [];
  imageBasePath = environment.baseUrl
  dataLoaded = false;
  constructor(
    private officeMaterialService: OfficeMaterialService) { }

  ngOnInit(): void {
    this.getOfficeMaterial()
  }


  getOfficeMaterial() {
    this.officeMaterialService.getOfficeMaterial().subscribe(response => {
      this.officeMaterials = response.data
      console.log(response.data)
      this.dataLoaded = true;
    })
  }
}
