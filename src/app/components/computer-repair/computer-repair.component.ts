import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerRepair } from 'src/app/models/computerRepair';
import { ComputerRepairService } from 'src/app/guards/services/computer-repair.service';

@Component({
  selector: 'app-computer-repair',
  templateUrl: './computer-repair.component.html',
  styleUrls: ['./computer-repair.component.css']
})
export class ComputerRepairComponent implements OnInit {

  computerRepairs: ComputerRepair[]=[];
  dataLoaded = false;

  constructor(
    private computerRepairService: ComputerRepairService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.getComputerRepairs();
    // })
    this.getComputerRepairs();
  }

  getComputerRepairs() {
    this.computerRepairService.getComputerRepairs().subscribe(response => {
      this.computerRepairs = response.data
      console.log(response.success)
      this.dataLoaded = true;
    })
  }

}
