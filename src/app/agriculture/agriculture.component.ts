import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);
  }
  // title:string;
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  years = [2016, 2017];
  views = ["Graph", "Trend Line","Map View","Table"];
  rain_fall_type = ["All","Winter Rain","Hot Weather Rain","South West Monsoon Rain","North West Monsoon Rain"]
    Comparison = ["None","Bihar vs District"]
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data == {years: null, views: "",Comparison: ""};
      this.data.Comparison  = undefined
      this.butDisabled = true;

    } else {
      this.butDisabled = false;
    }
    
    }
  onSubmit(user) {
    if (user.view == "Graph") {
      this.visbile_chart= true;
      this.visbile= false;
      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type);
      } 
     else if(user.Comparison == "Bihar vs District") { 
      this.AgricultureService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison);
      }
      else {
        this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type);
      }
    } 
    else if(user.view == "Trend Line") {
      this.visbile_chart= true;
      this.visbile= false;
      if (user.districts == "All") {
        this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view);
        
      } 
      else if(user.Comparison == "Bihar vs District") { 
        this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison);
        }
      else {
        this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type);
      }
      
    } 
    else if(user.view == "Table") {
      this.visbile_chart= true;
      this.visbile= false;
      this.spinner.show();

      this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison);
    }
    else if(user.view == "Map View") {
     const that = this;
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts);
            var u = "wchamparan";
            that.SvgService.test(u,user.view,user.rain_fall_type,user.years,user.districts,user.Comparison); 
      }, 500);
      // this.SvgService.svg();
      
    }
  }     
  // test(a) {
  //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
  //   let svgDoc = map.contentDocument; // should be fine
  //   let echamparan = svgDoc.getElementById(a);
  //   echamparan.classList.add("mystyle");
  //   console.log(echamparan); 
  // }

  ngOnInit() {
  
// this.AgricultureService.testgoogle()


  
  }

}
