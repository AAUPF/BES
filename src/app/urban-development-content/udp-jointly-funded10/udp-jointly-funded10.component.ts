import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-udp-jointly-funded10',
  templateUrl: './udp-jointly-funded10.component.html',
  styleUrls: ['./udp-jointly-funded10.component.css']
})
export class UDPJointlyFunded10Component implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
