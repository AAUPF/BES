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
import { NewViews } from '../../data/newviews';
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-bihar-industrial-investment1',
  templateUrl: './bihar-industrial-investment1.component.html',
  styleUrls: ['./bihar-industrial-investment1.component.css']
})
export class BiharIndustrialInvestment1Component implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = [
    "All",
    "Food Processing",
    "Manufacturing",
    "Power Plant",
    "Small Equipment Manufacturing",
    "Plastic & Rubber",
    "Textile",
    "Information Technology",
    "Tourism",
    "Technical Institutes (Engineering and Management)",
    "Healthcare",
    "Private Industrial Park",
    "Others",
    "Total",
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  // views = ["Graph", "Trend Line","Map View","Table"];
  views = ViewsNotMap
  //views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Map View", value: "Map View"},{key: "Table", value: "Table"}];
  rain_fall_type = [{key: "All", value: "All"},

  {key:"Number of Proposed Units",value:"Number_of_Proposed_Units"},
  {key:"Proposed Investment",value:"Proposed_Investment"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None",
    "Food Processing",
    "Manufacturing",
    "Power Plant",
    "Small Equipment Manufacturing",
    "Plastic & Rubber",
    "Textile",
    "Information Technology",
    "Tourism",
    "Technical Institutes (Engineering and Management)",
    "Healthcare",
    "Private Industrial Park",
    "Others",
    "Total",
  ]
    data: any = {}; 

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
        if (d == "All") {
          this.data == {years: null, views: "",Comparison: ""};
          this.data.Comparison  = "None"
          this.butDisabled = true;
    
        } else {
          this.butDisabled = false;
        }
    }
    toHide(view){
      if(view == "Map View"){

      }else{
       
      }
    }


 
    onSubmit(user) {
      var controller = "bihar_industrial_investment1s"

      console.log(user.view);
      

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
        // this.SvgService.test("echamparan");
        var controller = "annual_survey6s"
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

  ngOnInit() {
  }

}
