import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Views } from '../data/views';
import { Location } from '@angular/common';
import{Functions} from '../data/func';
import { NewViews } from '../data/newviews';
import { ViewsNotMap } from '../data/viewsnotmap';
import { ViewsNotTrend } from '../data/viewsnottrend';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-agricultural-credit2',
  templateUrl: './agricultural-credit2.component.html',
  styleUrls: ['./agricultural-credit2.component.css']
})
export class AgriculturalCredit2Component implements OnInit {
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

  years = ["All",'2014', '2015','2016'];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = NewViews;
  rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.years = ['2014', '2015','2016'];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        }
        else if(this.data.view == "Map View"){
          this.years = ['2014', '2015','2016'];
        } 
        else {
          this.years = ["All",'2014', '2015','2016'];
        }
      }
  }
  toView(view){
      if (view == "line") {
        this.years = ["All"];
      }
      else if(view == "Map View"){
        this.years = ['2014', '2015','2016'];
        this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
      }
      else {
        if(this.data.rain_fall_type == "All")
        {
          this.years = ['2014', '2015','2016'];
        }else{
          this.years = ["All",'2014', '2015','2016'];
        }
      }
  }
  toSet(select){
      if (select == "All") {
        this.Comparison  = ["None"]
      } else {
        this.Comparison = ["None","Bihar"]
      }
  }
  toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
      }else{
        if (this.data.view == "Map View") {
          this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]

        } else {
          this.views  = ViewsNotTrend
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
        }
      }
  }



    // toHide(view){
    //   if(view == "Map View"){
    //     this.data.years == '2015';
    //     this.years = ['2014', '2015','2016'];
    //     this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  
    //   }else{
    //     if (view == "line") {
    //       this.data.years == "All"
    //       this.years = ["All"];
    //     } else {
    //       this.data.years == "All"
    //       this.years = ["All",'2014', '2015','2016'];
    //     }
    //     // this.years = ["All",2015,2016];
    //     if(this.data.years == "2001"){
    //       this.rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
    //       this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //     }else{
    //       if(this.data.years == "All"){
    //         this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
    //       this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //       }else{
    //         this.rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},	{key:"Achievement",value:"Achievement"},		{key:"Percentage Target",value:"Percentage_Target"},	{key:"Percentage Achievement",value:"Percentage_Achievement"}]
    //         this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //       }
          
    //     }
        
    //   }
    // }
  onSubmit(user) {
    var controller = "agricultural_credit2s"

    if (user.view !== "Map View") {

      console.log("errror");
      
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;
      // this.AgricultureService.pie();
      if(user.view) { 

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
    } 
    else if(user.view == "Map View") {
     const that = this;
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      var controller = "agricultural_credit2s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }


    // if (user.view == "Graph") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
    //   }
    // } 
    // else if(user.view == "Trend Line") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   if (user.districts == "All") {
    //     this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
    //   } 
    //   else if(user.Comparison == "Bihar vs District") { 
    //     this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //     }
    //   else {
    //     this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
    //   }
      
    // } 
    // else if(user.view == "Table") {
    //   this.visbile_chart= false;
    //   this.visbile_table= true;
    //   this.visbile= false;
    //   this.spinner.show();

    //   this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    // }
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "agricultural_credit2s"
    //   this.spinner.show();
    //   setTimeout(function() {
    //     //  that.SvgService.test("echamparan");
    //         that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
    //         var u = "wchamparan";
    //         that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
    //   }, 500);
    //   // this.SvgService.svg();
      
    // }
    // else if(user.view == "Bubble") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   }
      
    // } 

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








