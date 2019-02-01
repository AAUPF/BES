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
  selector: 'app-ict5',
  templateUrl: './ict5.component.html',
  styleUrls: ['./ict5.component.css']
})
export class ICT5Component implements OnInit {

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
    "Total",
  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = ['Number of Accounts', 'Outstanding Balance'];
  views = ViewsNotDistrict
  rain_fall_type = [
  {key: "All", value: "All"},
  {key:"Deposits",value:"Deposits"},
  {key:"Investment",value:"Investment"},
  {key:"MIS",value:"MIS"},
  {key:"Sukanya Samridhi Account",value:"Sukanya_Samridhi_Account"},
  {key:"MG NREGA",value:"MG_NREGA"},
  {key:"Total",value:"Total"},
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
    toSet(data) {
      
if (data == "Number of Accounts") {
  this.rain_fall_type = [
    {key: "All", value: "All"},
    {key:"Deposits",value:"Deposits"},
    {key:"Investment",value:"Investment"},
    {key:"MIS",value:"MIS"},
    {key:"Sukanya Samridhi Account",value:"Sukanya_Samridhi_Account"},
    {key:"MG NREGA",value:"MG_NREGA"},
    {key:"Total",value:"Total"},
  ]
  this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
} else {
  this.rain_fall_type = [
    {key: "All", value: "All"},
    {key:"Deposits",value:"Deposits"},
    {key:"Investment",value:"Investment"},
    {key:"MIS",value:"MIS"},
    {key:"Sukanya Samridhi Account",value:"Sukanya_Samridhi_Account"},
    {key:"Total",value:"Total"},
  ]
  this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  
}
    }



 
    onSubmit(user) {
      var controller = "ict5s"

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
        var controller = "ict4s"
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
