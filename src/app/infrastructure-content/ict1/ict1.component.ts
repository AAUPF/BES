import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ict1',
  templateUrl: './ict1.component.html',
  styleUrls: ['./ict1.component.css']
})
export class ICT1Component implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
