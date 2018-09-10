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
  selector: 'app-annual-survey1',
  templateUrl: './annual-survey1.component.html',
  styleUrls: ['./annual-survey1.component.css']
})
export class AnnualSurvey1Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
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
  Districts = ["All","Mining and Quarrying","Manufacturing","Construction","Electricity, Gas, Water Supply and Other Utility Services","Total Secondary Sector","Total GSDP"]
  years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17"];
  views = ViewsNotMap
  rain_fall_type = [{key:"Annual Growth Rate",value:"Annual_Growth_Rate"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None","Mining and Quarrying","Manufacturing","Construction","Electricity, Gas, Water Supply and Other Utility Services","Total Secondary Sector","Total GSDP"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ["None"]
      } else {
        this.Comparison = ["None","Mining and Quarrying","Manufacturing","Construction","Electricity, Gas, Water Supply and Other Utility Services","Total Secondary Sector","Total GSDP"]
      }
      
      }
      toView(view){
        if (view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17"];
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
    var controller = "annual_survey1s"
    user.rain_fall_type = "Annual_Growth_Rate"
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
      
      var controller = "annual_survey1s"
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
