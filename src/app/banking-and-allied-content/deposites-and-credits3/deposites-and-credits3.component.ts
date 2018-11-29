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
  selector: 'app-deposites-and-credits3',
  templateUrl: './deposites-and-credits3.component.html',
  styleUrls: ['./deposites-and-credits3.component.css']
})
export class DepositesAndCredits3Component implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  
  
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  years = [
  "Commercial Bank",
  "RRB",
  "Cooperative Bank",
  "All Banks"
      ];

  htmlContent:string;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = [
    "All",
    "Rural ",
    "Semi-Urban",
    "Urban",
    "Total ",
]

  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},
  {key:"Deposits",value:"Deposits"},
  {key:"Credits",value:"Credits"},
  {key:"CD Ratio",value:"CD_Ratio"},
  {key:"Investment",value:"Investment"},
  {key:"ICD Ratio",value:"ICD_Ratio"},
]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None", "Rural ",
    "Semi-Urban",
    "Urban",
    "Total ",]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
        } else {
          this.Comparison = ["None",
          "Rural ",
          "Semi-Urban",
          "Urban",
          "Total ",]
        }
    }
    
  onSubmit(user) {
    var controller = "deposites_and_credits3s"

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
      
      var controller = "deposites_and_credits3s"
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
