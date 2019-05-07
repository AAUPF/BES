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
  Districts = [
    
    "Revenue Account",
    "Public Account",
    "Net Results Public Account (Receipt-Expenditure)",
    "Net Result (All Accounts) (Receipt-Expenditure)",
    "Capital Account",
  
  
  ]
  years =["All","2016-17","2017-18_BE"];
  views = ViewsNotMap;
  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Revenue Account Receipts",value:"Revenue Account Receipts"},
    {key:"Tax revenues",value:"Tax revenues"},
    {key:"Non-Tax Revenues",value:"Non-Tax Revenues"},
    {key:"Grants and Contributions (Revenue Account Receipts)",value:"Grants and Contributions (Revenue Account Receipts)"},
    {key:"Total Revenue Receipts (Expenditure)",value:"Total Revenue Receipts (Expenditure)"},
    {key:"General Services",value:"General Services"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Grants and Contributions (Total Revenue Receipts Expenditure)",value:"Grants and Contributions (Total Revenue Receipts Expenditure)"},
    {key:"Total Revenue Expenditure",value:"Total Revenue Expenditure"},
    {key:"Deficit Revenue A/c ",value:"Deficit Revenue A/c "},
    {key:"Consolidated Fund Receipts",value:"Consolidated Fund Receipts"},
    {key:"Net Consolidated Fund (Receipt-Expenditure)",value:"Net Consolidated Fund (Receipt-Expenditure)"},
    {key:"Contingency Fund",value:"Contingency Fund"},
    {key:"Income",value:"Income"},
    {key:"Public Account (Receipts)",value:"Public Account (Receipts)"},
    {key:"Small Savings, PF  etc. Receipts ",value:"Small Savings, PF  etc. Receipts "},
    {key:"Reserve Funds Receipts ",value:"Reserve Funds Receipts "},
    {key:"Deposits and Advances Receipts ",value:"Deposits and Advances Receipts "},
    {key:"Suspense and Misc. Receipts ",value:"Suspense and Misc. Receipts "},
    {key:"Remittances Receipts ",value:"Remittances Receipts "},
    {key:"Total Receipts Public Account",value:"Total Receipts Public Account"},
    {key:"Net Results Public Account (Receipt-Expenditure)",value:"Net Results Public Account (Receipt-Expenditure)"},
    {key:"Net Result (All Accounts) (Receipt-Expenditure)",value:"Net Result (All Accounts) (Receipt-Expenditure)"},
    {key:"Capital Account Receipts",value:"Capital Account Receipts"},
    {key:"Public Debt (Capital Account Receipts)",value:"Public Debt (Capital Account Receipts)"},
    {key:"Recovery of Loans and Advances",value:"Recovery of Loans and Advances"},
    {key:"Total Capital Receipts (Expenditure)",value:"Total Capital Receipts (Expenditure)"},
    {key:"Capital Outlay",value:"Capital Outlay"},
    {key:"Public Debt (Total Capital Receipts)",value:"Public Debt (Total Capital Receipts)"},
    {key:"Loans and advances",value:"Loans and advances"},
    {key:"Total Capital Expenditure ",value:"Total Capital Expenditure "},
    {key:"Deficit Capital Account",value:"Deficit Capital Account"},
    {key:"Consolidated Fund Expenditure",value:"Consolidated Fund Expenditure"},
    {key:"Public Account (Expenditure)",value:"Public Account (Expenditure)"},
    {key:"Small Savings, PF  etc. Disbursements ",value:"Small Savings, PF  etc. Disbursements "},
    {key:"Reserve Funds Disbursements ",value:"Reserve Funds Disbursements "},
    {key:"Deposits and Advances Disbursements ",value:"Deposits and Advances Disbursements "},
    {key:"Suspense and Misc. Disbursements ",value:"Suspense and Misc. Disbursements "},
    {key:"Remittances Disbursements ",value:"Remittances Disbursements "},
    {key:"Total Disbursements Public Account",value:"Total Disbursements Public Account"},
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [
    {key:"Revenue Account Receipts",value:"Revenue Account Receipts"},
    {key:"Tax revenues",value:"Tax revenues"},
    {key:"Non-Tax Revenues",value:"Non-Tax Revenues"},
    {key:"Grants and Contributions (Revenue Account Receipts)",value:"Grants and Contributions (Revenue Account Receipts)"},
    {key:"Total Revenue Receipts (Expenditure)",value:"Total Revenue Receipts (Expenditure)"},
    {key:"General Services",value:"General Services"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Grants and Contributions (Total Revenue Receipts Expenditure)",value:"Grants and Contributions (Total Revenue Receipts Expenditure)"},
    {key:"Total Revenue Expenditure",value:"Total Revenue Expenditure"},
    {key:"Deficit Revenue A/c ",value:"Deficit Revenue A/c "},
    {key:"Consolidated Fund Receipts",value:"Consolidated Fund Receipts"},
    {key:"Net Consolidated Fund (Receipt-Expenditure)",value:"Net Consolidated Fund (Receipt-Expenditure)"},
    {key:"Contingency Fund",value:"Contingency Fund"},
    {key:"Income",value:"Income"},
    {key:"Public Account (Receipts)",value:"Public Account (Receipts)"},
    {key:"Small Savings, PF  etc. Receipts ",value:"Small Savings, PF  etc. Receipts "},
    {key:"Reserve Funds Receipts ",value:"Reserve Funds Receipts "},
    {key:"Deposits and Advances Receipts ",value:"Deposits and Advances Receipts "},
    {key:"Suspense and Misc. Receipts ",value:"Suspense and Misc. Receipts "},
    {key:"Remittances Receipts ",value:"Remittances Receipts "},
    {key:"Total Receipts Public Account",value:"Total Receipts Public Account"},
    {key:"Net Results Public Account (Receipt-Expenditure)",value:"Net Results Public Account (Receipt-Expenditure)"},
    {key:"Net Result (All Accounts) (Receipt-Expenditure)",value:"Net Result (All Accounts) (Receipt-Expenditure)"},
    {key:"Capital Account Receipts",value:"Capital Account Receipts"},
    {key:"Public Debt (Capital Account Receipts)",value:"Public Debt (Capital Account Receipts)"},
    {key:"Recovery of Loans and Advances",value:"Recovery of Loans and Advances"},
    {key:"Total Capital Receipts (Expenditure)",value:"Total Capital Receipts (Expenditure)"},
    {key:"Capital Outlay",value:"Capital Outlay"},
    {key:"Public Debt (Total Capital Receipts)",value:"Public Debt (Total Capital Receipts)"},
    {key:"Loans and advances",value:"Loans and advances"},
    {key:"Total Capital Expenditure ",value:"Total Capital Expenditure "},
    {key:"Deficit Capital Account",value:"Deficit Capital Account"},
    {key:"Consolidated Fund Expenditure",value:"Consolidated Fund Expenditure"},
    {key:"Public Account (Expenditure)",value:"Public Account (Expenditure)"},
    {key:"Small Savings, PF  etc. Disbursements ",value:"Small Savings, PF  etc. Disbursements "},
    {key:"Reserve Funds Disbursements ",value:"Reserve Funds Disbursements "},
    {key:"Deposits and Advances Disbursements ",value:"Deposits and Advances Disbursements "},
    {key:"Suspense and Misc. Disbursements ",value:"Suspense and Misc. Disbursements "},
    {key:"Remittances Disbursements ",value:"Remittances Disbursements "},
    {key:"Total Disbursements Public Account",value:"Total Disbursements Public Account"},
  ]
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        
      } else {
        this.data.Comparison = "None"
        this.Comparison = [
          {key:"Revenue Account Receipts",value:"Revenue Account Receipts"},
          {key:"Tax revenues",value:"Tax revenues"},
          {key:"Non-Tax Revenues",value:"Non-Tax Revenues"},
          {key:"Grants and Contributions (Revenue Account Receipts)",value:"Grants and Contributions (Revenue Account Receipts)"},
          {key:"Total Revenue Receipts (Expenditure)",value:"Total Revenue Receipts (Expenditure)"},
          {key:"General Services",value:"General Services"},
          {key:"Social Services",value:"Social Services"},
          {key:"Economic Services",value:"Economic Services"},
          {key:"Grants and Contributions (Total Revenue Receipts Expenditure)",value:"Grants and Contributions (Total Revenue Receipts Expenditure)"},
          {key:"Total Revenue Expenditure",value:"Total Revenue Expenditure"},
          {key:"Deficit Revenue A/c ",value:"Deficit Revenue A/c "},
          {key:"Consolidated Fund Receipts",value:"Consolidated Fund Receipts"},
          {key:"Net Consolidated Fund (Receipt-Expenditure)",value:"Net Consolidated Fund (Receipt-Expenditure)"},
          {key:"Contingency Fund",value:"Contingency Fund"},
          {key:"Income",value:"Income"},
          {key:"Public Account (Receipts)",value:"Public Account (Receipts)"},
          {key:"Small Savings, PF  etc. Receipts ",value:"Small Savings, PF  etc. Receipts "},
          {key:"Reserve Funds Receipts ",value:"Reserve Funds Receipts "},
          {key:"Deposits and Advances Receipts ",value:"Deposits and Advances Receipts "},
          {key:"Suspense and Misc. Receipts ",value:"Suspense and Misc. Receipts "},
          {key:"Remittances Receipts ",value:"Remittances Receipts "},
          {key:"Total Receipts Public Account",value:"Total Receipts Public Account"},
          {key:"Net Results Public Account (Receipt-Expenditure)",value:"Net Results Public Account (Receipt-Expenditure)"},
          {key:"Net Result (All Accounts) (Receipt-Expenditure)",value:"Net Result (All Accounts) (Receipt-Expenditure)"},
          {key:"Capital Account Receipts",value:"Capital Account Receipts"},
          {key:"Public Debt (Capital Account Receipts)",value:"Public Debt (Capital Account Receipts)"},
          {key:"Recovery of Loans and Advances",value:"Recovery of Loans and Advances"},
          {key:"Total Capital Receipts (Expenditure)",value:"Total Capital Receipts (Expenditure)"},
          {key:"Capital Outlay",value:"Capital Outlay"},
          {key:"Public Debt (Total Capital Receipts)",value:"Public Debt (Total Capital Receipts)"},
          {key:"Loans and advances",value:"Loans and advances"},
          {key:"Total Capital Expenditure ",value:"Total Capital Expenditure "},
          {key:"Deficit Capital Account",value:"Deficit Capital Account"},
          {key:"Consolidated Fund Expenditure",value:"Consolidated Fund Expenditure"},
          {key:"Public Account (Expenditure)",value:"Public Account (Expenditure)"},
          {key:"Small Savings, PF  etc. Disbursements ",value:"Small Savings, PF  etc. Disbursements "},
          {key:"Reserve Funds Disbursements ",value:"Reserve Funds Disbursements "},
          {key:"Deposits and Advances Disbursements ",value:"Deposits and Advances Disbursements "},
          {key:"Suspense and Misc. Disbursements ",value:"Suspense and Misc. Disbursements "},
          {key:"Remittances Disbursements ",value:"Remittances Disbursements "},
          {key:"Total Disbursements Public Account",value:"Total Disbursements Public Account"},
          {key:"None",value:"None"},
        ]
        
      }
    
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
        if (select == "Public Debt") {         
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"Revenue Account Receipts",value:"Revenue Account Receipts"},
        {key:"Tax revenues",value:"Tax revenues"},
        {key:"Non-Tax Revenues",value:"Non-Tax Revenues"},
        {key:"Grants and Contributions (Revenue Account Receipts)",value:"Grants and Contributions (Revenue Account Receipts)"},
        {key:"Total Revenue Receipts (Expenditure)",value:"Total Revenue Receipts (Expenditure)"},
        {key:"General Services",value:"General Services"},
        {key:"Social Services",value:"Social Services"},
        {key:"Economic Services",value:"Economic Services"},
        {key:"Grants and Contributions (Total Revenue Receipts Expenditure)",value:"Grants and Contributions (Total Revenue Receipts Expenditure)"},
        {key:"Total Revenue Expenditure",value:"Total Revenue Expenditure"},
        {key:"Deficit Revenue A/c ",value:"Deficit Revenue A/c "},
        {key:"Consolidated Fund Receipts",value:"Consolidated Fund Receipts"},
        {key:"Net Consolidated Fund (Receipt-Expenditure)",value:"Net Consolidated Fund (Receipt-Expenditure)"},
        {key:"Contingency Fund",value:"Contingency Fund"},
        {key:"Income",value:"Income"},
        {key:"Public Account (Receipts)",value:"Public Account (Receipts)"},
        {key:"Small Savings, PF  etc. Receipts ",value:"Small Savings, PF  etc. Receipts "},
        {key:"Reserve Funds Receipts ",value:"Reserve Funds Receipts "},
        {key:"Deposits and Advances Receipts ",value:"Deposits and Advances Receipts "},
        {key:"Suspense and Misc. Receipts ",value:"Suspense and Misc. Receipts "},
        {key:"Remittances Receipts ",value:"Remittances Receipts "},
        {key:"Total Receipts Public Account",value:"Total Receipts Public Account"},
        {key:"Net Results Public Account (Receipt-Expenditure)",value:"Net Results Public Account (Receipt-Expenditure)"},
        {key:"Net Result (All Accounts) (Receipt-Expenditure)",value:"Net Result (All Accounts) (Receipt-Expenditure)"},
        {key:"Capital Account Receipts",value:"Capital Account Receipts"},
        {key:"Public Debt (Capital Account Receipts)",value:"Public Debt (Capital Account Receipts)"},
        {key:"Recovery of Loans and Advances",value:"Recovery of Loans and Advances"},
        {key:"Total Capital Receipts (Expenditure)",value:"Total Capital Receipts (Expenditure)"},
        {key:"Capital Outlay",value:"Capital Outlay"},
        {key:"Public Debt (Total Capital Receipts)",value:"Public Debt (Total Capital Receipts)"},
        {key:"Loans and advances",value:"Loans and advances"},
        {key:"Total Capital Expenditure ",value:"Total Capital Expenditure "},
        {key:"Deficit Capital Account",value:"Deficit Capital Account"},
        {key:"Consolidated Fund Expenditure",value:"Consolidated Fund Expenditure"},
        {key:"Public Account (Expenditure)",value:"Public Account (Expenditure)"},
        {key:"Small Savings, PF  etc. Disbursements ",value:"Small Savings, PF  etc. Disbursements "},
        {key:"Reserve Funds Disbursements ",value:"Reserve Funds Disbursements "},
        {key:"Deposits and Advances Disbursements ",value:"Deposits and Advances Disbursements "},
        {key:"Suspense and Misc. Disbursements ",value:"Suspense and Misc. Disbursements "},
        {key:"Remittances Disbursements ",value:"Remittances Disbursements "},
        {key:"Total Disbursements Public Account",value:"Total Disbursements Public Account"},

          ]
        }
      
        else {
          
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"Revenue Account Receipts",value:"Revenue Account Receipts"},
            {key:"Tax revenues",value:"Tax revenues"},
            {key:"Non-Tax Revenues",value:"Non-Tax Revenues"},
            {key:"Grants and Contributions (Revenue Account Receipts)",value:"Grants and Contributions (Revenue Account Receipts)"},
            {key:"Total Revenue Receipts (Expenditure)",value:"Total Revenue Receipts (Expenditure)"},
            {key:"General Services",value:"General Services"},
            {key:"Social Services",value:"Social Services"},
            {key:"Economic Services",value:"Economic Services"},
            {key:"Grants and Contributions (Total Revenue Receipts Expenditure)",value:"Grants and Contributions (Total Revenue Receipts Expenditure)"},
            {key:"Total Revenue Expenditure",value:"Total Revenue Expenditure"},
            {key:"Deficit Revenue A/c ",value:"Deficit Revenue A/c "},
            {key:"Consolidated Fund Receipts",value:"Consolidated Fund Receipts"},
            {key:"Net Consolidated Fund (Receipt-Expenditure)",value:"Net Consolidated Fund (Receipt-Expenditure)"},
            {key:"Contingency Fund",value:"Contingency Fund"},
            {key:"Income",value:"Income"},
            {key:"Public Account (Receipts)",value:"Public Account (Receipts)"},
            {key:"Small Savings, PF  etc. Receipts ",value:"Small Savings, PF  etc. Receipts "},
            {key:"Reserve Funds Receipts ",value:"Reserve Funds Receipts "},
            {key:"Deposits and Advances Receipts ",value:"Deposits and Advances Receipts "},
            {key:"Suspense and Misc. Receipts ",value:"Suspense and Misc. Receipts "},
            {key:"Remittances Receipts ",value:"Remittances Receipts "},
            {key:"Total Receipts Public Account",value:"Total Receipts Public Account"},
            {key:"Net Results Public Account (Receipt-Expenditure)",value:"Net Results Public Account (Receipt-Expenditure)"},
            {key:"Net Result (All Accounts) (Receipt-Expenditure)",value:"Net Result (All Accounts) (Receipt-Expenditure)"},
            {key:"Capital Account Receipts",value:"Capital Account Receipts"},
            {key:"Public Debt (Capital Account Receipts)",value:"Public Debt (Capital Account Receipts)"},
            {key:"Recovery of Loans and Advances",value:"Recovery of Loans and Advances"},
            {key:"Total Capital Receipts (Expenditure)",value:"Total Capital Receipts (Expenditure)"},
            {key:"Capital Outlay",value:"Capital Outlay"},
            {key:"Public Debt (Total Capital Receipts)",value:"Public Debt (Total Capital Receipts)"},
            {key:"Loans and advances",value:"Loans and advances"},
            {key:"Total Capital Expenditure ",value:"Total Capital Expenditure "},
            {key:"Deficit Capital Account",value:"Deficit Capital Account"},
            {key:"Consolidated Fund Expenditure",value:"Consolidated Fund Expenditure"},
            {key:"Public Account (Expenditure)",value:"Public Account (Expenditure)"},
            {key:"Small Savings, PF  etc. Disbursements ",value:"Small Savings, PF  etc. Disbursements "},
            {key:"Reserve Funds Disbursements ",value:"Reserve Funds Disbursements "},
            {key:"Deposits and Advances Disbursements ",value:"Deposits and Advances Disbursements "},
            {key:"Suspense and Misc. Disbursements ",value:"Suspense and Misc. Disbursements "},
            {key:"Remittances Disbursements ",value:"Remittances Disbursements "},
            {key:"Total Disbursements Public Account",value:"Total Disbursements Public Account"},
          ]
        }
      }


     
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
         
        }else{
          this.views  = ViewsNotDistrict
         
        }
      }

  onSubmit(user) {
    var controller = "comparison_of_budgets"

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
      var controller = "annual_state_domestic_product3s"
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
