import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-urban-development',
  templateUrl: './urban-development.component.html',
  styleUrls: ['./urban-development.component.css']
})
export class UrbanDevelopmentComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
