import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-udp-state-plan1',
  templateUrl: './udp-state-plan1.component.html',
  styleUrls: ['./udp-state-plan1.component.css']
})
export class UDPStatePlan1Component implements OnInit {

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
  Districts = [
    "All",
    "Total No. of households",
    "No. of HHs with piped water supply",
    "No. of HHs to be covered with piped water supply",
    "Strategy",
    "Strategy",
    "Strategy",
    "Strategy",
    "No. of wards in which tenders floated ",
    "No. of wards in which work started",
    "No. of HH connections provided",

]
  //  years = [2016, 2017];
  // views =[{key: "Table", value: "Table"}];
  rain_fall_type = [{key:"No of households",value:"No_of_households"}]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = ["None","Bihar vs District"]
    data: any = {};    

  onSubmit(user) {
    user.view = "Table"
    var controller = "udp_state_plan1s"

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
      
      var controller = "poverty2s"
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
