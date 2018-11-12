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
  selector: 'app-projection-of-power-requirement3',
  templateUrl: './projection-of-power-requirement3.component.html',
  styleUrls: ['./projection-of-power-requirement3.component.css']
})
export class ProjectionOfPowerRequirement3Component implements OnInit {

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
  Districts = ["State Sector","Central Generating Stations Share"]
  years = [
      "All",
    "Mar-17",
    "2017-18",
    "2018-19",
  ];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},

    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"State Thermal",value:"State Thermal"},
    {key:"State Small Hydro",value:"State Small Hydro"},
  ]

    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        
      } else {
        this.data.Comparison = "None"
        this.Comparison = [
          {key:"None",value:"None"},

          
        ]
        
      }
    
    }
    toView(view){
  // if (view == "line") {
  //   this.years = ["All"];
  // } else {
  //   if (this.data.rain_fall_type == "All") {
  //     this.years = ["2015","2016_RE","2017_RE"];
  //   } else {
  //     this.years = ["All","2015","2016_RE","2017_RE"];
  //   }
    
  // }
    }
      toSet(select){
        if (select == "State Sector") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        {key:"State Thermal",value:"State Thermal"},
        {key:"State Small Hydro",value:"State Small Hydro"},
       
      
  ]
           
        }  else if (select == "Central Generating Stations Share") {


          this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"CGS Thermal",value:"CGS Thermal"},
            {key:"CGS Hydro",value:"CGS Hydro"},
            {key:"IPPs Projects (Case1)",value:"IPPs Projects (Case1)"},
            {key:"JV / Partnership (Thermal)",value:"JV / Partnership (Thermal)"},
            {key:"NCE / RNES",value:"NCE / RNES"},
            {key:"Total",value:"Total"},

          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"CGS Thermal",value:"CGS Thermal"},
            {key:"CGS Hydro",value:"CGS Hydro"},
            {key:"IPPs Projects (Case1)",value:"IPPs Projects (Case1)"},
            {key:"JV / Partnership (Thermal)",value:"JV / Partnership (Thermal)"},
            {key:"NCE / RNES",value:"NCE / RNES"},
            {key:"Total",value:"Total"},
           ]
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
    var controller = "projection_of_power_requirement3s"

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
      var controller = "projection_of_power_requirement3s"
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
