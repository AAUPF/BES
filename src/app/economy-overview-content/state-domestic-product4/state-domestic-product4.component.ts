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
    {key:"Gross State Domestic Product (GSDP)",value:"GSDP"},
    {key:"Net State Domestic Product (NSDP)",value:"NSDP"},
    {key:"Per Capital GSDP (Rs.)",value:"Per_Capita_GSDP"},
  ]
  years = [
    {key:"All",value:"All"},
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
    data: any = {};    
    data1(d){
      if (d == "Base Year 2004-05 at Factor Cost") {
        this.data.years = "All"
        this.years = [
          {key:"All",value:"All"},
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
      } else {
        this.data.years = "All"
        this.years = [
          {key:"All",value:"All"},
          {key:"2011-12",value:"2011-12"},
          {key:"2012-13",value:"2012-13"},
          {key:"2013-14",value:"2013-14"},
          {key:"2014-15",value:"2014-15"},
          {key:"2015-16 (P)",value:"2015-16 (P)"},
          {key:"2016-17 (Q)",value:"2016-17 (Q)"},
          {key:"CAGR (2011-17)",value:"CAGR (2011-17)"},
        ]
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
    var controller = "state_domestic_product4s"

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
