import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-banking-and-allied',
  templateUrl: './banking-and-allied.component.html',
  styleUrls: ['./banking-and-allied.component.css']
})
export class BankingAndAlliedComponent implements OnInit {

  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}