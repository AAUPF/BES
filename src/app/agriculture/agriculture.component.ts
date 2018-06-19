import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
declare var CanvasJS:any;
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);


  }
  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  years = [2016, 2017];
  views = ["Graph", "Trend Line","Map View","Table"];
  rain_fall_type = ["All","Winter Rain","Hot Weather Rain","South West Monsoon Rain","North West Monsoon Rain"]
  Comparison = ["None","Bihar vs District"]
  data: Object = {};
  onSubmit(user) {
    if (user.view == "Graph") {
      this.visbile_chart= true;
      this.visbile= false;
      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type);
      } else {
        this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type);
      }
    } 
    else if(user.view == "Trend Line") {
      this.visbile_chart= true;
      this.visbile= false;
      if (user.districts == "All") {
        this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view);
        
      } else {
        this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type);
      }
      
    } 
    else if(user.view == "Table") {
      this.visbile_chart= true;
      this.visbile= false;
      this.SvgService.table();
    }
    else if(user.view == "Map View") {
     const that = this;
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      // this.SvgService.test("echamparan");
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg();
            var u = "wchamparan";
            that.SvgService.test(u,user.view);
      }, 500);
      // this.SvgService.svg();
    }
    console.log(user);
  }     
  // test(a) {
  //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
  //   let svgDoc = map.contentDocument; // should be fine
  //   let echamparan = svgDoc.getElementById(a);
  //   echamparan.classList.add("mystyle");
  //   console.log(echamparan); 
  // }
  ngOnInit() {
    // this.SvgService.barchart("wchamparan");
    // this.SvgService.svg();
  }

}
