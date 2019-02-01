import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { Views } from '../data/views';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
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
  selector: 'app-production-productivity11',
  templateUrl: './production-productivity11.component.html',
  styleUrls: ['./production-productivity11.component.css']
})
export class ProductionProductivity11Component implements OnInit {
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
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = NewViews;
  rain_fall_type =[{key: "All", value: "All"},{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  fruits = ["Mango","Guava","Litchi","Banana"]
    Comparison = ["None","Bihar vs District"]
    data: any = {};    
    // toNumber(d) {
    // if (d == "All") {
    //   this.data == {years: null, views: "",Comparison: ""};
    //   this.data.Comparison  = undefined
    //   this.butDisabled = true;

    // } else {
    //   this.butDisabled = false;
    // }
    
    // }
    // toHide(view){
    //   if(view == "Map View"){
    //     this.rain_fall_type =[{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"},]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }else{
    //     this.rain_fall_type =[{key: "All", value: "All"},{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"},]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }
    // }




    toNumber(d) {
      if (d == "All") {
        this.Comparison = ["None"]
         this.data.Comparison  = "None"
        // this.butDisabled = true;
      } else {
        this.Comparison = ["None","Bihar"]
        this.data.Comparison  = "None"
        // this.butDisabled = false;
      }
      }
      toHide(view){
        if(view == "Map View"){
          this.data.years == '2015';
          this.years = ['2015','2016'];
          if(this.data.years == "2001"){
            this.rain_fall_type = [{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }else{
          this.rain_fall_type = [{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        }else{
          if (view == "line") {
            this.data.years == "All"
            this.years = ["All"];
          } else {
            this.data.years == "All"
            this.years = ['All','2015', '2016'];
          }
          // this.years = ["All",2015,2016];
          if(this.data.years == "2001"){
            this.rain_fall_type = [{key:"All",value:"All"},{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
            this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }else{
            if(this.data.years == "All"){
              this.rain_fall_type = [{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
            this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
            }else{
              this.rain_fall_type = [{key:"All",value:"All"},{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
              this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
            }
            
          }
          
        }
      }
  toGet(type){
      if (type == "Decadal_Growth") {
        this.years = ['All','2015', '2016'];
      }
      else if(type == "All"){
        this.years = ['2015', '2016'];
        this.views = ViewsNotMap
      }
      else {
        if (this.data.view == "Map View") {
          this.years = ['2015', '2016'];
        } else {
          this.years = ['All','2015', '2016'];
        }
      }
  }
  
  
  toYear(year){
    if(year == "All"){
      this.views = ViewsNotMap
      this.data.rain_fall_type_sort = "Mango Area"
      this.rain_fall_type = [{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    }
    else{
      this.views = ViewsNotTrend
      this.data.rain_fall_type_sort = "Mango Area"
      this.rain_fall_type = [{key:"All",value:"All"},{key:"Potato Area",value:"Potato_Area"},	{key:"Potato Production",value:"Potato_Production"},	{key:"Onion Area",value:"Onion_Area"},	{key:"Onion Production",value:"Onion_Production"},	{key:"Cauliflower Area",value:"Cauliflower_Area"},	{key:"Cauliflower Production",value:"Cauliflower_Production"},	{key:"Brinjal Area",value:"Brinjal_Area"},	{key:"Brinjal Production",value:"Brinjal_Production"},	{key:"Percentage Potato Area",value:"Percentage_Potato_Area"},	{key:"Percentage Potato Production",value:"Percentage_Potato_Production"},	{key:"Percentage Onion Area",value:"Percentage_Onion_Area"},	{key:"Percentage Onion Production",value:"Percentage_Onion_Production"},	{key:"Percentage Cauliflower Area",value:"Percentage_Cauliflower_Area"},	{key:"Percentage Cauliflower Production",value:"Percentage_Cauliflower_Production"},	{key:"Percentage Brinjal Area",value:"Percentage_Brinjal_Area"},	{key:"Percentage Brinjal Production",value:"Percentage_Brinjal_Production"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    }
  }
  onSubmit(user) {
    var controller = "production_productivity11s"

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
      var controller = "production_productivity11s"
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

    //   this.SvgService.newtable(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
    // }
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "production_productivity11s"
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










