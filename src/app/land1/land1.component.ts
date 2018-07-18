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

declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-land1',
  templateUrl: './land1.component.html',
  styleUrls: ['./land1.component.css']
})
export class Land1Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private Land: Land,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2010, 2011,2012,2013,2014,"All"];
  views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"}];
  rain_fall_type = [{key: "All", value: "All"},{key:"Geographical Area", value:"Geographical_Area"},	{key:"Forests", value:"Forests"},	{key:"Barren Unculturable Land", value:"Barren_Unculturable_Land"},	{key:"Land put to Non agricultural use", value:"Land_put_to_Non_agricultural_use"},	{key:"Land Area", value:"Land_Area"},	{key:"Water Area", value:"Water_Area"},	{key:"Culturable Waste", value:"Culturable_Waste"},	{key:"Permanent Pastures", value:"Permanent_Pastures"},	{key:"Land under Tree Crops", value:"Land_under_Tree_Crops"},	{key:"Fallow Land excl Current Fallow", value:"Fallow_Land_excl_Current_Fallow"},	{key:"Current Fallow", value:"Current_Fallow"},	{key:"Total Unculturable Land", value:"Total_Unculturable_Land"},	{key:"Net Sown Area", value:"Net_Sown_Area"},	{key:"Gross Sown Area", value:"Gross_Sown_Area"},	{key:"Cropping Intensity", value:"Cropping_Intensity"},]



    Comparison = [{key: "none", value: "None"},	{key:"Geographical Area", value:"Geographical_Area"},	{key:"Forests", value:"Forests"},	{key:"Barren Unculturable Land", value:"Barren_Unculturable_Land"},	{key:"Land put to Non agricultural use", value:"Land_put_to_Non_agricultural_use"},	{key:"Land Area", value:"Land_Area"},	{key:"Water Area", value:"Water_Area"},	{key:"Culturable Waste", value:"Culturable_Waste"},	{key:"Permanent Pastures", value:"Permanent_Pastures"},	{key:"Land under Tree Crops", value:"Land_under_Tree_Crops"},	{key:"Fallow Land excl Current Fallow", value:"Fallow_Land_excl_Current_Fallow"},	{key:"Current Fallow", value:"Current_Fallow"},	{key:"Total Unculturable Land", value:"Total_Unculturable_Land"},	{key:"Net Sown Area", value:"Net_Sown_Area"},	{key:"Gross Sown Area", value:"Gross_Sown_Area"},	{key:"Cropping Intensity", value:"Cropping_Intensity"},]
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
      var controller = "land1s"
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
          this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller,);
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
      else if(user.view == "bubble") {
        this.visbile_chart= true;
        this.visbile= false;
        this.visbile_table= false;

        console.log("bubbe");
        
  
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
      else if(user.view == "Map View") {
       const that = this;
        // this.AgricultureService.barchart();
        this.visbile_chart= false;
        this.visbile= true;
        this.visbile_table= false;
        // this.title =user.rain_fall_type;
        // this.SvgService.test("echamparan");
        var controller = "land1s"
        this.spinner.show();
        setTimeout(function() {
          var controller = "lands"
          //  that.SvgService.test("echamparan");
              that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
              var u = "wchamparan";
              that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
        }, 500);
        // this.SvgService.svg();
        
      }


   
    }   

  ngOnInit() {
  }

}

