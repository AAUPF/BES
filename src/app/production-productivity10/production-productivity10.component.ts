import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { FruitsService } from '../services/fruits.service';
import { Districts } from '../data/districts';
import { Views } from '../data/views';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';

import  '../data/data'
declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-production-productivity10',
  templateUrl: './production-productivity10.component.html',
  styleUrls: ['./production-productivity10.component.css']
})
export class ProductionProductivity10Component implements OnInit {
  constructor(private FruitsService: FruitsService,private SvgService: SvgService,private spinner: NgxSpinnerService) { 
    // this.FruitsService.barchart();
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
  visbile_table= false;

  years = [2015, 2016];
  views = Views;
  rain_fall_type = [{key: "All", value: "All"}, {key: "Area", value: "Area"}, {key: "Production", value: "Production"}]
  fruits = ["Mango","Guava","Litchi","Banana"]
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
    var controller = "production_productivity10s"
    if (user.view == "Graph") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      // this.FruitsService.pie();
      if (user.districts == "All") {
        this.FruitsService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller,user.fruits);
      } 
     else if(user.Comparison == "Bihar vs District") { 
      this.FruitsService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.fruits);
      console.log(user.fruits);
      
      }
      else {
        this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
      }
    } 
    else if(user.view == "Trend Line") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      if (user.districts == "All") {
        this.FruitsService.trend_line_all(user.districts,user.years,user.rain_fall_type,controller,user.fruits,user.view);
        
      } 
      else if(user.Comparison == "Bihar vs District") { 
        this.FruitsService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.fruits);
        }
      else {
        this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
      }
      
    } 
    else if(user.view == "Table") {
      this.visbile_chart= false;
      this.visbile_table= true;
      this.visbile= false;
      this.spinner.show();

      this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    }
    else if(user.view == "Map View") {
     const that = this;
      // this.FruitsService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      var controller = "production_productivity10s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }
    else if(user.view == "Bubble") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.FruitsService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.fruits,user.view);
      } 
     else if(user.Comparison == "Bihar vs District") { 
      this.FruitsService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
      }
      else {
        this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
      }
      
    } 
  }     
  // test(a) {
  //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
  //   let svgDoc = map.contentDocument; // should be fine
  //   let echamparan = svgDoc.getElementById(a);
  //   echamparan.classList.add("mystyle");
  //   console.log(echamparan); 
  // }

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.FruitsService.testgoogle()


  
  }

}










