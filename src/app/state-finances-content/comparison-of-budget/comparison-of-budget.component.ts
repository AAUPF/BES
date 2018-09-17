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
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-comparison-of-budget',
  templateUrl: './comparison-of-budget.component.html',
  styleUrls: ['./comparison-of-budget.component.css']
})
export class ComparisonOfBudgetComponent implements OnInit {

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
  // Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = [
    
    "Revenue Account",
    "Public Account",
    "Net Results Public Account (Receipt-Expenditure)",
    "Net Result (All Accounts) (Receipt-Expenditure)",
    "Capital Account",
  
  
  ]
  years =["All","2016-17","2017-18_BE"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;
  rain_fall_type = [
   
    "Total Revenue Receipts",
    "Total Revenue Expenditure",
    "Deficit Revenue A/c ",
    "Consolidated Fund Receipts",
    "Net Consolidated Fund (Receipt-Expenditure)",
    "Contingency Fund ",
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [
   
    "Tax revenues",
    "Non-Tax Revenues",
    "Grants and Contributions",
    "None"
  ]
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    


    compare(d) {


      if (d == "Total Revenue Receipts") {
        this.data.Comparison = "All"
        this.Comparison = 
        [
         
          "Tax revenues",
          "Non-Tax Revenues",
          "Grants and Contributions",
          "None"
        ]
        
      } 
      
      else if (d == "Total Revenue Expenditure") {
  
        if (this.data.districts == "All") {
           this.data.Comparison = "None"
           this.Comparison = 
           [
            
            "General Services",
            "Social Services",
            "Economic Services",
            "Grants and Contributions",
            "None",
     
           ]
           
         } else {
  
  
          this.data.Comparison = "None"
          this.Comparison = 
    
          [
           
            "General Services",
            "Social Services",
            "Economic Services",
            "Grants and Contributions",
            "None",
          ]
          }
  
      }
  
      else if (d == "Contingency Fund ") {
  
        this.data.Comparison = "None"
        this.Comparison = 
  
        [
          "Income",
          "Expenditure",
          "None"
  
        ]
      }
  
      else if (d == "Total Receipts Public Account") {
        this.data.Comparison = "None"
        this.Comparison = 
  
        [
          "Small Savings, PF  etc.",
          "Reserve Funds",
          "Deposits and Advances",
          "Suspense and Misc.",
          "Remittances",
         "None"
  
        ]
      }
  
  
      else if (d == "Total Disbursements Public Account") {
  
        this.data.Comparison = "None"
        this.Comparison = 
  
        [
          "Small Savings, PF  etc.",
          "Reserve Funds",
          "Deposits and Advances",
          "Suspense and Misc.",
          "Remittances",
          "None"
  
        ]
      }



      else if (d == "Total Capital Receipts") {
  
        this.data.Comparison = "None"
        this.Comparison = 
  
        [
          "Receipts",
          "Public Debt",
          "Recovery of Loans and Advances",
          "Suspense and Misc.",
          "Remittances",
          "None"
  
        ]
      }


      else if (d == "Total Capital Expenditure ") {
  
        this.data.Comparison = "All"
        this.Comparison = 
  
        [
          "Capital Outlay",
          "Public Debt",
          "Loans & advances",
          "None"
  
        ]
      }
      
      else {
      this.data.Comparison = "None"
      this.Comparison = 
  
        [
         
       "None"
  
        ]
      
      }
      
    }
 
    toSet(select){

      
      if (select == "All") {
        this.data.rain_fall_type  = undefined

        this.rain_fall_type_sort = [
         
          "Total Expenditure (Rs. crore)",
          "Revenue Expenditure (Rs. crore)",
          "Capital Outlay (Rs. crore)",
          "Capital Outlay (Percentage)",
        ]

       
      }
      else if(select == "Revenue Account") { 
        this.data.rain_fall_type  = "Total Revenue Receipts"

        this.rain_fall_type_sort =[
         
          "Total Revenue Receipts",
          "Total Revenue Expenditure",
          "Deficit Revenue A/c ",
          "Consolidated Fund Receipts",
          "Net Consolidated Fund (Receipt-Expenditure)",
          "Contingency Fund ",
          "None"
      ]
      }

      else if(select == "Public Account") { 
        this.data.rain_fall_type  = "Total Receipts Public Account"

        this.rain_fall_type_sort = [
         
          "Total Receipts Public Account",
          "Total Disbursements Public Account",
          "None"
        ]

      }

      else if(select == "Net Results Public Account (Receipt-Expenditure)") { 
        this.data.rain_fall_type_sort  =  "None"

        this.rain_fall_type_sort = [
          
         
        "None"
        
        ]

      }

      else if(select == "Net Result (All Accounts) (Receipt-Expenditure)") { 
        this.data.rain_fall_type_sort  =  "None"

        this.rain_fall_type_sort = [
          
         
          "None"
        
        ]

      }

      else if(select == "Capital Account") { 
        this.data.rain_fall_type_sort  =  "None"

        this.rain_fall_type_sort = [
         
          "Total Capital Receipts",
          "Total Capital Expenditure ",
          "Deficit Capital Account",
          "Consolidated Fund Expenditure",
          "None"
        
        ]

      }
      else {
        this.butDisabled = false;
      }
    }


    toyear(d){
      if (d == "All") {
        this.data.view = undefined

       
        this.views = ViewsNotMap
        
      } else {
        this.data.view = undefined

        this.views = ViewsNotDistrict
        
      }

    }



  onSubmit(user) {
    var controller = "comparison_of_budgets"

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
      var controller = "annual_state_domestic_product3s"
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
