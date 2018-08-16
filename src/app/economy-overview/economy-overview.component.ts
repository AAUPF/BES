import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-economy-overview',
  templateUrl: './economy-overview.component.html',
  styleUrls: ['./economy-overview.component.css']
})
export class EconomyOverviewComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}

