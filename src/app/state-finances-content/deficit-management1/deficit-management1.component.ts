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
  selector: 'app-deficit-management1',
  templateUrl: './deficit-management1.component.html',
  styleUrls: ['./deficit-management1.component.css']
})
export class DeficitManagement1Component implements OnInit {
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
  Districts = ["All","Bihar","Jharkhand","West Bengal","Odisha","Uttar Pradesh","Madhya Pradesh ","Rajasthan","Maharashtra","Gujarat","Punjab","Haryana","Karnataka","Andhra Pradesh","Kerala","Tamil Nadu","Himachal Pradesh","Chhatisgarh"]
  years = ["All","2015","2016_RE","2017_BE"];
  views = ViewsNotMap
  rain_fall_type = [{key:"All",value:"All"},{key:"Revenue Deficit Surplus",value:"Revenue_Deficit_Surplus"},{key:"Conventional Deficit Surplus",value:"Conventional_Deficit_Surplus"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs State"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.years = ["2015","2016_RE","2017_BE"];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All","2015","2016_RE","2017_BE"];
        }
      
      }
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    if (this.data.rain_fall_type == "All") {
      this.years = ["2015","2016_RE","2017_BE"];
    } else {
      this.years = ["All","2015","2016_RE","2017_BE"];
    }
    
  }
    }
      toSet(select){
        if (select == "All") {
          this.Comparison  = ["None"]
          
        } else {
          this.Comparison  = ["None","Bihar vs State"]
  
        }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = [{key:"Revenue Deficit Surplus",value:"Revenue_Deficit_Surplus"},{key:"Conventional Deficit Surplus",value:"Conventional_Deficit_Surplus"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
          this.views  = ViewsNotDistrict
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Revenue Deficit Surplus",value:"Revenue_Deficit_Surplus"},{key:"Conventional Deficit Surplus",value:"Conventional_Deficit_Surplus"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
      }
    
  onSubmit(user) {
    var controller = "deficit_management1s"

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
      
      var controller = "deficit_management1s"
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





















