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
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-operational-and-financial-status1',
  templateUrl: './operational-and-financial-status1.component.html',
  styleUrls: ['./operational-and-financial-status1.component.css']
})
export class OperationalAndFinancialStatus1Component implements OnInit {
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
  Districts = ["All","Generation and Purchase (MU)","Sales (MU)","Losses (Percentage)","Average Revenue (Rs./Unit)","Sale of Power (Rs. crore)","Total Income (including subsidies) (Rs. crore)","Total Cost (Rs. crore)","Cost Coverage (Total Income/Total cost) (Percentage)","Financial Loss (Percentage)"]
  years = ["All","2013-14","2014-15","2015-16","2016-17"];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"NBPDCL",value:"NBPDCL"},	{key:"SBPDCL",value:"SBPDCL"}]
  Comparison  = ["None","Generation and Purchase (MU)","Sales (MU)","Losses (Percentage)","Average Revenue (Rs./Unit)","Sale of Power (Rs. crore)","Total Income (including subsidies) (Rs. crore)","Total Cost (Rs. crore)","Cost Coverage (Total Income/Total cost) (Percentage)","Financial Loss (Percentage)"]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2013-14","2014-15","2015-16","2016-17"];
    } 
    else {
      if (this.data.view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2013-14","2014-15","2015-16","2016-17"];
      }
    
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  if (this.data.rain_fall_type == "All") {
    this.years = ["2013-14","2014-15","2015-16","2016-17"];
  } else {
    this.years = ["All","2013-14","2014-15","2015-16","2016-17"];
  }
  
}
  }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Generation and Purchase (MU)","Sales (MU)","Losses (Percentage)","Average Revenue (Rs./Unit)","Sale of Power (Rs. crore)","Total Income (including subsidies) (Rs. crore)","Total Cost (Rs. crore)","Cost Coverage (Total Income/Total cost) (Percentage)","Financial Loss (Percentage)"]

        
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"NBPDCL",value:"NBPDCL"},	{key:"SBPDCL",value:"SBPDCL"}]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"NBPDCL",value:"NBPDCL"},	{key:"SBPDCL",value:"SBPDCL"}]
      }
    }

  onSubmit(user) {
    var controller = "operational_and_financial_status1s"

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
      var controller = "operational_and_financial_status1s"
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









