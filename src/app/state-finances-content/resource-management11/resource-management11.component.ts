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
  selector: 'app-resource-management11',
  templateUrl: './resource-management11.component.html',
  styleUrls: ['./resource-management11.component.css']
})
export class ResourceManagement11Component implements OnInit {
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
  Districts = ["All","Own Tax Revenue as percentage of GSDP","Own Non-Tax Revenue as percentage of GSDP","Total Revenue as percentage of GSDP","Buoyancy of Total Revenue w.r.t. GSDP (Ratio)","Buoyancy of State’s Own Taxes w.r.t. GSDP(Ratio)"]
  years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  views = ViewsNotMap
  rain_fall_type = [{key:"Percentage",value:"Percentage"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None","Own Tax Revenue as percentage of GSDP","Own Non-Tax Revenue as percentage of GSDP","Total Revenue as percentage of GSDP","Buoyancy of Total Revenue w.r.t. GSDP (Ratio)","Buoyancy of State’s Own Taxes w.r.t. GSDP(Ratio)"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ["None"]
      } else {
        this.Comparison = ["None","Own Tax Revenue as percentage of GSDP","Own Non-Tax Revenue as percentage of GSDP","Total Revenue as percentage of GSDP","Buoyancy of Total Revenue w.r.t. GSDP (Ratio)","Buoyancy of State’s Own Taxes w.r.t. GSDP(Ratio)"]
      }
      
      }
      toView(view){
        if (view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
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
    var controller = "resource_management11s"
    user.rain_fall_type = "Percentage"
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
      
      var controller = "resource_management11s"
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