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
  selector: 'app-banking-infrastructure5',
  templateUrl: './banking-infrastructure5.component.html',
  styleUrls: ['./banking-infrastructure5.component.css']
})
export class BankingInfrastructure5Component implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = [
    "All",
    "Andhra Pradesh",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
    "India",
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  // views = ["Graph", "Trend Line","Map View","Table"];
  views = ViewsNotDistrict
  //views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Map View", value: "Map View"},{key: "Table", value: "Table"}];
  rain_fall_type = [{key: "All", value: "All"},{key:"No of Branches",value:"No_of_Branches"},
  {key:"No of Current Accounts",value:"No_of_Current_Accounts"},
  {key:"Current Amount",value:"Current_Amount"},
  {key:"No of Savings Accounts",value:"No_of_Savings_Accounts"},
  {key:"Savings Amount",value:"Savings_Amount"},
  {key:"No of Term Accounts",value:"No_of_Term_Accounts"},
  {key:"Term Amount",value:"Term_Amount"},
  {key:"No of Total Accounts",value:"No_of_Total_Accounts"},
  {key:"Total Amount",value:"Total_Amount"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs State"]
    data: any = {}; 

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
        if (d == "All") {
          
          this.data.Comparison  = "None"
          this.Comparison = ["None"];
    
        } else {
          this.Comparison = ["None","Bihar vs State"]
        }
    }


 
    onSubmit(user) {
      var controller = "banking_infrastructure5s"

      console.log(user.view);
      

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
        // this.SvgService.test("echamparan");
        var controller = "banking_infrastructure5s"
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
