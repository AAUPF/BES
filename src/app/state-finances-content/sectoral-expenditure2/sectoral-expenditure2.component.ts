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
  selector: 'app-sectoral-expenditure2',
  templateUrl: './sectoral-expenditure2.component.html',
  styleUrls: ['./sectoral-expenditure2.component.css']
})
export class SectoralExpenditure2Component implements OnInit {

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
  Districts = ["Total Expenditure (Rs. crore)","Per Capita Expenditure (Rs.)","Estimated Population (crore)"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Education, Sports and Culture",value:"Education, Sports and Culture"},
    {key:"Medical and Public Health",value:"Medical and Public Health"},
    {key:"Water Supply and Sanitation",value:"Water Supply and Sanitation"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Capital Outlay ",value:"Capital Outlay "},
    {key:"General Services",value:"General Services"},
  ]
    data: any = {};    
    toNumber(d) {
    
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
    
  }
    }
      toSet(select){
        if (select == "Estimated Population (crore)") {
          this.data.rain_fall_type = "Estimated Population (crore)"
            this.rain_fall_type = [
                {key:"Estimated Population (crore)",value:"Estimated Population (crore)"}
            ]
        }  
        else {
          this.data.rain_fall_type = "All"
          this.rain_fall_type = [

            {key:"All",value:"All"},
            {key:"Education, Sports and Culture",value:"Education, Sports and Culture"},
            {key:"Medical and Public Health",value:"Medical and Public Health"},
            {key:"Water Supply and Sanitation",value:"Water Supply and Sanitation"},
            {key:"Social Services",value:"Social Services"},
            {key:"Economic Services",value:"Economic Services"},
            {key:"Capital Outlay ",value:"Capital Outlay "},
            {key:"General Services",value:"General Services"},
          
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
    var controller = "sectoral_expenditure2s"

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
