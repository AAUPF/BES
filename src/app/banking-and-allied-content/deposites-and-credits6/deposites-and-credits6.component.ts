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
  selector: 'app-deposites-and-credits6',
  templateUrl: './deposites-and-credits6.component.html',
  styleUrls: ['./deposites-and-credits6.component.css']
})
export class DepositesAndCredits6Component implements OnInit {

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
  Districts = ["Lead Banks","Other Banks"]
  years = [
    {key:"All",value:"All"},
    {key:"Number of Branches",value:"Number_of_Branches"},
{key:"2013-14",value:"2013-14"},
{key:"2014-15",value:"2014-15"},
{key:"2015-16",value:"2015-16"},
{key:"2016-17",value:"2016-17"},
{key:"2017-18",value:"2017-18"},
    
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"BRGF",value:"BRGF"},
    {key:"RGPSA",value:"RGPSA"},
    {key:"MMGY",value:"MMGY"},
    {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
    {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
    {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
    {key:"Construction of Panchayat Sarkar Bhawan",value:"Construction of Panchayat Sarkar Bhawan"},
    {key:"Contingency Grant",value:"Contingency Grant"},
    {key:"Payment and Allowance to GP members/ functionaries",value:"Payment and Allowance to GP members/ functionaries"},
    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"State Bank of India",value:"State Bank of India"},
    {key:"Central Bank of India",value:"Central Bank of India"},
    {key:"Punjab National Bank",value:"Punjab National Bank"},
    {key:"Canara bank",value:"Canara bank"},
    {key:"UCO Bank",value:"UCO Bank"},
    {key:"Bank of Baroda",value:"Bank of Baroda"},
    {key:"Union Bank of India",value:"Union Bank of India"},
    
  ]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
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
          {key:"None",value:"None"},
          {key:"State Bank of India",value:"State Bank of India"},
{key:"Central Bank of India",value:"Central Bank of India"},
{key:"Punjab National Bank",value:"Punjab National Bank"},
{key:"Canara bank",value:"Canara bank"},
{key:"UCO Bank",value:"UCO Bank"},
{key:"Bank of Baroda",value:"Bank of Baroda"},
{key:"Union Bank of India",value:"Union Bank of India"},
{key:"Bank of India",value:"Bank of India"},
{key:"Allahabad Bank",value:"Allahabad Bank"},
{key:"Andhra Bank",value:"Andhra Bank"},
{key:"Bank of Maharashtra",value:"Bank of Maharashtra"},
{key:"Corporation Bank",value:"Corporation Bank"},
{key:"Dena Bank",value:"Dena Bank"},
{key:"Indian Bank",value:"Indian Bank"},
{key:"Indian Overseas bank",value:"Indian Overseas bank"},
{key:"Oriental Bank of Commerce",value:"Oriental Bank of Commerce"},
{key:"Punjab and Sind Bank",value:"Punjab and Sind Bank"},
{key:"Syndicate Bank",value:"Syndicate Bank"},
{key:"United Bank of India",value:"United Bank of India"},
{key:"Vijaya Bank",value:"Vijaya Bank"},
{key:"All Banks ",value:"All Banks "},
          // {key:"Total Expenditure on Road and Bridges",value:"Total Expenditure on Road and Bridges"},
          // {key:"Revenue Expenditure on Road and Bridges",value:"Revenue Expenditure on Road and Bridges"},
          // {key:"Capital Expenditure on Road and Bridges",value:"Capital Expenditure on Road and Bridges"},
          // {key:"Expenditure on Economic Services",value:"Expenditure on Economic Services"},
          // {key:"Development Expenditure",value:"Development Expenditure"},
          // {key:"Total Budget",value:"Total Budget"},
          // {key:"GSDP",value:"GSDP"},
          
        ]
        
      }
    
    }
    toView(view){
  if (view == "line") {
    this.years = [{key:"All",value:"All"}];
  } else {
    this.years = [{key:"All",value:"All"},
    {key:"Number of Branches",value:"Number_of_Branches"},
    {key:"2013-14",value:"2013-14"},
    {key:"2014-15",value:"2014-15"},
    {key:"2015-16",value:"2015-16"},
    {key:"2016-17",value:"2016-17"},
    {key:"2017-18",value:"2017-18"}
];
    
  }
    }
      toSet(select){
        if (select == "Lead Banks") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        {key:"State Bank of India",value:"State Bank of India"},
{key:"Central Bank of India",value:"Central Bank of India"},
{key:"Punjab National Bank",value:"Punjab National Bank"},
{key:"Canara bank",value:"Canara bank"},
{key:"UCO Bank",value:"UCO Bank"},
{key:"Bank of Baroda",value:"Bank of Baroda"},
{key:"Union Bank of India",value:"Union Bank of India"},

      
  ]
           
        }  else if (select == "Revenue Expenditure") {


          this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"(a) Establishment ",value:"(a) Establishment "},
            {key:"(b) Programme",value:"(b) Programme"},
            {key:"(c) Operation/ Maintenance ",value:"(c) Operation/ Maintenance "},
            {key:"(d) Finance /Interest",value:"(d) Finance /Interest"},
            {key:"(e) Others",value:"(e) Others"},
            {key:"Total ",value:"Total "},
            {key:"Capital Grants",value:"Capital Grants"},
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"Bank of India",value:"Bank of India"},
          {key:"Allahabad Bank",value:"Allahabad Bank"},
          {key:"Andhra Bank",value:"Andhra Bank"},
          {key:"Bank of Maharashtra",value:"Bank of Maharashtra"},
          {key:"Corporation Bank",value:"Corporation Bank"},
          {key:"Dena Bank",value:"Dena Bank"},
          {key:"Indian Bank",value:"Indian Bank"},
          {key:"Indian Overseas bank",value:"Indian Overseas bank"},
          {key:"Oriental Bank of Commerce",value:"Oriental Bank of Commerce"},
          {key:"Punjab and Sind Bank",value:"Punjab and Sind Bank"},
          {key:"Syndicate Bank",value:"Syndicate Bank"},
          {key:"United Bank of India",value:"United Bank of India"},
          {key:"Vijaya Bank",value:"Vijaya Bank"},
          {key:"All Banks ",value:"All Banks "},
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
    var controller = "deposites_and_credits6s"

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
      var controller = "roads2s"
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
