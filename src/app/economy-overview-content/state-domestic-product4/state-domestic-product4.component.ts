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
  selector: 'app-state-domestic-product4',
  templateUrl: './state-domestic-product4.component.html',
  styleUrls: ['./state-domestic-product4.component.css']
})
export class StateDomesticProduct4Component implements OnInit {

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
    {key:"Gross State Domestic Product (GSDP)",value:"GSDP"},
    {key:"Net State Domestic Product (NSDP)",value:"NSDP"},
    {key:"Per Capital GSDP (Rs.)",value:"Per_Capita_GSDP"},
    {key:"All",value:"All"},


  ]
  years = [

    {key:"2004-05",value:"2004-05"},
    {key:"2005-06",value:"2005-06"},
    {key:"2006-07",value:"2006-07"},
    {key:"2007-08",value:"2007-08"},
    {key:"2008-09",value:"2008-09"},
    {key:"2009-10",value:"2009-10"},
    {key:"2010-11",value:"2010-11"},
    {key:"2011-12",value:"2011-12"},
    {key:"2012-13",value:"2012-13"},
    {key:"2013-14 (P)",value:"2013-14 (P)"},
    {key:"2014-15 (Q)",value:"2014-15 (Q)"},
    {key:"CAGR (2004-15)",value:"CAGR (2004-15)"},

  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;
  rain_fall_type = [
    {key:"Current Prices",value:"At current prices"},
    {key:"Constant Prices (2004-05)",value:"At constant (2004-05) prices"},
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison  = [
    {key:"2004-05 at Factor Cost",value:"Base Year 2004-05 at Factor Cost"},
    {key:"2011-12 at Market Price",value:"Base Year 2011-12 at Market Price"},

  ]
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    data1(d){


      if (d == "Base Year 2004-05 at Factor Cost") {
         this.data.years = "All"
        this.years = [
          {key:"2004-05",value:"2004-05"},
          {key:"2005-06",value:"2005-06"},
          {key:"2006-07",value:"2006-07"},
          {key:"2007-08",value:"2007-08"},
          {key:"2008-09",value:"2008-09"},
          {key:"2009-10",value:"2009-10"},
          {key:"2010-11",value:"2010-11"},
          {key:"2011-12",value:"2011-12"},
          {key:"2012-13",value:"2012-13"},
          {key:"2013-14 (P)",value:"2013-14 (P)"},
          {key:"2014-15 (Q)",value:"2014-15 (Q)"},
          {key:"CAGR (2004-15)",value:"CAGR (2004-15)"},
          {key:"All",value:"All"},
        ];
        
      } else {
        this.data.years = "All"

        this.years = [
          {key:"2011-12",value:"2011-12"},
          {key:"2012-13",value:"2012-13"},
          {key:"2013-14",value:"2013-14"},
          {key:"2014-15",value:"2014-15"},
          {key:"2015-16 (P)",value:"2015-16 (P)"},
          {key:"2016-17 (Q)",value:"2016-17 (Q)"},
          {key:"CAGR (2011-17)",value:"CAGR (2011-17)"},
          {key:"All",value:"All"},
        ]
        
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
    var controller = "state_domestic_product4s"

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
