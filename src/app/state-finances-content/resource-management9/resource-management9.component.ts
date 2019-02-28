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
  selector: 'app-resource-management9',
  templateUrl: './resource-management9.component.html',
  styleUrls: ['./resource-management9.component.css']
})
export class ResourceManagement9Component implements OnInit {

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
  {key:"All",value:"All"},
  {key:"Taxes on Sales, Trade",value:"Taxes on Sales, Trade"},
  {key:"Taxes on Goods and Passengers",value:"Taxes on Goods and Passengers"},
  {key:"State Excise",value:"State Excise"},
  {key:"Stamp and Registration Fees",value:"Stamp and Registration Fees"},
  {key:"Taxes on Vehicles",value:"Taxes on Vehicles"},
  {key:"Land Revenue",value:"Land Revenue"},
  {key:"Taxes and Duties on Electricity",value:"Taxes and Duties on Electricity"},
  {key:"Other Taxes and Duties on Commodities and Services",value:"Other Taxes and Duties on Commodities and Services"},
  {key:"Non-Ferrous Mining and Metallurgical Industries",value:"Non-Ferrous Mining and Metallurgical Industries"},
  {key:"Interest Receipts",value:"Interest Receipts"},
  {key:"Miscellaneous General Services",value:"Miscellaneous General Services"},
  {key:"Other Administrative Services",value:"Other Administrative Services"},
  {key:"Police",value:"Police"},
  {key:"Major Irrigation",value:"Major Irrigation"},
  {key:"Education, Sports, Arts and Culture",value:"Education, Sports, Arts and Culture"},
  {key:"Roads and Bridges",value:"Roads and Bridges"},
  {key:"Medical and Public Health",value:"Medical and Public Health"},
  {key:"Other Rural Development Programmes",value:"Other Rural Development Programmes"},
  {key:"Social Security and Welfare",value:"Social Security and Welfare"},
  {key:"Others",value:"Others"},]
  // years = ["All", "Budget_Estimate","Actual_Receipts","Variation_Excess_or_Shortfall_in_Amount","Variation_Excess_or_Shortfall_in_Percentage"];
  views = ViewsNotDistrict;
  years = [
    {key:"All",value:"All"},
    {key:"Budget Estimate",value:"Budget_Estimate"},
    {key:"Actual Receipts",value:"Actual_Receipts"},
    {key:"Variation Excess/Shortfall in Amount",value:"Variation_Excess_or_Shortfall_in_Amount"},
    {key:"Variation Excess/Shortfall in Percentage",value:"Variation_Excess_or_Shortfall_in_Percentage"},
  ]

  

  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Budget Estimate",value:"Budget_Estimate"},
    {key:"Actual Receipts",value:"Actual_Receipts"},
    {key:"Variation Excess/Shortfall in Amount",value:"Variation_Excess_or_Shortfall_in_Amount"},
    {key:"Variation Excess/Shortfall in Percentage",value:"Variation_Excess_or_Shortfall_in_Percentage"}
    // {key:"None",value:"None"},
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = [
    {key:"None",value:"None"},
    {key:"Taxes on Sales, Trade",value:"Taxes on Sales, Trade"},
    {key:"Taxes on Goods and Passengers",value:"Taxes on Goods and Passengers"},
    {key:"State Excise",value:"State Excise"},
    {key:"Stamp and Registration Fees",value:"Stamp and Registration Fees"},
    {key:"Taxes on Vehicles",value:"Taxes on Vehicles"},
    {key:"Land Revenue",value:"Land Revenue"},
    {key:"Taxes and Duties on Electricity",value:"Taxes and Duties on Electricity"},
    {key:"Other Taxes and Duties on Commodities and Services",value:"Other Taxes and Duties on Commodities and Services"},
    {key:"Non-Ferrous Mining and Metallurgical Industries",value:"Non-Ferrous Mining and Metallurgical Industries"},
    {key:"Interest Receipts",value:"Interest Receipts"},
    {key:"Miscellaneous General Services",value:"Miscellaneous General Services"},
    {key:"Other Administrative Services",value:"Other Administrative Services"},
    {key:"Police",value:"Police"},
    {key:"Major Irrigation",value:"Major Irrigation"},
    {key:"Education, Sports, Arts and Culture",value:"Education, Sports, Arts and Culture"},
    {key:"Roads and Bridges",value:"Roads and Bridges"},
    {key:"Medical and Public Health",value:"Medical and Public Health"},
    {key:"Other Rural Development Programmes",value:"Other Rural Development Programmes"},
    {key:"Social Security and Welfare",value:"Social Security and Welfare"},
    {key:"Others",value:"Others"},]
    data: any = {};    


    toNumber(d) {
      if (d == "All" || d == "Bihar") {
        this.data.Comparison = "None"
        this.Comparison  = [{key:"None",value:"None"}]
        } else {
          this.Comparison = [    
          {key:"None",value:"None"},
          {key:"Taxes on Sales, Trade",value:"Taxes on Sales, Trade"},
          {key:"Taxes on Goods and Passengers",value:"Taxes on Goods and Passengers"},
          {key:"State Excise",value:"State Excise"},
          {key:"Stamp and Registration Fees",value:"Stamp and Registration Fees"},
          {key:"Taxes on Vehicles",value:"Taxes on Vehicles"},
          {key:"Land Revenue",value:"Land Revenue"},
          {key:"Taxes and Duties on Electricity",value:"Taxes and Duties on Electricity"},
          {key:"Other Taxes and Duties on Commodities and Services",value:"Other Taxes and Duties on Commodities and Services"},
          {key:"Non-Ferrous Mining and Metallurgical Industries",value:"Non-Ferrous Mining and Metallurgical Industries"},
          {key:"Interest Receipts",value:"Interest Receipts"},
          {key:"Miscellaneous General Services",value:"Miscellaneous General Services"},
          {key:"Other Administrative Services",value:"Other Administrative Services"},
          {key:"Police",value:"Police"},
          {key:"Major Irrigation",value:"Major Irrigation"},
          {key:"Education, Sports, Arts and Culture",value:"Education, Sports, Arts and Culture"},
          {key:"Roads and Bridges",value:"Roads and Bridges"},
          {key:"Medical and Public Health",value:"Medical and Public Health"},
          {key:"Other Rural Development Programmes",value:"Other Rural Development Programmes"},
          {key:"Social Security and Welfare",value:"Social Security and Welfare"},
          {key:"Others",value:"Others"},]
        }
    }
  //   // toNumber(d) {
    
  //   // }
  // //   toView(view){
  // // if (view == "line") {
  // //   this.years = ["All"];
  // // } else {
  // //   if (this.data.rain_fall_type == "All") {
  // //     this.years = ["2015","2016_RE","2017_RE"];
  // //   } else {
  // //     this.years = ["All","2015","2016_RE","2017_RE"];
  // //   }
    
  // // }
  // //   }
  //     toSet(select){
  //       if (select == "Own Tax Revenue") {
  //         this.data.rain_fall_type = "All"  
  //     this.rain_fall_type_sort = [
  //       {key:"All",value:"All"},
  //       {key:"Taxes on Sales, Trade",value:"Taxes on Sales, Trade"},
  //       {key:"Taxes on Goods and Passengers",value:"Taxes on Goods and Passengers"},
  //       {key:"State Excise",value:"State Excise"},
  //       {key:"Stamp and Registration Fees",value:"Stamp and Registration Fees"},
  //       {key:"Taxes on Vehicles",value:"Taxes on Vehicles"},
  //       {key:"Land Revenue",value:"Land Revenue"},
  //       {key:"Taxes and Duties on Electricity",value:"Taxes and Duties on Electricity"},
  //       {key:"Other Taxes and Duties on Commodities and Services",value:"Other Taxes and Duties on Commodities and Services"},
  //       // {key:"Total",value:"Total"},
  // ]
  //       }  else if (select == "Non Tax Revenue") {
  //         this.data.rain_fall_type = "All"
  //         this.rain_fall_type_sort = [
  //           {key:"All",value:"All"},
  //           {key:"Non-Ferrous Mining and Metallurgical Industries",value:"Non-Ferrous Mining and Metallurgical Industries"},
  //           {key:"Interest Receipts",value:"Interest Receipts"},
  //           {key:"Miscellaneous General Services",value:"Miscellaneous General Services"},
  //           {key:"Other Administrative Services",value:"Other Administrative Services"},
  //           {key:"Police",value:"Police"},
  //           {key:"Major Irrigation",value:"Major Irrigation"},
  //           {key:"Education, Sports, Arts and Culture",value:"Education, Sports, Arts and Culture"},
  //           {key:"Roads and Bridges",value:"Roads and Bridges"},
  //           {key:"Medical and Public Health",value:"Medical and Public Health"},
  //           {key:"Other Rural Development Programmes",value:"Other Rural Development Programmes"},
  //           {key:"Social Security and Welfare",value:"Social Security and Welfare"},
  //           {key:"Others",value:"Others"},
  //           // {key:"Total",value:"Total"},
  //         ]
  //       }
        
  //       else {
  //         this.data.rain_fall_type = "All" 
  //         this.rain_fall_type_sort = [ 
  //           {key:"All",value:"All"},
  //           {key:"Taxes on Sales, Trade",value:"Taxes on Sales, Trade"},
  //           {key:"Taxes on Goods and Passengers",value:"Taxes on Goods and Passengers"},
  //           {key:"State Excise",value:"State Excise"},
  //           {key:"Stamp and Registration Fees",value:"Stamp and Registration Fees"},
  //           {key:"Taxes on Vehicles",value:"Taxes on Vehicles"},
  //           {key:"Land Revenue",value:"Land Revenue"},
  //           {key:"Taxes and Duties on Electricity",value:"Taxes and Duties on Electricity"},
  //           {key:"Other Taxes and Duties on Commodities and Services",value:"Other Taxes and Duties on Commodities and Services"},
  //           {key:"Non-Ferrous Mining and Metallurgical Industries",value:"Non-Ferrous Mining and Metallurgical Industries"},
  //           {key:"Interest Receipts",value:"Interest Receipts"},
  //           {key:"Miscellaneous General Services",value:"Miscellaneous General Services"},
  //           {key:"Other Administrative Services",value:"Other Administrative Services"},
  //           {key:"Police",value:"Police"},
  //           {key:"Major Irrigation",value:"Major Irrigation"},
  //           {key:"Education, Sports, Arts and Culture",value:"Education, Sports, Arts and Culture"},
  //           {key:"Roads and Bridges",value:"Roads and Bridges"},
  //           {key:"Medical and Public Health",value:"Medical and Public Health"},
  //           {key:"Other Rural Development Programmes",value:"Other Rural Development Programmes"},
  //           {key:"Social Security and Welfare",value:"Social Security and Welfare"},
  //           {key:"Others",value:"Others"},
  //         ]
  //       }
  //     }
  //     // toYear(year){
  //     //   if(year == "All"){
  //     //     this.data.views = "column"
  //     //     this.views = ViewsNotMap
         
  //     //   }else{
  //     //     this.data.views = "column"
  //     //     this.views  = ViewsNotDistrict
         
  //     //   }
  //     // }
    
  onSubmit(user) {
    var controller = "resource_management9s"

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
      var controller = "resource_management9s"
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
