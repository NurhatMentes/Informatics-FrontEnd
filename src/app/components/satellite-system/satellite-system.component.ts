import { Component, OnInit } from '@angular/core';
import { SatelliteSystem } from 'src/app/models/satelliteSystem';
import { SatelliteSystemService } from 'src/app/guards/services/satellite-system.service';

@Component({
  selector: 'app-satellite-system',
  templateUrl: './satellite-system.component.html',
  styleUrls: ['./satellite-system.component.css']
})
export class SatelliteSystemComponent implements OnInit {

  satelliteSystems: SatelliteSystem[] = [];
  dataLoaded = false;

  constructor(private satelliteService: SatelliteSystemService) { }

  ngOnInit(): void {
    this.getSatelliteSystems();
  }

  getSatelliteSystems() {
    this.satelliteService.getSatelliteSystems().subscribe(response => {
      this.satelliteSystems = response.data
      console.log(response.success)
      this.dataLoaded = true;
    })
  }
   
}
