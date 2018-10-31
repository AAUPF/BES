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
  selector: 'app-bridge-sector1',
  templateUrl: './bridge-sector1.component.html',
  styleUrls: ['./bridge-sector1.component.css']
})
export class BridgeSector1Component implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = [
    "All",
    "Patna",
    "Bhagalpur",
    "Darbhanga",
    "Kosi",
    "Magadh",
    "Munger",
    "Purnea",
    "Saran",
    "Tirhut",
    // "Total"
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},
                    {key:"Number of Projects",value:"Number_of_Projects"},
                    {key:"Cost",value:"Cost"},
                  ]
                    rain_fall_type_sort = this.rain_fall_type.sort(f.compare);

    Comparison = ["None",
    "Patna",
    "Bhagalpur",
    "Darbhanga",
    "Kosi",
    "Magadh",
    "Munger",
    "Purnea",
    "Saran",
    "Tirhut",
  ]
    data: any = {}; 

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
        if (d == "All") {
          
          this.data.Comparison  = "None"
          this.Comparison = ["None"]
    
        } else {
          this.Comparison = ["None",
          "Patna",
    "Bhagalpur",
    "Darbhanga",
    "Kosi",
    "Magadh",
    "Munger",
    "Purnea",
    "Saran",
    "Tirhut",
        ]
        }
    }
    


 
    onSubmit(user) {
      var controller = "bridge_sector1s"

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
        var controller = "bridge_sector1s"
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
