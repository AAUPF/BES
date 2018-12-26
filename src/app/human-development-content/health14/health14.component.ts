import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Views } from '../../data/views';
import { Location } from '@angular/common';
import{Functions} from '../../data/func';
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-health14',
  templateUrl: './health14.component.html',
  styleUrls: ['./health14.component.css']
})
export class Health14Component implements OnInit {
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
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"}, {key: "Budget for ICDS Bihar", value: "Budget_for_ICDS_Bihar"}, {key: "Funds Released by GOI", value: "Funds_Released_by_GOI"},{key: "Expenditure", value: "Expenditure"},{key: "Fund Released as Percentage of Budget", value: "Fund_Released_as_Percentage_of_Budget"},{key: "Expenditure as Percentage of Fund Released", value: "Expenditure_as_Percentage_of_Fund_Released"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"}, {key: "Budget for ICDS Bihar", value: "Budget_for_ICDS_Bihar"}, {key: "Funds Released by GOI", value: "Funds_Released_by_GOI"},{key: "Expenditure", value: "Expenditure"},{key: "Fund Released as Percentage of Budget", value: "Fund_Released_as_Percentage_of_Budget"},{key: "Expenditure as Percentage of Fund Released", value: "Expenditure_as_Percentage_of_Fund_Released"}]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison = "None"
      this.Comparison = [{key: "None", value: "None"}]
      this.Comparison_sort = this.Comparison.sort(f.compare);
    } else {
      this.Comparison = [{key: "None", value: "None"}, {key: "Budget for ICDS Bihar", value: "Budget_for_ICDS_Bihar"}, {key: "Funds Released by GOI", value: "Funds_Released_by_GOI"},{key: "Expenditure", value: "Expenditure"},{key: "Fund Released as Percentage of Budget", value: "Fund_Released_as_Percentage_of_Budget"},{key: "Expenditure as Percentage of Fund Released", value: "Expenditure_as_Percentage_of_Fund_Released"}]
      this.Comparison_sort = this.Comparison.sort(f.compare);
    }
    }
    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All",2012,2013,2014,2015,2016];
      }
        }
    toYear(year){
          if(year == "All"){
            // this.data.Comparison = "None"
            this.views = ViewsNotMap
          }else{
            this.views  =  ViewsNotDistrict
            // this.Comparison = [{key: "None", value: "None"}]
          }
        }
  onSubmit(user) {
    var controller = "health14s"

    if (user.view !== "Map View") {
  
      
      
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
      var controller = "health14s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }


    // if (user.view !== "Map View") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
    //   } 
    //  else if(user.Comparison) { 

    //   if (user.view == "Table") {
    //     this.visbile_chart= false;
    //     this.visbile_table= true;
    //     this.spinner.show();
    //   } else {
    //     this.visbile_chart= true;
    //     this.visbile_table= false;
    //     this.spinner.show();
        
    //   }
    //   this.AgricultureService.barchart_bihar_vs_district_rainfall(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
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
    //   else if(user.Comparison) { 
    //     this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //     }
    //   else {
    //     this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
    //   }
      
    // } 
    // else if(user.view == "Table1") {
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
    //   var controller = "health1s"
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
    //  else if(user.Comparison) { 
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

