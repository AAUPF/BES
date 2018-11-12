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
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-ict2',
  templateUrl: './ict2.component.html',
  styleUrls: ['./ict2.component.css']
})
export class ICT2Component implements OnInit {

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
  Districts = [
      "All",
      "Andhra Pradesh",
    "Bihar",
    "Gujarat",
    "Haryana",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
    "All-India",
]
  years = ["2001","2005", "2010","2015","2016","2017"];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"Rural",value:"Rural"},{key:"Urban",value:"Urban"}]
  Comparison  = ["None",     
  "Andhra Pradesh",
  "Bihar",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal",
  "All-India",]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2001","2005", "2010","2015","2016","2017"];
    } 
    else {
      // if (this.data.view == "line") {
      //   this.years = ["All"];
      // } else {
      //   this.years = ["All","2001","2005", "2010","2015","2016","2017"];
      // }
    
    }
  }
  toView(view){
// if (view == "line") {
//   this.years = ["All"];
// } else {
//   if (this.data.rain_fall_type == "All") {
//     this.years = ["All","2001","2005", "2010","2015","2016","2017"];
//   } else {
//     this.years =  ["All","2001","2005", "2010","2015","2016","2017"];;
//   }
  
// }
  }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None",
        "Andhra Pradesh",
        "Bihar",
        "Gujarat",
        "Haryana",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Tamil Nadu",
        "Uttar Pradesh",
        "West Bengal",
        "All-India",]

        
      }
    }
    toYear(year){
      if(year == "2016"){
        this.views = ViewsNotDistrict
        this.rain_fall_type = [{key:"Rural",value:"Rural"},{key:"Urban",value:"Urban"},{key:"All",value:"All"}]
      }
      else if(year == "2017") { 

        this.views = ViewsNotDistrict
        this.rain_fall_type = [{key:"Rural",value:"Rural"},{key:"Urban",value:"Urban"},{key:"All",value:"All"}]

      }
      else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"}]
      }
    }

  onSubmit(user) {
    var controller = "ict2s"

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
      var controller = "roads4s"
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
