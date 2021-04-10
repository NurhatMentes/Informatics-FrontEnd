import { Component, OnInit } from '@angular/core';
import { OfficeMaterial } from 'src/app/models/officeMaterial';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  officeMaterials: OfficeMaterial[] = [];
  currentCategory: OfficeMaterial;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentCategory(officeMaterial: OfficeMaterial) {
    this.currentCategory = officeMaterial;
  }

}
