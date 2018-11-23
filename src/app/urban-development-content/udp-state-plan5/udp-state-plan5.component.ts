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
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-udp-state-plan5',
  templateUrl: './udp-state-plan5.component.html',
  styleUrls: ['./udp-state-plan5.component.css']
})
export class UDPStatePlan5Component implements OnInit {
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
  rain_fall_type = [{key: "All", value: "All"},{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Total Number of Urban Wards",value:"Total_Number_of_Urban_Wards"},	{key:"Number of Households to be covered",value:"Number_of_Households_to_be_covered"},	{key:"Number of Household covered",value:"Number_of_Household_covered"}]
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
        this.rain_fall_type = [{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Total Number of Urban Wards",value:"Total_Number_of_Urban_Wards"},	{key:"Number of Households to be covered",value:"Number_of_Households_to_be_covered"},	{key:"Number of Household covered",value:"Number_of_Household_covered"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }else{
        this.rain_fall_type = [{key: "All", value: "All"},{key:"Total Number of Urban Households",value:"Total_Number_of_Urban_Households"},	{key:"Total Number of Urban Wards",value:"Total_Number_of_Urban_Wards"},	{key:"Number of Households to be covered",value:"Number_of_Households_to_be_covered"},	{key:"Number of Household covered",value:"Number_of_Household_covered"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }
    }
  onSubmit(user) {
    var controller = "udp_state_plan5s"

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
      var controller = "udp_state_plan5s"
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












