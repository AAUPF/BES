import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-rural-development',
  templateUrl: './rural-development.component.html',
  styleUrls: ['./rural-development.component.css']
})
export class RuralDevelopmentComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
