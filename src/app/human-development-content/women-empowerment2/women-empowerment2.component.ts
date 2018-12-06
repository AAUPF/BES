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
  selector: 'app-women-empowerment2',
  templateUrl: './women-empowerment2.component.html',
  styleUrls: ['./women-empowerment2.component.css']
})
export class WomenEmpowerment2Component implements OnInit {

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
  Districts = ["All","Social Welfare",
  "SC and ST welfare ",
  "Public Health Engineering ",
  "Minority Welfare",
  "Education Department",
  "Health ",
  "Rural Development",
  "Urban Development and Housing",
  "Panchayati  Raj ",
  "Labor Resource",
  "BC and EBC Welfare",
  "Revenue and Land Reforms ",
  "Art, Culture and Youth",
  "Industry Department",
  "Agriculture Department",
  "Information & Technology ",
  "Building Construction ",
  "Home Department",
  "Tourism Department",
  "Total",]
  years = ["All","2016-17","2017-18 (BE)"];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"Total Budget",value:"Total_Budget"},
  {key:"Under Category I",value:"Under_Category_I"},
  {key:"Under Category II",value:"Under_Category_II"},
  {key:"Total",value:"Total"},]
  Comparison  = ["None","Social Welfare",
  "SC and ST welfare ",
  "Public Health Engineering ",
  "Minority Welfare",
  "Education Department",
  "Health ",
  "Rural Development",
  "Urban Development and Housing",
  "Panchayati  Raj ",
  "Labor Resource",
  "BC and EBC Welfare",
  "Revenue and Land Reforms ",
  "Art, Culture and Youth",
  "Industry Department",
  "Agriculture Department",
  "Information & Technology ",
  "Building Construction ",
  "Home Department",
  "Tourism Department",
  "Total",]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2016-17","2017-18 (BE)"];
    } 
    else {
      if (this.data.view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2016-17","2017-18 (BE)"];
      }
    
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  if (this.data.rain_fall_type == "All") {
    this.years = ["2016-17","2017-18 (BE)"];
  } else {
    this.years = ["All","2016-17","2017-18 (BE)"];
  }
  
}
  }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Social Welfare",
        "SC and ST welfare ",
        "Public Health Engineering ",
        "Minority Welfare",
        "Education Department",
        "Health ",
        "Rural Development",
        "Urban Development and Housing",
        "Panchayati  Raj ",
        "Labor Resource",
        "BC and EBC Welfare",
        "Revenue and Land Reforms ",
        "Art, Culture and Youth",
        "Industry Department",
        "Agriculture Department",
        "Information & Technology ",
        "Building Construction ",
        "Home Department",
        "Tourism Department",
        "Total",]

        
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Total Budget",value:"Total_Budget"},
        {key:"Under Category I",value:"Under_Category_I"},
        {key:"Under Category II",value:"Under_Category_II"},
        {key:"Total",value:"Total"},]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Total Budget",value:"Total_Budget"},
        {key:"Under Category I",value:"Under_Category_I"},
        {key:"Under Category II",value:"Under_Category_II"},
        {key:"Total",value:"Total"},]
      }
    }

  onSubmit(user) {
    var controller = "women_empowerment2s"

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
      var controller = "women_empowerment2s"
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
