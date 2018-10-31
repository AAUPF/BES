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
  selector: 'app-railways',
  templateUrl: './railways.component.html',
  styleUrls: ['./railways.component.css']
})
export class RailwaysComponent implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = [
"All",
"Andhra Pradesh",
"Bihar",
"Chhattisgarh",
"Gujarat",
"Haryana",
"Jharkhand",
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
"India",
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  views = ViewsNotDistrict
  rain_fall_type = [
  {key: "All", value: "All"},
  {key:"Total Rail Route",value:"Total_Rail_Route"},
  {key:"Total Rail Track",value:"Total_Rail_Track"},
  {key:"Total Rail Route Per 1000 sq km",value:"Total_Rail_Route_Per_1000_sq_km"},
  {key:"Total Rail Route Per lakh Population",value:"Total_Rail_Route_Per_lakh_Population"},
  {key:"Total Rail Track Per 1000 sq km",value:"Total_Rail_Track_Per_1000_sq_km"},
  {key:"Total Rail Track Per lakh Population",value:"Total_Rail_Track_Per_lakh_Population"}
]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar vs State"]
    data: any = {}; 

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
        if (d == "All") {
          
          this.data.Comparison  = "None"
          this.Comparison = ["None"];
    
        } else {
          this.Comparison = ["None","Bihar vs State"]
        }
    }



 
    onSubmit(user) {
      var controller = "railways"

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
        var controller = "railways"
        this.spinner.show();
        setTimeout(function() {
          
              that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
              var u = "wchamparan";
              that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
        }, 500);
        
        
      }

    }   

  ngOnInit() {
  }
}

