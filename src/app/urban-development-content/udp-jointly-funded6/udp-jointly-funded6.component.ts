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
  selector: 'app-udp-jointly-funded6',
  templateUrl: './udp-jointly-funded6.component.html',
  styleUrls: ['./udp-jointly-funded6.component.css']
})
export class UDPJointlyFunded6Component implements OnInit {
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

  years = ["All","2014-15","2015-16","2016-17","2017-18"];
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"}, {key:"DAY NULM",value:"DAY_NULM"},	{key:"State Plan Head Nagrik Suvidha",value:"State_Plan_Head_Nagrik_Suvidha"},	{key:"Total",value:"Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"},{key:"DAY NULM",value:"DAY_NULM"},	{key:"State Plan Head Nagrik Suvidha",value:"State_Plan_Head_Nagrik_Suvidha"},	{key:"Total",value:"Total"}]
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
      this.years = ["All","2014-15","2015-16","2016-17","2017-18"];
    }
      }


      onSubmit(user) {
        var controller = "udp_jointly_funded6s"
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
          var controller = "udp_jointly_funded6s"
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











