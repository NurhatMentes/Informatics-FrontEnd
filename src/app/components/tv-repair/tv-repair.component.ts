import { Component, OnInit } from '@angular/core';
import { TvRepair } from 'src/app/models/tvRepair';
import { TvRepairService } from 'src/app/services/tv-repair.service';

@Component({
  selector: 'app-tv-repair',
  templateUrl: './tv-repair.component.html',
  styleUrls: ['./tv-repair.component.css']
})
export class TvRepairComponent implements OnInit {

  tvRepairs: TvRepair[] = [];
  dataLoaded = false;
  constructor(private tvRepairService:TvRepairService) { }

  ngOnInit(): void {
    this.getTvRepairs();
  }

  getTvRepairs() {
    this.tvRepairService.getTvRepairs().subscribe(response => {
      this.tvRepairs = response.data
      console.log(response.success)
      this.dataLoaded = true;
    })
  }
}
