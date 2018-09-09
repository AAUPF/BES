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
  selector: 'app-fiscal-performance2',
  templateUrl: './fiscal-performance2.component.html',
  styleUrls: ['./fiscal-performance2.component.css']
})
export class FiscalPerformance2Component implements OnInit {
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
  Districts = ["A. Sustainability","B. Flexibility","C. Vulnerability","All"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Balance from Current Revenue (Rs. crore)",value:"Balance from Current Revenue (Rs. crore)"},
    {key:"Interest Ratio (Percentage)",value:"Interest Ratio (Percentage)"},
    {key:"Buoyancy of Own Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Own Tax Receipts w.r.t. GSDP "},
    {key:"Buoyancy of Non-Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Non-Tax Receipts w.r.t. GSDP "},
    {key:"Growth in outstanding debt (Percentage)",value:"Growth in outstanding debt (Percentage)"},
    {key:"Growth in total revenue receipts (Percentage)",value:"Growth in total revenue receipts (Percentage)"},
    {key:"Growth in state’s own revenue receipts (Percentage)",value:"Growth in state’s own revenue receipts (Percentage)"},
    {key:"Growth in GSDP (Percentage)",value:"Growth in GSDP (Percentage)"},
    {key:"None",value:"None"},
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    
    }
    toView(view){
  // if (view == "line") {
  //   this.years = ["All"];
  // } else {
  //   if (this.data.rain_fall_type == "All") {
  //     this.years = ["2015","2016_RE","2017_RE"];
  //   } else {
  //     this.years = ["All","2015","2016_RE","2017_RE"];
  //   }
    
  // }
    }
      toSet(select){
        if (select == "A. Sustainability") {         
      this.rain_fall_type_sort = [
    {key:"All",value:"All"},
    {key:"Balance from Current Revenue (Rs. crore)",value:"Balance from Current Revenue (Rs. crore)"},
    {key:"Interest Ratio (Percentage)",value:"Interest Ratio (Percentage)"},
    {key:"Buoyancy of Own Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Own Tax Receipts w.r.t. GSDP "},
    {key:"Buoyancy of Non-Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Non-Tax Receipts w.r.t. GSDP "},
    {key:"Growth in outstanding debt (Percentage)",value:"Growth in outstanding debt (Percentage)"},
    {key:"Growth in total revenue receipts (Percentage)",value:"Growth in total revenue receipts (Percentage)"},
    {key:"Growth in state’s own revenue receipts (Percentage)",value:"Growth in state’s own revenue receipts (Percentage)"},
    {key:"Growth in GSDP (Percentage)",value:"Growth in GSDP (Percentage)"},
    
  
  
  ]
           
        }  else if (select == "B. Flexibility") {


          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Capital Repayment / Capital Borrowings (Percentage)",value:"Capital Repayment / Capital Borrowings (Percentage)"},
            {key:"Total Tax Receipts / GSDP (Percentage)",value:"Total Tax Receipts / GSDP (Percentage)"},
            {key:"Capital Outlay / Capital Receipts (Percentage)",value:"Capital Outlay / Capital Receipts (Percentage)"},
            {key:"State’s Own Tax Receipts / GSDP (Percentage)",value:"State’s Own Tax Receipts / GSDP (Percentage)"},
            {key:"State’s Own Non-Tax Receipts / GSDP (Percentage)",value:"State’s Own Non-Tax Receipts / GSDP (Percentage)"},
            {key:"Debt Outstanding / GSDP (Percentage)",value:"Debt Outstanding / GSDP (Percentage)"},
           

          ]
        }

        else if (select == "C. Vulnerability") {


          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Revenue Deficit (Rs. crore)",value:"Revenue Deficit (Rs. crore)"},
            {key:"Fiscal Deficit (Rs. crore)",value:"Fiscal Deficit (Rs. crore)"},
            {key:"Primary Deficit (Rs. crore)",value:"Primary Deficit (Rs. crore)"},
            {key:"Primary Deficit / Fiscal Deficit (Percentage)",value:"Primary Deficit / Fiscal Deficit (Percentage)"},
            {key:"Revenue Deficit / Fiscal Deficit (Percentage)",value:"Revenue Deficit / Fiscal Deficit (Percentage)"},
           

          ]
        }
        
        
        else {
          this.rain_fall_type_sort = [ 

            {key:"All",value:"All"},
          {key:"Interest Ratio (Percentage)",value:"Interest Ratio (Percentage)"},
          {key:"Buoyancy of Own Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Own Tax Receipts w.r.t. GSDP "},
          {key:"Buoyancy of Non-Tax Receipts w.r.t. GSDP ",value:"Buoyancy of Non-Tax Receipts w.r.t. GSDP "},
          {key:"Growth in outstanding debt (Percentage)",value:"Growth in outstanding debt (Percentage)"},
          {key:"Growth in total revenue receipts (Percentage)",value:"Growth in total revenue receipts (Percentage)"},
          {key:"Growth in state’s own revenue receipts (Percentage)",value:"Growth in state’s own revenue receipts (Percentage)"},
          {key:"Growth in GSDP (Percentage)",value:"Growth in GSDP (Percentage)"},
          {key:"Capital Repayment / Capital Borrowings (Percentage)",value:"Capital Repayment / Capital Borrowings (Percentage)"},
          {key:"Total Tax Receipts / GSDP (Percentage)",value:"Total Tax Receipts / GSDP (Percentage)"},
          {key:"Capital Outlay / Capital Receipts (Percentage)",value:"Capital Outlay / Capital Receipts (Percentage)"},
          {key:"State’s Own Tax Receipts / GSDP (Percentage)",value:"State’s Own Tax Receipts / GSDP (Percentage)"},
          {key:"State’s Own Non-Tax Receipts / GSDP (Percentage)",value:"State’s Own Non-Tax Receipts / GSDP (Percentage)"},
          {key:"Debt Outstanding / GSDP (Percentage)",value:"Debt Outstanding / GSDP (Percentage)"},
          {key:"Revenue Deficit (Rs. crore)",value:"Revenue Deficit (Rs. crore)"},
          {key:"Fiscal Deficit (Rs. crore)",value:"Fiscal Deficit (Rs. crore)"},
          {key:"Primary Deficit (Rs. crore)",value:"Primary Deficit (Rs. crore)"},
          {key:"Primary Deficit / Fiscal Deficit (Percentage)",value:"Primary Deficit / Fiscal Deficit (Percentage)"},
          {key:"Revenue Deficit / Fiscal Deficit (Percentage)",value:"Revenue Deficit / Fiscal Deficit (Percentage)"},
          
          ]
        }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
          // this.rain_fall_type = [{key:"Revenue Deficit GFD Percentage",value:"Revenue_Deficit_GFD_Percentage"},{key:"Capital Outlay GFD Percentage",value:"Capital_Outlay_GFD_Percentage"},{key:"Non Dev Exp Agg Disbursements Percentage",value:"Non_Dev_Exp_Agg_Disbursements_Percentage"},{key:"Non Dev Exp Revenue Receipts Percentage",value:"Non_Dev_Exp_Revenue_Receipts_Percentage"},{key:"Interest Payments Revenue Exp Percentage",value:"Interest_Payments_Revenue_Exp_Percentage"},{key:"State Own Revenue Revenue Exp Percentage",value:"State_Own_Revenue_Revenue_Exp_Percentage"},{key:"Gross Transfers Aggregate Disbursements Percentage",value:"Gross_Transfers_Aggregate_Disbursements_Percentage"},{key:"Debt Servicing Gross Transfers Percentage",value:"Debt_Servicing_Gross_Transfers_Percentage"}]
          // this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
          this.views  = ViewsNotDistrict
          // this.rain_fall_type = [{key:"All",value:"All"},{key:"Revenue Deficit GFD Percentage",value:"Revenue_Deficit_GFD_Percentage"},{key:"Capital Outlay GFD Percentage",value:"Capital_Outlay_GFD_Percentage"},{key:"Non Dev Exp Agg Disbursements Percentage",value:"Non_Dev_Exp_Agg_Disbursements_Percentage"},{key:"Non Dev Exp Revenue Receipts Percentage",value:"Non_Dev_Exp_Revenue_Receipts_Percentage"},{key:"Interest Payments Revenue Exp Percentage",value:"Interest_Payments_Revenue_Exp_Percentage"},{key:"State Own Revenue Revenue Exp Percentage",value:"State_Own_Revenue_Revenue_Exp_Percentage"},{key:"Gross Transfers Aggregate Disbursements Percentage",value:"Gross_Transfers_Aggregate_Disbursements_Percentage"},{key:"Debt Servicing Gross Transfers Percentage",value:"Debt_Servicing_Gross_Transfers_Percentage"}]
          // this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
      }
    
  onSubmit(user) {
    var controller = "fiscal_performance2s"

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
