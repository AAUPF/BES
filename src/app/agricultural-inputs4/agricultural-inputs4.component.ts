import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../data/views';
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
  selector: 'app-agricultural-inputs4',
  templateUrl: './agricultural-inputs4.component.html',
  styleUrls: ['./agricultural-inputs4.component.css']
})
export class AgriculturalInputs4Component implements OnInit {
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

  years = ['All','2015', '2016'];
  views = NewViews;
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  //rain_fall_type = ["All","Urea",	"DAP",	"SSP",	"MOP",	"Ammonium_Sulphate",	"Complex",	"Total",	"N",	"P",	"K",	"Total_NPK",	"Grand_Total"]
  rain_fall_type = [{key: "All", value: "All"},{key:"Urea",value:"Urea"},	{key:"DAP",value:"DAP"},	{key:"SSP",value:"SSP"},	{key:"MOP",value:"MOP"},	{key:"Ammonium Sulphate",value:"Ammonium_Sulphate"},	{key:"Complex",value:"Complex"},	{key:"Total",value:"Total"},	{key:"N",value:"N"},	{key:"P",value:"P"},	{key:"K",value:"K"},	{key:"Total NPK",value:"Total_NPK"},	{key:"Grand Total",value:"Grand_Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);

    Comparison = ["None","Bihar vs District"]
    data: any = {};    

    toNumber(d) {
      if (d == "All") {
        this.years = ['2015','2016'];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        }
        else if(this.data.view == "Map View"){
          this.years = ['2015','2016'];
        } 
        else {
          this.years = ["All",'2015','2016'];
        }
      }
  }
  toView(view){
      if (view == "line") {
        this.years = ["All"];
      }
      else if(view == "Map View"){
        this.years = ['2015','2016'];
        this.rain_fall_type = [{key:"Urea",value:"Urea"},	{key:"DAP",value:"DAP"},	{key:"SSP",value:"SSP"},	{key:"MOP",value:"MOP"},	{key:"Ammonium Sulphate",value:"Ammonium_Sulphate"},	{key:"Complex",value:"Complex"},	{key:"Total",value:"Total"},	{key:"N",value:"N"},	{key:"P",value:"P"},	{key:"K",value:"K"},	{key:"Total NPK",value:"Total_NPK"},	{key:"Grand Total",value:"Grand_Total"}]
      }
      else {
        if(this.data.rain_fall_type == "All")
        {
          this.years = ['2015','2016'];
        }else{
          this.years = ["All",'2015','2016'];
        }
      }
  }
  toSet(select){
      if (select == "All") {
        this.Comparison  = ["None"]
      } else {
        this.Comparison = ["None","Bihar vs District"]
      }
  }
  toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Urea",value:"Urea"},	{key:"DAP",value:"DAP"},	{key:"SSP",value:"SSP"},	{key:"MOP",value:"MOP"},	{key:"Ammonium Sulphate",value:"Ammonium_Sulphate"},	{key:"Complex",value:"Complex"},	{key:"Total",value:"Total"},	{key:"N",value:"N"},	{key:"P",value:"P"},	{key:"K",value:"K"},	{key:"Total NPK",value:"Total_NPK"},	{key:"Grand Total",value:"Grand_Total"}]
      }else{
        if (this.data.view == "Map View") {
          this.rain_fall_type = [{key:"Urea",value:"Urea"},	{key:"DAP",value:"DAP"},	{key:"SSP",value:"SSP"},	{key:"MOP",value:"MOP"},	{key:"Ammonium Sulphate",value:"Ammonium_Sulphate"},	{key:"Complex",value:"Complex"},	{key:"Total",value:"Total"},	{key:"N",value:"N"},	{key:"P",value:"P"},	{key:"K",value:"K"},	{key:"Total NPK",value:"Total_NPK"},	{key:"Grand Total",value:"Grand_Total"}]

        } else {
          this.views  = ViewsNotTrend
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Urea",value:"Urea"},	{key:"DAP",value:"DAP"},	{key:"SSP",value:"SSP"},	{key:"MOP",value:"MOP"},	{key:"Ammonium Sulphate",value:"Ammonium_Sulphate"},	{key:"Complex",value:"Complex"},	{key:"Total",value:"Total"},	{key:"N",value:"N"},	{key:"P",value:"P"},	{key:"K",value:"K"},	{key:"Total NPK",value:"Total_NPK"},	{key:"Grand Total",value:"Grand_Total"}]
        }
      }
  }
  onSubmit(user) {
    var controller = "agricultural_inputs4s"

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
      var controller = "agricultural_inputs4s"
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
    //   var controller = "agricultural_inputs4s"
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











