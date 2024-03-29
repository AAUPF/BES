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
  selector: 'app-bihar-start-up-policy',
  templateUrl: './bihar-start-up-policy.component.html',
  styleUrls: ['./bihar-start-up-policy.component.css']
})
export class BiharStartUpPolicyComponent implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { }
  butDisabled: boolean = false;
  public loading = false;
  htmlContent:string;
  Districts = [
    "All",
    "Indian Institute of Technology (IIT), Patna",
    "National Institute of Technology (NIT), Patna",
    "Bihar Industries Association (BIA)",
    "Bihar Entrepreneurs Association (BEA)",
    "Chandragupta Institute of Management, Patna",
    "National Institute of Fashion Technology, Patna",
    "Birla Institute of Technology (BIT), Patna",
    "Bihar Agricultural University (BAU), Sabour",
    "Development Management Institute (DMI)",
    "Central University",
    "Tool Room and Training Centre (TRTC), Patna",
    "Rajendra Agricultural University (RAU), Pusa",
    "Upendra Maharathi Shilp Anusandhan Sansthan (UMSAS)",
    "J.D. Women’s College, Patna",
    "Patna Women’s College",
    "Magadh Mahila College",
    "Software Technology Parks of India (STPI), Patna",
    "Sanjay Gandhi Institute of Dairy Technology (SGIDT)",
    "Central Institute of Plastic Engineering and Technology, Hajipur",
    "Total",
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  // views = ["Graph", "Trend Line","Map View","Table"];
  views = ViewsNotMap
  //views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Map View", value: "Map View"},{key: "Table", value: "Table"}];
  rain_fall_type = [
  {key:"Number of Startups",value:"Number_of_Startups"},
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None",
    "Indian Institute of Technology (IIT), Patna",
    "National Institute of Technology (NIT), Patna",
    "Bihar Industries Association (BIA)",
    "Bihar Entrepreneurs Association (BEA)",
    "Chandragupta Institute of Management, Patna",
    "National Institute of Fashion Technology, Patna",
    "Birla Institute of Technology (BIT), Patna",
    "Bihar Agricultural University (BAU), Sabour",
    "Development Management Institute (DMI)",
    "Central University",
    "Tool Room and Training Centre (TRTC), Patna",
    "Rajendra Agricultural University (RAU), Pusa",
    "Upendra Maharathi Shilp Anusandhan Sansthan (UMSAS)",
    "J.D. Women’s College, Patna",
    "Patna Women’s College",
    "Magadh Mahila College",
    "Software Technology Parks of India (STPI), Patna",
    "Sanjay Gandhi Institute of Dairy Technology (SGIDT)",
    "Central Institute of Plastic Engineering and Technology, Hajipur",
    "Total",
  ]
    data: any = {};

    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    toNumber(d) {
        if (d == "All") {
          this.data == {years: null, views: "",Comparison: ""};
          this.data.Comparison  = "None"
          this.butDisabled = true;

        } else {
          this.butDisabled = false;
        }
    }
    toHide(view){
      if(view == "Map View"){

      }else{

      }
    }



    onSubmit(user) {
      var controller = "bihar_start_up_policies"

      console.log(user.view);


      if (user.view !== "Map View") {

        console.log("errror");

        this.visbile_chart= true;
        this.visbile= false;
        this.visbile_table= false;
        // this.AgricultureService.pie();
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
        // this.AgricultureService.barchart();
        this.visbile_chart= false;
        this.visbile= true;
        this.visbile_table= false;
        // this.SvgService.test("echamparan");
        var controller = "annual_survey6s"
        this.spinner.show();
        setTimeout(function() {
          //  that.SvgService.test("echamparan");
              that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
              var u = "wchamparan";
              that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
        }, 500);
        // this.SvgService.svg();

      }

    }

  ngOnInit() {
  }

}
