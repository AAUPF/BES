import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-human-development',
  templateUrl: './human-development.component.html',
  styleUrls: ['./human-development.component.css']
})
export class HumanDevelopmentComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
