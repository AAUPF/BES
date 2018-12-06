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
  selector: 'app-debt-management2',
  templateUrl: './debt-management2.component.html',
  styleUrls: ['./debt-management2.component.css']
})
export class DebtManagement2Component implements OnInit {

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
  Districts = ["Public Debt","Other Liabilities"]
  years = [
    "All", 
    "2015-16",
    "2016-17",
    "31_03_2016",
    "31_03_2017",
    "2017_from_2016"
];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"A. Internal Debt ",value:"A. Internal Debt "},
    {key:"Market Loans",value:"Market Loans"},
    {key:"WMA from the RBI",value:"WMA from the RBI"},
    {key:"Bonds",value:"Bonds"},
    {key:"Loans from Financial Institutions",value:"Loans from Financial Institutions"},
    {key:"Special Securities Issued to NSSF",value:"Special Securities Issued to NSSF"},
    {key:"Others",value:"Others"},
    {key:"B.  Loans and Advances from Central Government ",value:"B.  Loans and Advances from Central Government "},
    {key:"Non plan loans",value:"Non plan loans"},
    {key:"Loans for Central Plan Schemes",value:"Loans for Central Plan Schemes"},
    {key:"Loans for State Plan Schemes",value:"Loans for State Plan Schemes"},
    {key:"Loans for Centrally Sponsored Plan Schemes",value:"Loans for Centrally Sponsored Plan Schemes"},
    {key:"Other Loans",value:"Other Loans"},
    {key:"Total (A+B)",value:"Total (A+B)"},
    {key:"None", value:"None"}
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"A. Internal Debt ",value:"A. Internal Debt "},
    {key:"Market Loans",value:"Market Loans"},
    {key:"WMA from the RBI",value:"WMA from the RBI"},
    {key:"Bonds",value:"Bonds"},
    {key:"Loans from Financial Institutions",value:"Loans from Financial Institutions"},
    {key:"Special Securities Issued to NSSF",value:"Special Securities Issued to NSSF"},
    {key:"Others",value:"Others"},
    {key:"B.  Loans and Advances from Central Government ",value:"B.  Loans and Advances from Central Government "},
    {key:"Non plan loans",value:"Non plan loans"},
    {key:"Loans for Central Plan Schemes",value:"Loans for Central Plan Schemes"},
    {key:"Loans for State Plan Schemes",value:"Loans for State Plan Schemes"},
    {key:"Loans for Centrally Sponsored Plan Schemes",value:"Loans for Centrally Sponsored Plan Schemes"},
    {key:"Other Loans",value:"Other Loans"},
    {key:"Total (A+B)",value:"Total (A+B)"},
   
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        
      } else {
        this.data.Comparison = "None"
        this.Comparison = [
          {key:"A. Internal Debt ",value:"A. Internal Debt "},
          {key:"Market Loans",value:"Market Loans"},
          {key:"WMA from the RBI",value:"WMA from the RBI"},
          {key:"Bonds",value:"Bonds"},
          {key:"Loans from Financial Institutions",value:"Loans from Financial Institutions"},
          {key:"Special Securities Issued to NSSF",value:"Special Securities Issued to NSSF"},
          {key:"Others",value:"Others"},
          {key:"B.  Loans and Advances from Central Government ",value:"B.  Loans and Advances from Central Government "},
          {key:"Non plan loans",value:"Non plan loans"},
          {key:"Loans for Central Plan Schemes",value:"Loans for Central Plan Schemes"},
          {key:"Loans for State Plan Schemes",value:"Loans for State Plan Schemes"},
          {key:"Loans for Centrally Sponsored Plan Schemes",value:"Loans for Centrally Sponsored Plan Schemes"},
          {key:"Other Loans",value:"Other Loans"},
          {key:"Total (A+B)",value:"Total (A+B)"},
          {key:"None", value:"None"}
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
        {key:"Internal  Debt",value:"Internal  Debt"},
        {key:"Central Loans",value:"Central Loans"},
        {key:"Total",value:"Total"},
      
  ]
           
        }  else if (select == "Other Liabilities") {


          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"A. Internal Debt ",value:"A. Internal Debt "},
            {key:"Market Loans",value:"Market Loans"},
            {key:"WMA from the RBI",value:"WMA from the RBI"},
            {key:"Bonds",value:"Bonds"},
            {key:"Loans from Financial Institutions",value:"Loans from Financial Institutions"},
            {key:"Special Securities Issued to NSSF",value:"Special Securities Issued to NSSF"},
            {key:"Others",value:"Others"},
            {key:"B.  Loans and Advances from Central Government ",value:"B.  Loans and Advances from Central Government "},
            {key:"Non plan loans",value:"Non plan loans"},
            {key:"Loans for Central Plan Schemes",value:"Loans for Central Plan Schemes"},
            {key:"Loans for State Plan Schemes",value:"Loans for State Plan Schemes"},
            {key:"Loans for Centrally Sponsored Plan Schemes",value:"Loans for Centrally Sponsored Plan Schemes"},
            {key:"Other Loans",value:"Other Loans"},
            {key:"Total (A+B)",value:"Total (A+B)"},

          ]
        }

  
        
        else {
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"A. Internal Debt ",value:"A. Internal Debt "},
            {key:"Market Loans",value:"Market Loans"},
            {key:"WMA from the RBI",value:"WMA from the RBI"},
            {key:"Bonds",value:"Bonds"},
            {key:"Loans from Financial Institutions",value:"Loans from Financial Institutions"},
            {key:"Special Securities Issued to NSSF",value:"Special Securities Issued to NSSF"},
            {key:"Others",value:"Others"},
            {key:"B.  Loans and Advances from Central Government ",value:"B.  Loans and Advances from Central Government "},
            {key:"Non plan loans",value:"Non plan loans"},
            {key:"Loans for Central Plan Schemes",value:"Loans for Central Plan Schemes"},
            {key:"Loans for State Plan Schemes",value:"Loans for State Plan Schemes"},
            {key:"Loans for Centrally Sponsored Plan Schemes",value:"Loans for Centrally Sponsored Plan Schemes"},
            {key:"Other Loans",value:"Other Loans"},
            {key:"Total (A+B)",value:"Total (A+B)"},
           
          
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
    var controller = "debt_management2s"

    if (user.view !== "Map View") {

      
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
