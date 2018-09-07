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
  selector: 'app-deficit-management3',
  templateUrl: './deficit-management3.component.html',
  styleUrls: ['./deficit-management3.component.css']
})
export class DeficitManagement3Component implements OnInit {
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
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","Revenue Deficit","Capital Outlay","Net Lending","GFD","GSDP","GFD: GSDP ratio (percentage)"]
  years = ["All",2012,2013,2014,2015,2016,2017];
  views = ViewsNotMap
  rain_fall_type = [{key:"Amount",value:"Amount"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Revenue Deficit","Capital Outlay","Net Lending","GFD","GSDP","GFD: GSDP ratio (percentage)"]
    
    data: any = {};    
    

    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All",2012,2013,2014,2015,2016,2017];
      }
        }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Revenue Deficit","Capital Outlay","Net Lending","GFD","GSDP","GFD: GSDP ratio (percentage)"]

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
    var controller = "deficit_management3s"
    user.rain_fall_type = "Amount"
    if (user.view !== "Map View") {

      console.log("errror");
      
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
      var controller = "deficit_management3s"
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























