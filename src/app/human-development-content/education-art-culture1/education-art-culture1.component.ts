import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import{Functions} from '../../data/func';
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-education-art-culture1',
  templateUrl: './education-art-culture1.component.html',
  styleUrls: ['./education-art-culture1.component.css']
})
export class EducationArtCulture1Component implements OnInit {

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
  Districts = ["Literacy Rates","Decadal Increase"];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = ["All",
    "1961",
    "1971",
    "1981",
    "1991",
    "2001",
    "2011",
        ];
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"}, {key:"Male",value:"Male"},
  {key:"Female",value:"Female"},
  {key:"Persons",value:"Persons"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key:"India",value:"India"},
  {key:"Bihar",value:"Bihar"},
  ]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
      if (d == "Literacy Rates") {
        this.data.years =  "All"
        this.years =["All",
        "1961",
        "1971",
        "1981",
        "1991",
        "2001",
        "2011",
            ];
      } else {
        this.data.years = "All"
    this.years =["All",
          "1961-71",
          "1971-81",
          "1981-91",
          "1991-01",
          "2001-11",
            ];
      }
      }

    //   toYear(year){
    //     if(year == "All"){
    // this.views = ViewsNotMap
    //     }else{
    //       this.views  = ViewsNotMap
    //     }
    //   }
    //   toView(view){
    // if (view == "line") {
    //   this.years = ["All"];
    // } else {
    //   this.years = ["All",
    //   "1961",
    //   "1971",
    //   "1981",
    //   "1991",
    //   "2001",
    //   "2011",
    // ];
    // }
    //   }


      onSubmit(user) {
        var controller = "education_art_culture1s"
        if (user.view !== "Map View") {
          this.visbile_chart= true;
          this.visbile= false;
          this.visbile_table= false;
    
          // this.AgricultureService.pie();
          if (user.districts == "All") {
            this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
          } 
         else if(user.Comparison) { 
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
          else {
            this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
          }
        } 
        else if(user.view == "Trend Line") {
          this.visbile_chart= true;
          this.visbile= false;
          this.visbile_table= false;
    
          if (user.districts == "All") {
            this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
            
          } 
          else if(user.Comparison == "Bihar vs District") { 
            this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
            }
          else {
            this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
          }
          
        } 
        else if(user.view == "Table") {
          this.visbile_chart= false;
          this.visbile_table= true;
          this.visbile= false;
          this.spinner.show();
    
          this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
        }
        else if(user.view == "Map View") {
         const that = this;
          // this.AgricultureService.barchart();
          this.visbile_chart= false;
          this.visbile= true;
          this.visbile_table= false;
          this.title =user.rain_fall_type;
          var controller = "education_art_culture1s"
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
