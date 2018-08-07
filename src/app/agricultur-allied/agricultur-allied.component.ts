import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-agricultur-allied',
  templateUrl: './agricultur-allied.component.html',
  styleUrls: ['./agricultur-allied.component.css']
})
export class AgriculturAlliedComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
