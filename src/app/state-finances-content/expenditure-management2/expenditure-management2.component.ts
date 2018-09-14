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
  selector: 'app-expenditure-management2',
  templateUrl: './expenditure-management2.component.html',
  styleUrls: ['./expenditure-management2.component.css']
})
export class ExpenditureManagement2Component implements OnInit {

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
  Districts = ["Revenue Account","Capital Account ","All"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Non-Developmental  Revenue Expenditure",value:"Non-Developmental  Revenue Expenditure"},
    {key:"Developmental Revenue Expenditure",value:"Developmental Revenue Expenditure"},
    {key:"General Services (Public Works)",value:"General Services (Public Works)"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Loans and Advances ",value:"Loans and Advances "},
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
        if (select == "Revenue Account") {    
          this.data.rain_fall_type = "All"    
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"Non-Developmental  Revenue Expenditure",value:"Non-Developmental  Revenue Expenditure"},
        {key:"Developmental Revenue Expenditure",value:"Developmental Revenue Expenditure"},
        {key:"General Services (Public Works)",value:"General Services (Public Works)"},
        {key:"Social Services",value:"Social Services"},
        {key:"Economic Services",value:"Economic Services"},
        {key:"None",value:"None"},
  ]
        }  else if (select == "Capital Account ") {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Non-Developmental  Capital Expenditure",value:"Non-Developmental  Capital Expenditure"},
            {key:"General Service (Except Public Works)",value:"General Service (Except Public Works)"},
            {key:"Discharge of Public Debt (General Services) ",value:"Discharge of Public Debt (General Services) "},
            {key:"Loans and Advances by State (General Services)",value:"Loans and Advances by State (General Services)"},
            {key:"Developmental Capital Expenditure",value:"Developmental Capital Expenditure"},
            {key:"Capital Outlay (General Services (Public Works), Social and Economic Services)",value:"Capital Outlay (General Services (Public Works), Social and Economic Services)"},
            {key:"Loans and Advances by State  (Social and Economic Services)",value:"Loans and Advances by State  (Social and Economic Services)"},
            {key:"None",value:"None"},
          ]
        }

        else if (select == "III. Total Revenue Receipts") {
          this.data.rain_fall_type = "None" 
          this.rain_fall_type_sort = [
            {key:"State’s Own Revenue as Percentage of Total Receipts",value:"State’s Own Revenue as Percentage of Total Receipts"},
            {key:"None",value:"None"},
          ]
        }
        
        else {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"Revenue Account",value:"Revenue Account"},
            {key:"Non-Developmental  Revenue Expenditure",value:"Non-Developmental  Revenue Expenditure"},
            {key:"Developmental Revenue Expenditure",value:"Developmental Revenue Expenditure"},
            {key:"General Services (Public Works)",value:"General Services (Public Works)"},
            {key:"Social Services",value:"Social Services"},
            {key:"Economic Services",value:"Economic Services"},
            {key:"Capital Account ",value:"Capital Account "},
            {key:"Non-Developmental  Capital Expenditure",value:"Non-Developmental  Capital Expenditure"},
            {key:"General Service (Except Public Works)",value:"General Service (Except Public Works)"},
            {key:"Discharge of Public Debt (General Services) ",value:"Discharge of Public Debt (General Services) "},
            {key:"Loans and Advances by State (General Services)",value:"Loans and Advances by State (General Services)"},
            {key:"Developmental Capital Expenditure",value:"Developmental Capital Expenditure"},
            {key:"Capital Outlay (General Services (Public Works), Social and Economic Services)",value:"Capital Outlay (General Services (Public Works), Social and Economic Services)"},
            {key:"Loans and Advances by State  (Social and Economic Services)",value:"Loans and Advances by State  (Social and Economic Services)"},
            {key:"Total Non- Developmental Expenditure ",value:"Total Non- Developmental Expenditure "},
            {key:"Total Developmental Expenditure",value:"Total Developmental Expenditure"},
            {key:"Total Expenditure ",value:"Total Expenditure "},
            
          
          ]
        }
      }
      toYear(year){
        if(year == "All"){
          this.data.views = "column"
          this.views = ViewsNotMap
         
        }else{
          this.data.views = "column"
          this.views  = ViewsNotDistrict
         
        }
      }
    
  onSubmit(user) {
    var controller = "expenditure_management2s"

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
