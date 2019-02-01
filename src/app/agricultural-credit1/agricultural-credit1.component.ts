import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';
import{Functions} from '../data/func';
import { ViewsNotMap } from '../data/viewsnotmap';
import { ViewsNotDistrict } from '../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-agricultural-credit1',
  templateUrl: './agricultural-credit1.component.html',
  styleUrls: ['./agricultural-credit1.component.css']
})
export class AgriculturalCredit1Component implements OnInit {
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
  //views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"}];
  views = ViewsNotMap;
  // rain_fall_type = ["All","Winter Rain","Hot Weather Rain","South West Monsoon Rain","North West Monsoon Rain"]
  rain_fall_type = [{key: "All", value: "All"},{key: "Commercial Bank Target", value: "Commercial_Bank_Target"},	{key: "Commercial Bank Achievement", value: "Commercial_Bank_Achievement"},	{key: "RRBs Target", value: "RRBs_Target"},	{key: "RRBs Achievement", value: "RRBs_Achievement"},	{key: "CCBs Target", value: "CCBs_Target"},	{key: "CCBs Achievement", value: "CCBs_Achievement"},	{key: "Total Target", value: "Total_Target"},	{key: "Total Achievement", value: "Total_Achievement"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"},{key: "Commercial Bank Target", value: "Commercial_Bank_Target"},	{key: "Commercial Bank Achievement", value: "Commercial_Bank_Achievement"},	{key: "RRBs Target", value: "RRBs_Target"},	{key: "RRBs Achievement", value: "RRBs_Achievement"},	{key: "CCBs Target", value: "CCBs_Target"},	{key: "CCBs Achievement", value: "CCBs_Achievement"},	{key: "Total Target", value: "Total_Target"},	{key: "Total Achievement", value: "Total_Achievement"},]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison = "None";
      // this.data.Comparison  = undefined
      // this.butDisabled = true;
      // this.Comparison_sort = [{key: "None", value: "None"}]
    } else {
      // this.butDisabled = false;
      //this.Comparison = [{key: "none", value: "None"},{key: "Commercial Bank Target", value: "Commercial_Bank_Target"},	{key: "Commercial Bank Achievement", value: "Commercial_Bank_Achievement"},	{key: "RRBs Target", value: "RRBs_Target"},	{key: "RRBs Achievement", value: "RRBs_Achievement"},	{key: "CCBs Target", value: "CCBs_Target"},	{key: "CCBs Achievement", value: "CCBs_Achievement"},	{key: "Total Target", value: "Total_Target"},	{key: "Total Achievement", value: "Total_Achievement"},]
      this.Comparison_sort = this.Comparison.sort(f.compare);
    }
    }



    toYear(year){
      if(year == "All"){
        
  this.views = ViewsNotMap
      }else{
        this.views  =  ViewsNotDistrict
      }
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All",2012,2013,2014,2015,2016];
  }
    }
  onSubmit(user) {
    var controller = "agricultural_credit1s"
    if (user.view !== "Map View") {
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
      else if(user.Comparison) { 
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
      var controller = "agricultural_credit1s"
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
        this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
      } 
     else if(user.Comparison) { 
      this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
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
// this.AgricultureService.testgoogle()


  
  }

}







