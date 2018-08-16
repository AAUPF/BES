import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-state-finances',
  templateUrl: './state-finances.component.html',
  styleUrls: ['./state-finances.component.css']
})
export class StateFinancesComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
