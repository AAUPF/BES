import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';

declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-cropping-pattern',
  templateUrl: './cropping-pattern.component.html',
  styleUrls: ['./cropping-pattern.component.css']
})
export class CroppingPatternComponent implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
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

  years = ["All",2012,2013,2014,2015,2016];
  views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"}];
  rain_fall_type = [{key: "All", value: "All"},{key:"Food grains",value:"Food_grains"},	{key:"Cereals",value:"Cereals"},	{key:"Pulses",value:"Pulses"},	{key:"Oil seeds",value:"Oil_seeds"},	{key:"Fibre Crops",value:"Fibre_Crops"},	{key:"Sugarcane",value:"Sugarcane"},	{key:"Total Area",value:"Total_Area"},]
    Comparison = [{key: "none", value: "None"},{key:"Food grains",value:"Food_grains"},	{key:"Cereals",value:"Cereals"},	{key:"Pulses",value:"Pulses"},	{key:"Oil seeds",value:"Oil_seeds"},	{key:"Fibre Crops",value:"Fibre_Crops"},	{key:"Sugarcane",value:"Sugarcane"},	{key:"Total Area",value:"Total_Area"}]
    data: any = {};    

    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: ""};
        // this.data.Comparison  = undefined
        // this.butDisabled = true;
  
        this.Comparison = [{key: "none", value: "None"}]
  
      } else {
        // this.butDisabled = false;
        this.Comparison = [{key: "none", value: "None"},{key:"Food grains",value:"Food_grains"},	{key:"Cereals",value:"Cereals"},	{key:"Pulses",value:"Pulses"},	{key:"Oil seeds",value:"Oil_seeds"},	{key:"Fibre Crops",value:"Fibre_Crops"},	{key:"Sugarcane",value:"Sugarcane"},	{key:"Total Area",value:"Total_Area"}]
      }
      }

  onSubmit(user) {
    var controller = "cropping_patterns"
    if (user.view == "column" || user.view == "line"|| user.view == "scatter"|| user.view == "pie"|| user.view == "Table") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
      } 
     else if(user.Comparison) { 
      if (user.view == "Table") {
        this.visbile_chart= false;
        this.visbile_table= true;
        this.spinner.show();
      } else {
        this.visbile_chart= true;
        this.visbile_table= false;
        this.spinner.show();
        
      }
      this.AgricultureService.barchart_bihar_vs_district_rainfall(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
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
        this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
      } 
      else if(user.Comparison == "Bihar vs District") { 
        this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
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
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      var controller = "cropping_patterns"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
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

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }

}






