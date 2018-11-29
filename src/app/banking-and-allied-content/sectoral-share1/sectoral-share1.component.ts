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
  selector: 'app-sectoral-share1',
  templateUrl: './sectoral-share1.component.html',
  styleUrls: ['./sectoral-share1.component.css']
})
export class SectoralShare1Component implements OnInit {
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
  Districts = ["All","Agriculture","Small and Medium Enterprises","Other Priority Sector Advances","Total Priority Sector Advances","Non Priority Sector Advances","Total"]
  years = ["All","2015-16", "2016-17"];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"ACP Target",value:"ACP_Target"},	{key:"Achievement",value:"Achievement"},	{key:"Achievement Percentage",value:"Achievement_Percentage"},{key:"Percentage of Share in Advances",value:"Percentage_of_Share_in_Advances"}]
  Comparison  = ["None","Agriculture","Small and Medium Enterprises","Other Priority Sector Advances","Total Priority Sector Advances","Non Priority Sector Advances","Total"]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2015-16", "2016-17"];
    } 
    else {
      if (this.data.view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2015-16", "2016-17"];
      }
    
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  if (this.data.rain_fall_type == "All") {
    this.years = ["2015-16", "2016-17"];
  } else {
    this.years = ["All","2015-16", "2016-17"];
  }
  
}
  }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Agriculture","Small and Medium Enterprises","Other Priority Sector Advances","Total Priority Sector Advances","Non Priority Sector Advances","Total"]

        
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"ACP Target",value:"ACP_Target"},	{key:"Achievement",value:"Achievement"},	{key:"Achievement Percentage",value:"Achievement_Percentage"},{key:"Percentage of Share in Advances",value:"Percentage_of_Share_in_Advances"}]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"ACP Target",value:"ACP_Target"},	{key:"Achievement",value:"Achievement"},	{key:"Achievement Percentage",value:"Achievement_Percentage"},{key:"Percentage of Share in Advances",value:"Percentage_of_Share_in_Advances"}]
      }
    }

  onSubmit(user) {
    var controller = "sectoral_share1s"

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
      var controller = "sectoral_share1s"
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









