import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgService } from '../services/svg.service';
declare var CanvasJS:any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: any;
  constructor(private SvgService: SvgService) { }
  appendToContainer() {
    let a:any
    a = "echamparan"
    // this.SvgService.test(a)
  }
  options = [1, 2, 3];
  optionSelected: any;
  toNumber() {
   console.log(this.optionSelected);
      if( this.optionSelected  ==  1) {
        // this.SvgService.barchart();
      } else if (this.optionSelected  ==  2) {
        this.SvgService.pie();
      }
      else if (this.optionSelected  ==  3) {
        // this.SvgService.barchart();
      }
  }
  test(a) {
    let map = document.getElementById("biharsvg") as HTMLObjectElement;
    let svgDoc = map.contentDocument; // should be fine
    let echamparan = svgDoc.getElementById(a);
    echamparan.classList.add("mystyle");
    console.log(echamparan); 
  }
  ngOnInit() {
    // this.SvgService.barchart();
     this.SvgService.svg();
}
}
