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
  selector: 'app-state-domestic-product1',
  templateUrl: './state-domestic-product1.component.html',
  styleUrls: ['./state-domestic-product1.component.css']
})
export class StateDomesticProduct1Component implements OnInit {

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

  Price_Reference = [
     "Current Prices",
     "Constant Prices",
]
  Districts = ["All","Total Primary Sector","Total Secondary Sector","Total Tertiary Sector"]
  years = [
    {key:"All",value:"All"},
    {key:"2015-16",value:"2015-16"},
    {key:"2016-17",value:"2016-17"},
    {key:"2011-12 to 2015-16",value:"2011-12_to_2015-16"},
];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;
  rain_fall_type = [
    
    {key:"All",value:"All"},
  
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Crops",value:"Crops"},
    {key:"Livestock",value:"Livestock"},
    {key:"Forestry and Logging",value:"Forestry and Logging"},
    {key:"Fishing and Aquaculture",value:"Fishing and Aquaculture"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
    {key:"Total Primary Sector",value:"Total Primary Sector"},
    {key:"Manufacturing",value:"Manufacturing"},
    {key:"Electricity, gas, water supply and other utility services",value:"Electricity, gas, water supply and other utility services"},
    {key:"Construction",value:"Construction"},
    {key:"Total Secondary Sector",value:"Total Secondary Sector"},
    {key:"Trade, repair, hotels and restaurants",value:"Trade, repair, hotels and restaurants"},
    {key:"Trade and repair services",value:"Trade and repair services"},
    {key:"Hotels and restaurants",value:"Hotels and restaurants"},
    {key:"Transport, storage, communication and services related to broadcasting",value:"Transport, storage, communication and services related to broadcasting"},
    {key:"Railways",value:"Railways"},
    {key:"Road transport",value:"Road transport"},
    {key:"Water transport",value:"Water transport"},
    {key:"Air transport",value:"Air transport"},
    {key:"Services incidental to transport",value:"Services incidental to transport"},
    {key:"Storage",value:"Storage"},
    {key:"Communication and services related to broadcasting",value:"Communication and services related to broadcasting"},
    {key:"Financial services",value:"Financial services"},
    {key:"Real estate, ownership of dwelling and professional services",value:"Real estate, ownership of dwelling and professional services"},
    {key:"Public administration",value:"Public administration"},
    {key:"Other services",value:"Other services"},
    {key:"Total Tertiary Sector",value:"Total Tertiary Sector"},
    {key:"Total Gross State Value Added at basic prices",value:"Total Gross State Value Added at basic prices"},
    {key:"Taxes on Products",value:"Taxes on Products"},
    {key:"Subsidies on products",value:"Subsidies on products"},
    {key:"Gross State Domestic Product",value:"Gross State Domestic Product"},


]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison  = [
    {key:"None",value:"None"},
  ]
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
          {key:"Total Gross State Value Added at basic prices",value:"Total Gross State Value Added at basic prices"},
          {key:"Taxes on Products",value:"Taxes on Products"},
          {key:"Subsidies on products",value:"Subsidies on products"},
          {key:"Gross State Domestic Product",value:"Gross State Domestic Product"},
          {key:"None",value:"None"},

        
        ]

       
      }
      else if(select == "Total Primary Sector") { 
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},
        {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
        {key:"Mining and Quarrying",value:"Mining and Quarrying"},
        {key:"None",value:"None"},
      
      ]

      }

      else if(select == "Total Secondary Sector") { 
        this.data.rain_fall_type  = "All"

        this.rain_fall_type_sort = [
          {key:"All",value:"All"},
        {key:"Manufacturing",value:"Manufacturing"},
        {key:"Electricity and Utilitiy Services",value:"Electricity and Utilitiy Services"},
        {key:"Construction",value:"Construction"},
        {key:"None",value:"None"},
      
      ]

      }

      else if(select == "Total Tertiary Sector") { 
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
    var controller = "state_domestic_product1s"

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

        this.AgricultureService.barchart_bihar_vs_district_rainfall_price(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.Price_Reference);
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
      var controller = "annual_state_domestic_product1s"
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


  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

     
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }
}
