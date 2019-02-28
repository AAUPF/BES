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
import { ViewsNotTrend } from '../../data/viewsnottrend';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-state-domestic-product3',
  templateUrl: './state-domestic-product3.component.html',
  styleUrls: ['./state-domestic-product3.component.css']
})
export class StateDomesticProduct3Component implements OnInit {
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
  Districts = ["All","Primary","Secondary","Tertiary"]
  years = ["All","2011-12", "2012-13","2013-14","2014-15","2015-16","2016-17"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Crops",value:"Crops"},
    {key:"Livestock",value:"Livestock"},
    {key:"Forestry and Logging",value:"Forestry and Logging"},
    {key:"Fishing and Aquaculture",value:"Fishing and Aquaculture"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
    {key:"Primary",value:"Primary"},
    {key:"Manufacturing",value:"Manufacturing"},
    {key:"Electricity and Utilitiy Services",value:"Electricity and Utilitiy Services"},
    {key:"Construction",value:"Construction"},
    {key:"Secondary",value:"Secondary"},
    {key:"Trade and Hospitality",value:"Trade and Hospitality"},
    {key:"Trade and Repair Services",value:"Trade and Repair Services"},
    {key:"Hotels and Restaurants",value:"Hotels and Restaurants"},
    {key:"Transport and Communication",value:"Transport and Communication"},
    {key:"Railways",value:"Railways"},
    {key:"Road Transport",value:"Road Transport"},
    {key:"Water Transport",value:"Water Transport"},
    {key:"Air Transport",value:"Air Transport"},
    {key:"Services incidental to transport",value:"Services incidental to transport"},
    {key:"Storage",value:"Storage"},
    {key:"Communication and Broadcasting",value:"Communication and Broadcasting"},
    {key:"Financial Services",value:"Financial Services"},
    {key:"Real Estate Services",value:"Real Estate Services"},
    {key:"Public Administration",value:"Public Administration"},
    {key:"Other Services",value:"Other Services"},
    {key:"Tertiary",value:"Tertiary"},
    {key:"Total GSVA at basic prices",value:"Total GSVA at basic prices"},
    {key:"None",value:"None"},
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    compare(d) {


    if (d == "Agriculture, Forestry and Fishing") {
      this.data.Comparison = "All"
      this.Comparison = 
      [
        {key:"All",value:"All"},
        {key:"Crops",value:"Crops"},
        {key:"Livestock",value:"Livestock"},
        {key:"Forestry and Logging",value:"Forestry and Logging"},
        {key:"Fishing and Aquaculture",value:"Fishing and Aquaculture"},
        {key:"None",value:"None"},

      ]
      
    } 
    
    else if (d == "Mining and Quarrying") {

      if (this.data.districts == "All") {
         this.data.Comparison = "None"
         this.Comparison = 
         [
           {key:"None",value:"None"},
   
         ]
         
       } else {


        this.data.Comparison = "None"
        this.Comparison = 
  
        [
          {key:"None",value:"None"},
  
        ]
        }

    }

    else if (d == "Mining and Quarrying") {

      this.data.Comparison = "None"
      this.Comparison = 

      [
        {key:"None",value:"None"},

      ]
    }

    else if (d == "Trade and Hospitality") {


      

      this.data.Comparison = "All"
      this.Comparison = 

      [
        {key:"All",value:"All"},
        {key:"Trade and Repair Services",value:"Trade and Repair Services"},
        {key:"Hotels and Restaurants",value:"Hotels and Restaurants"},
        {key:"None",value:"None"},

      ]
    }


    else if (d == "Transport and Communication") {

      this.data.Comparison = "All"
      this.Comparison = 

      [
        {key:"All",value:"All"},
        {key:"Railways",value:"Railways"},
        {key:"Road Transport",value:"Road Transport"},
        {key:"Water Transport",value:"Water Transport"},
        {key:"Air Transport",value:"Air Transport"},
        {key:"Services incidental to transport",value:"Services incidental to transport"},
        {key:"Storage",value:"Storage"},
        {key:"Communication and Broadcasting",value:"Communication and Broadcasting"},
        {key:"None",value:"None"},

      ]
    }
    
    else {
    this.data.Comparison = "None"
    this.Comparison = 

      [
        {key:"None",value:"None"},

      ]
    
    }
    
  }
    toSet(select){

      
      if (select == "All") {
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},
          {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
          {key:"Mining and Quarrying",value:"Mining and Quarrying"},
          {key:"Manufacturing",value:"Manufacturing"},
          {key:"Electricity and Utilitiy Services",value:"Electricity and Utilitiy Services"},
          {key:"Construction",value:"Construction"},
          {key:"Trade and Hospitality",value:"Trade and Hospitality"},
          {key:"Transport and Communication",value:"Transport and Communication"},
          {key:"Financial Services",value:"Financial Services"},
          {key:"Real Estate Services",value:"Real Estate Services"},
          {key:"Public Administration",value:"Public Administration"},
          {key:"Other Services",value:"Other Services"},
          {key:"Total GSVA at basic prices",value:"Total GSVA at basic prices"},
          {key:"None",value:"None"},

        
        ]

       
      }
      else if(select == "Primary") { 
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},
        {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
        {key:"Mining and Quarrying",value:"Mining and Quarrying"},
        {key:"None",value:"None"},
      
      ]

      }

      else if(select == "Secondary") { 
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},
        {key:"Manufacturing",value:"Manufacturing"},
        {key:"Electricity and Utilitiy Services",value:"Electricity and Utilitiy Services"},
        {key:"Construction",value:"Construction"},
        {key:"None",value:"None"},
      
      ]

      }

      else if(select == "Tertiary") { 
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},   
          {key:"Trade and Hospitality",value:"Trade and Hospitality"},
          {key:"Transport and Communication",value:"Transport and Communication"},
          {key:"Financial Services",value:"Financial Services"},
          {key:"Real Estate Services",value:"Real Estate Services"},
          {key:"Public Administration",value:"Public Administration"},
          {key:"Other Services",value:"Other Services"},
        {key:"None",value:"None"},
      ]
    }
      else {
        this.butDisabled = false;
      }
    }

    toView(view){
      if (view == "line") {
        this.years = ["All"];
      }
      else if(view == "Map View"){
        this.years = ["2011-12", "2012-13","2013-14","2014-15","2015-16","2016-17"];
      }
      else {
        this.years = ["All","2011-12", "2012-13","2013-14","2014-15","2015-16","2016-17"];
      }
  }

    toyear(d){
      if (d == "All") {
        this.views = ViewsNotMap
      } else {
        this.views = ViewsNotDistrict
      }
    }
  onSubmit(user) {
    var controller = "annual_state_domestic_product3s"

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










