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
  selector: 'app-social-security-for-old-and-disabled',
  templateUrl: './social-security-for-old-and-disabled.component.html',
  styleUrls: ['./social-security-for-old-and-disabled.component.css']
})
export class SocialSecurityForOldAndDisabledComponent implements OnInit {

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
    "All","Scheme",
    "NSAP (State Share)",
    "Laxmibai Social Security Pension Scheme",
    "Bihar Disability Pension Scheme",
    "State Social Security Pension Scheme",
    "Kabir Anthyesthi Anudan Yojana",
    "Chief Minister Family Benefit Scheme",
    "Bihar Shatabdi Leper Welfare Scheme",
    "Chief Minister Disabled Strengthening Scheme (SAMBAL)",
    "Mukhyamantri Bhikhchavriti Nivanran Yojana",
    "Old Age Home",
    "Old Age Home Construction",
    "Bihar Aids Pirit Kalyan Yojna",
    "BSIPS",
    "Chief Minister Disabled Marriage Grant Scheme",
    "Total",
]
  years = ["All","2015-16","2016-17"];
  views = ViewsNotMap;
  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Budget Outlay",value:"Budget_Outlay"},
  {key:"Expenditure",value:"Expenditure"},
  {key:"Physical Achievement",value:"Physical_Achievement"},]
  Comparison  = [
      "None",
      "Scheme",
      "NSAP (State Share)",
      "Laxmibai Social Security Pension Scheme",
      "Bihar Disability Pension Scheme",
      "State Social Security Pension Scheme",
      "Kabir Anthyesthi Anudan Yojana",
      "Chief Minister Family Benefit Scheme",
      "Bihar Shatabdi Leper Welfare Scheme",
      "Chief Minister Disabled Strengthening Scheme (SAMBAL)",
      "Mukhyamantri Bhikhchavriti Nivanran Yojana",
      "Old Age Home",
      "Old Age Home Construction",
      "Bihar Aids Pirit Kalyan Yojna",
      "BSIPS",
      "Chief Minister Disabled Marriage Grant Scheme",
      "Total",
]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2015-16","2016-17"];
    } 
    else {
      if (this.data.view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2015-16","2016-17"];
      }
    
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  if (this.data.rain_fall_type == "All") {
    this.years = ["2015-16","2016-17"];
  } else {
    this.years = ["All","2015-16","2016-17"];
  }
  
}
  }
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = [
          "None",
          "Scheme",
          "NSAP (State Share)",
          "Laxmibai Social Security Pension Scheme",
          "Bihar Disability Pension Scheme",
          "State Social Security Pension Scheme",
          "Kabir Anthyesthi Anudan Yojana",
          "Chief Minister Family Benefit Scheme",
          "Bihar Shatabdi Leper Welfare Scheme",
          "Chief Minister Disabled Strengthening Scheme (SAMBAL)",
          "Mukhyamantri Bhikhchavriti Nivanran Yojana",
          "Old Age Home",
          "Old Age Home Construction",
          "Bihar Aids Pirit Kalyan Yojna",
          "BSIPS",
          "Chief Minister Disabled Marriage Grant Scheme",
          "Total",
      ]

        
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Budget Outlay",value:"Budget_Outlay"},
        {key:"Expenditure",value:"Expenditure"},
        {key:"Physical Achievement",value:"Physical_Achievement"},]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Budget Outlay",value:"Budget_Outlay"},
        {key:"Expenditure",value:"Expenditure"},
        {key:"Physical Achievement",value:"Physical_Achievement"},]
      }
    }

  onSubmit(user) {
    var controller = "social_security_for_old_and_disableds"

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
      var controller = "social_security_for_old_and_disableds"
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
