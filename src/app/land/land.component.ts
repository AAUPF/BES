import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { Land } from '../services/land.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  constructor(private Land: Land,private SvgService: SvgService,private spinner: NgxSpinnerService) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  views = ["Graph", "Trend Line","Map View","Table"];
  rain_fall_type = ["All","Geographical_Area","Forest","Barren_and_Unculturable_land","Non_Agriculture_Land_Area", "Non_Agriculture_Perennial"]
    Comparison = ["None","Bihar vs District"]
    data: any = {}; 
    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: ""};
        this.data.Comparison  = undefined
        this.butDisabled = true;
  
      } else {
        this.butDisabled = false;
      }
      
      }
    onSubmit(user) {
      if (user.view == "Graph") {
        this.visbile_chart= true;
        this.visbile= false;
        this.visbile_table= false;
        // this.Land.pie();
        if (user.districts == "All") {
          // this.Land.bar_chart_all(user.districts,user.years,user.rain_fall_type);
          this.Land.barchart1(user.districts,user.years,user.rain_fall_type,user.Comparison);
        } 
       else if(user.Comparison == "Bihar vs District") { 
        this.Land.barchart1(user.districts,user.years,user.rain_fall_type,user.Comparison);
        console.log(user.Comparison);
      }
        else {
          this.Land.barchart1(user.districts,user.years,user.rain_fall_type,user.Comparison);
          // this.Land.barchart();
        }
      } 
      else if(user.view == "Trend Line") {
        this.visbile_chart= true;
        this.visbile= false;
        this.visbile_table= false;
        if (user.districts == "All") {
          this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
        } 
        else if(user.Comparison == "Bihar vs District") { 
          this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
          }
        else {
          this.Land.trend_line(user.districts,user.years,user.rain_fall_type,user.Comparison);
        }
        
      } 
      else if(user.view == "Table") {
        this.visbile_chart= false;
        this.visbile_table= true;
        this.visbile= false;
        this.spinner.show();
        this.Land.table(user.years,user.districts,user.rain_fall_type,user.Comparison);
      }
      else if(user.view == "Map View") {
       const that = this;
        // this.Land.barchart();
        this.visbile_chart= false;
        this.visbile= true;
        this.visbile_table= false;
        // this.title =user.rain_fall_type;
        // this.SvgService.test("echamparan");
        this.spinner.show();
        setTimeout(function() {
          //  that.SvgService.test("echamparan");
              that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts);
              var u = "wchamparan";
              that.SvgService.test(u,user.view,user.rain_fall_type,user.years,user.districts,user.Comparison); 
        }, 500);
        // this.SvgService.svg();
      }
    } 
  ngOnInit() {
  }

}
