import { Component, OnInit } from '@angular/core';
import { TonerRefill } from 'src/app/models/tonerRefill';
import { TonerRefillService } from 'src/app/services/toner-refill.service';

@Component({
  selector: 'app-toner-refill',
  templateUrl: './toner-refill.component.html',
  styleUrls: ['./toner-refill.component.css']
})
export class TonerRefillComponent implements OnInit {

  tonerRefills: TonerRefill[] = [];
  dataLoaded = false;
  constructor(private tonerRefillService:TonerRefillService) { }

  ngOnInit(): void {
    this.getTonerRefills();
  }


  getTonerRefills() {
    this.tonerRefillService.getTonerRefills().subscribe(response => {
      this.tonerRefills = response.data
      console.log(response.data)
      this.dataLoaded = true;
    })
  }


}
