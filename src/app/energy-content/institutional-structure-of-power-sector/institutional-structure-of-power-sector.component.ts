import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import{Functions} from '../../data/func';
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-institutional-structure-of-power-sector',
  templateUrl: './institutional-structure-of-power-sector.component.html',
  styleUrls: ['./institutional-structure-of-power-sector.component.css']
})
export class InstitutionalStructureOfPowerSectorComponent implements OnInit {
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
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = ["All","2013-14","2014-15","2015-16","2016-17","2017-18"];
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"}, {key:"BRGF",value:"BRGF"},	{key:"State Plan BSPHCL",value:"State_Plan_BSPHCL"},	{key:"State Plan Generation",value:"State_Plan_Generation"},{key:"State Plan Transmission",value:"State_Plan_Transmission"},{key:"State Plan Distribution",value:"State_Plan_Distribution"},{key:"State Plan BREDA",value:"State_Plan_BREDA"},{key:"State Plan BSHPC",value:"State_Plan_BSHPC"},{key:"BSHPC RIDF",value:"BSHPC_RIDF"},{key:"EAP",value:"EAP"},{key:"Mukhya Mantri Vidyut Sambandh Nishchay Yojna",value:"Mukhya_Mantri_Vidyut_Sambandh_Nishchay_Yojna"}	]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"}, {key:"BRGF",value:"BRGF"},	{key:"State Plan BSPHCL",value:"State_Plan_BSPHCL"},	{key:"State Plan Generation",value:"State_Plan_Generation"},{key:"State Plan Transmission",value:"State_Plan_Transmission"},{key:"State Plan Distribution",value:"State_Plan_Distribution"},{key:"State Plan BREDA",value:"State_Plan_BREDA"},{key:"State Plan BSHPC",value:"State_Plan_BSHPC"},{key:"BSHPC RIDF",value:"BSHPC_RIDF"},{key:"EAP",value:"EAP"},{key:"Mukhya Mantri Vidyut Sambandh Nishchay Yojna",value:"Mukhya_Mantri_Vidyut_Sambandh_Nishchay_Yojna"}		]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        
        this.Comparison_sort = [{key: "None", value: "None"}]
  
      } else {
        this.Comparison_sort = this.Comparison.sort(f.compare);
      }
      }

      toYear(year){
        if(year == "All"){
          
    this.views = ViewsNotMap
        }else{
          this.views  =  ViewsNotDistrict
        }
      }
      toView(view){
    if (view == "line") {
      this.years = ["All"];
    } else {
      this.years = ["All","2013-14","2014-15","2015-16","2016-17","2017-18"];
    }
      }


      onSubmit(user) {
        var controller = "institutional_structure_of_power_sectors"
        if (user.view !== "Map View") {
          this.visbile_chart= true;
          this.visbile= false;
          this.visbile_table= false;
    
          // this.AgricultureService.pie();
          if (user.districts == "All") {
            this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
          } 
         else if(user.Comparison) { 
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
          else {
            this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
          }
        } 
        else if(user.view == "Trend Line") {
          this.visbile_chart= true;
          this.visbile= false;
          this.visbile_table= false;
    
          if (user.districts == "All") {
            this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
            
          } 
          else if(user.Comparison == "Bihar vs District") { 
            this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
            }
          else {
            this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
          }
          
        } 
        else if(user.view == "Table") {
          this.visbile_chart= false;
          this.visbile_table= true;
          this.visbile= false;
          this.spinner.show();
    
          this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
        }
        else if(user.view == "Map View") {
         const that = this;
          // this.AgricultureService.barchart();
          this.visbile_chart= false;
          this.visbile= true;
          this.visbile_table= false;
          this.title =user.rain_fall_type;
          var controller = "institutional_structure_of_power_sectors"
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
