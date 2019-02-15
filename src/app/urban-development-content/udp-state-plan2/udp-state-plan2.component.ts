import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Districtswithoutbihar } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-udp-state-plan2',
  templateUrl: './udp-state-plan2.component.html',
  styleUrls: ['./udp-state-plan2.component.css']
})
export class UDPStatePlan2Component implements OnInit {
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
  Districts = Districtswithoutbihar
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  views = ViewsNotTrend
  rain_fall_type = [{key: "All", value: "All"},{key:"Total Number of Urban Ward",value:"Total_Number_of_Urban_Ward"},	{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Number of Households Having Piped Water Supply",value:"Number_of_Households_Having_Piped_Water_Supply"},	{key:"Number of Households Having Access to Tap Water 2016-17",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_17"},{key:"Number of Households Having Access to Tap Water 2017-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2017_18"},{key:"Number of Households Having Access to Tap Water 2016-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_18"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs District"]
    data: any = {};    
    toNumber(d) {
        if (d == "All") {
          this.data.Comparison = "None"
          this.Comparison = ["None"]

        } else {
          this.Comparison = ["None","Bihar vs District"]
        }
    }
    toHide(view){
      if(view=="Map View"){
        this.rain_fall_type = [{key:"Total Number of Urban Ward",value:"Total_Number_of_Urban_Ward"},	{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Number of Households Having Piped Water Supply",value:"Number_of_Households_Having_Piped_Water_Supply"},	{key:"Number of Households Having Access to Tap Water 2016-17",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_17"},{key:"Number of Households Having Access to Tap Water 2017-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2017_18"},{key:"Number of Households Having Access to Tap Water 2016-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_18"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }else{
        this.rain_fall_type = [{key: "All", value: "All"},{key:"Total Number of Urban Ward",value:"Total_Number_of_Urban_Ward"},	{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Number of Households Having Piped Water Supply",value:"Number_of_Households_Having_Piped_Water_Supply"},	{key:"Number of Households Having Access to Tap Water 2016-17",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_17"},{key:"Number of Households Having Access to Tap Water 2017-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2017_18"},{key:"Number of Households Having Access to Tap Water 2016-18",value:"Number_of_Households_Having_Access_to_Tap_Water_2016_18"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }
    }
    toSet(data){
      if (data=="All") {
        this.views = ViewsNotDistrict
      } else {
        this.views = ViewsNotTrend
      }
    }
  onSubmit(user) {
    var controller = "udp_state_plan2s"

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
      var controller = "udp_state_plan2s"
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












