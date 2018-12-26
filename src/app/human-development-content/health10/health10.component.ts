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
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-health10',
  templateUrl: './health10.component.html',
  styleUrls: ['./health10.component.css']
})
export class Health10Component implements OnInit {
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
  Districts = ["All","TT2 plus Booster(PW)","BCG","OPV0","OPV1","OPV2","OPV3","DPT1","DPT2","DPT3","PENTA-1","PENTA-2","PENTA-3","Measles"]
  years = ["All",2015,2016,2017];
  views = ViewsNotMap;
  rain_fall_type = ["All","Target","Achievement"]
  Comparison = ["None","TT2 plus Booster(PW)","BCG","OPV0","OPV1","OPV2","OPV3","DPT1","DPT2","DPT3","PENTA-1","PENTA-2","PENTA-3","Measles"]
    data: any = {};
    

    toNumber(d) {
      if (d == "All") {
        this.years = [2015,2016,2017];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All",2015,2016,2017];
        }
      
      }
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    if (this.data.rain_fall_type == "All") {
      this.years = [2015,2016,2017];
    } else {
      this.years = ["All",2015,2016,2017];
    }
    
  }
    }
      toSet(select){
        if (select == "All") {
          this.data.Comparison  = "None"
          this.Comparison  = ["None"]
          
        } else {
          this.Comparison  = ["None","TT2 plus Booster(PW)","BCG","OPV0","OPV1","OPV2","OPV3","DPT1","DPT2","DPT3","PENTA-1","PENTA-2","PENTA-3","Measles"]
  
          
        }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = ["Target","Achievement"]
        }else{
          this.views  = ViewsNotDistrict
          this.rain_fall_type = ["All","Target","Achievement"]
        }
      }


    
  onSubmit(user) {
    var controller = "health10s"

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
      var controller = "health10s"
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

















