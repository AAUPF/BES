import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { Land } from '../services/land.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { AgricultureService } from '../services/agriculture.service';
import { Location } from '@angular/common';
import{Functions} from '../data/func';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private Land: Land,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  // views = ["Graph", "Trend Line","Map View","Table"];

  views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Map View", value: "Map View"},{key: "Table", value: "Table"}];
  rain_fall_type = [{key: "All", value: "All"},{key:"Geographical area",value:"Geographical_area"},	{key:"Forest",value:"Forest"},	{key:"Barren unculturable land",value:"Barren_unculturable_land"},	{key:"Non Agriculture Land area",value:"Non_Agriculture_Land_area"},	{key:"Non Agriculture Perennial Water Area",value:"Non_Agriculture_Perennial_Water_Area"},	{key:"Non Agriculture Temporary Water Area",value:"Non_Agriculture_Temporary_Water_Area"},	{key:"Culturable Waste Land",value:"Culturable_Waste_Land"},	{key:"Permanent Pastures",value:"Permanent_Pastures"},	{key:"Tree Crops",value:"Tree_Crops"},	{key:"Fallow land",value:"Fallow_land"},	{key:"Current Fallow",value:"Current_Fallow"},	{key:"Total Uncultivable Land",value:"Total_Uncultivable_Land"},	{key:"Net Area Sown",value:"Net_Area_Sown"},	{key:"Gross Crop Area",value:"Gross_Crop_Area"},	{key:"Cropping Intensity",value:"Cropping_Intensity"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs District"]
    data: any = {}; 

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: ""};
        this.data.Comparison  = undefined
        this.butDisabled = true;
  
      } else {
        this.butDisabled = false;
      }
      
      }
    // onSubmit(user) {
    //   if (user.view == "Graph") {
    //     this.visbile_chart= true;
    //     this.visbile= false;
    //     this.visbile_table= false;
    //     // this.Land.pie();
    //     if (user.districts == "All") {
    //       // this.Land.bar_chart_all(user.districts,user.years,user.rain_fall_type);
    //       this.Land.bar_chart_all(user.districts,user.years,user.rain_fall_type);
    //     } 
    //    else if(user.Comparison == "Bihar vs District") { 
    //     this.Land.barchart1(user.districts,user.years,user.rain_fall_type,user.Comparison);
    //     console.log(user.Comparison);
    //   }
    //     else {
    //       this.Land.barchart1(user.districts,user.years,user.rain_fall_type,user.Comparison);
    //       // this.Land.barchart();
    //     }
    //   } 
    //   else if(user.view == "Trend Line") {
    //     this.visbile_chart= true;
    //     this.visbile= false;
    //     this.visbile_table= false;
    //     if (user.districts == "All") {
    //       this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
    //     } 
    //     else if(user.Comparison == "Bihar vs District") { 
    //       this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
    //       }
    //     else {
    //       this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
    //     }
        
    //   } 
    //   else if(user.view == "Table") {
    //     this.visbile_chart= false;
    //     this.visbile_table= true;
    //     this.visbile= false;
    //     this.spinner.show();
    //     this.Land.table(user.years,user.districts,user.rain_fall_type,user.Comparison);
    //   }
    //   else if(user.view == "Map View") {
    //    const that = this;
    //     // this.Land.barchart();
    //     this.visbile_chart= false;
    //     this.visbile= true;
    //     this.visbile_table= false;
    //     var controller = 'lands'
    //     // this.title =user.rain_fall_type;
    //     // this.SvgService.test("echamparan");
    //     this.spinner.show();
    //     setTimeout(function() {
    //       //  that.SvgService.test("echamparan");
    //           that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
    //           var u = "wchamparan";
    //           that.SvgService.test(u,user.view,user.rain_fall_type,user.years,user.districts,user.Comparison,controller); 
    //     }, 500);
    //     // this.SvgService.svg();
    //   }
    // } 



    
    onSubmit(user) {
      var controller = "lands"

      console.log(user.view);
      

      if (user.view == "column" || user.view == "line"|| user.view == "scatter"|| user.view == "pie"|| user.view == "Table") {

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
        // this.SvgService.test("echamparan");
        var controller = "lands"
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
      //   // this.title =user.rain_fall_type;
      //   // this.SvgService.test("echamparan");
      //   var controller = "rainfalls"
      //   this.spinner.show();
      //   setTimeout(function() {
      //     var controller = "lands"
      //     //  that.SvgService.test("echamparan");
      //         that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
      //         var u = "wchamparan";
      //         that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      //   }, 500);
      //   // this.SvgService.svg();
        
      // }
    }   

  ngOnInit() {
  }

}
