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
  selector: 'app-fiscal-performance1',
  templateUrl: './fiscal-performance1.component.html',
  styleUrls: ['./fiscal-performance1.component.css']
})
export class FiscalPerformance1Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","Bihar","Jharkhand","West Bengal","Odisha","Uttar Pradesh","Madhya Pradesh ","Rajasthan","Maharashtra","Gujarat","Punjab","Haryana","Karnataka","Andhra Pradesh","Kerala","Tamil Nadu","Himachal Pradesh","Chhatisgarh"]
  years = ["All","2015","2016_RE","2017_RE"];
  views = ViewsNotMap
  rain_fall_type = [{key:"All",value:"All"},{key:"Revenue Deficit GFD Percentage",value:"Revenue_Deficit_GFD_Percentage"},{key:"Capital Outlay GFD Percentage",value:"Capital_Outlay_GFD_Percentage"},{key:"Non Dev Exp Agg Disbursements Percentage",value:"Non_Dev_Exp_Agg_Disbursements_Percentage"},{key:"Non Dev Exp Revenue Receipts Percentage",value:"Non_Dev_Exp_Revenue_Receipts_Percentage"},{key:"Interest Payments Revenue Exp Percentage",value:"Interest_Payments_Revenue_Exp_Percentage"},{key:"State Own Revenue Revenue Exp Percentage",value:"State_Own_Revenue_Revenue_Exp_Percentage"},{key:"Gross Transfers Aggregate Disbursements Percentage",value:"Gross_Transfers_Aggregate_Disbursements_Percentage"},{key:"Debt Servicing Gross Transfers Percentage",value:"Debt_Servicing_Gross_Transfers_Percentage"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs State"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.years = ["2015","2016_RE","2017_RE"];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All","2015","2016_RE","2017_RE"];
        }
      
      }
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    if (this.data.rain_fall_type == "All") {
      this.years = ["2015","2016_RE","2017_RE"];
    } else {
      this.years = ["All","2015","2016_RE","2017_RE"];
    }
    
  }
    }
      toSet(select){
        if (select == "All" || select == "Bihar") {
          this.data.Comparison  = "None"
          this.Comparison  = ["None"]
          
        } else {
          this.Comparison  = ["None","Bihar vs State"]
  
        }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = [{key:"Revenue Deficit GFD Percentage",value:"Revenue_Deficit_GFD_Percentage"},{key:"Capital Outlay GFD Percentage",value:"Capital_Outlay_GFD_Percentage"},{key:"Non Dev Exp Agg Disbursements Percentage",value:"Non_Dev_Exp_Agg_Disbursements_Percentage"},{key:"Non Dev Exp Revenue Receipts Percentage",value:"Non_Dev_Exp_Revenue_Receipts_Percentage"},{key:"Interest Payments Revenue Exp Percentage",value:"Interest_Payments_Revenue_Exp_Percentage"},{key:"State Own Revenue Revenue Exp Percentage",value:"State_Own_Revenue_Revenue_Exp_Percentage"},{key:"Gross Transfers Aggregate Disbursements Percentage",value:"Gross_Transfers_Aggregate_Disbursements_Percentage"},{key:"Debt Servicing Gross Transfers Percentage",value:"Debt_Servicing_Gross_Transfers_Percentage"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
          this.views  = ViewsNotDistrict
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Revenue Deficit GFD Percentage",value:"Revenue_Deficit_GFD_Percentage"},{key:"Capital Outlay GFD Percentage",value:"Capital_Outlay_GFD_Percentage"},{key:"Non Dev Exp Agg Disbursements Percentage",value:"Non_Dev_Exp_Agg_Disbursements_Percentage"},{key:"Non Dev Exp Revenue Receipts Percentage",value:"Non_Dev_Exp_Revenue_Receipts_Percentage"},{key:"Interest Payments Revenue Exp Percentage",value:"Interest_Payments_Revenue_Exp_Percentage"},{key:"State Own Revenue Revenue Exp Percentage",value:"State_Own_Revenue_Revenue_Exp_Percentage"},{key:"Gross Transfers Aggregate Disbursements Percentage",value:"Gross_Transfers_Aggregate_Disbursements_Percentage"},{key:"Debt Servicing Gross Transfers Percentage",value:"Debt_Servicing_Gross_Transfers_Percentage"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
      }
    
  onSubmit(user) {
    var controller = "fiscal_performance1s"

    if (user.view !== "Map View") {

      console.log("errror");
      
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;
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
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      var controller = "fiscal_performance1s"
      this.spinner.show();
      setTimeout(function() {
        
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      
      
    }
 }     
  

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {}

}





















