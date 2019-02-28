import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Comparedistrictswithoutbihar } from '../../data/districts';
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
  selector: 'app-deposites-and-credits5',
  templateUrl: './deposites-and-credits5.component.html',
  styleUrls: ['./deposites-and-credits5.component.css']
})
export class DepositesAndCredits5Component implements OnInit {

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
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = ["All","2016-17 ","2017-18"];
  views = ViewsNotMap
  rain_fall_type = [{key:"Per Capita GDP",value:"Per_Capita_GDP"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = Comparedistrictswithoutbihar
    data: any = {};    
    // toNumber(d) {
    // if (d == "All") {
    //   this.Comparison = ["None"]
    // } else {
    //   this.Comparison = ["None","Bihar vs District"]
    // }
    
    // }
    // toHide(view){
    //   if(view == "Map View"){
    //     this.rain_fall_type = [{key:"Per Capita GDP",value:"Per_Capita_GDP"}]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }else{
    //     this.rain_fall_type = [{key:"Per Capita GDP",value:"Per_Capita_GDP"}]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }
    // }
    // toYear(year){
    //   if(year == "All"){
    //     this.views = 
    //   }else{
    //     this.views = 
    //   }
    // }




  //   toNumber(d) {
  //     if (d == "All") {
  //       this.years = [2007,2008,2009,2010,2011];
  //     } 
  //     else {
  //       if (this.data.view == "line") {
  //         this.years = ["All"];
  //       }
  //       else if(this.data.view == "Map View"){
  //         this.years = [2007,2008,2009,2010,2011];
  //       } 
  //       else {
  //         this.years = ["All",2007,2008,2009,2010,2011];
  //       }
  //     }
  // }
  toView(view){
      if (view == "line") {
        this.years = ["All"];
      }
      else if(view == "Map View"){
        this.years = ["2016-17 ","2017-18"];
        // this.rain_fall_type = [{key:"Target",value:"Target"},{key:"Achievement",value:"Achievement"}]
      }
      else {
        this.years = ["All","2016-17 ","2017-18"];
      }
  }
  toSet(select){
      if (select == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
      } else {
        this.Comparison = Comparedistrictswithoutbihar
      }
  }
  toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        // this.rain_fall_type = [{key:"Target",value:"Target"},{key:"Achievement",value:"Achievement"}]
      }else{
        // if (this.data.view == "Map View") {
        //   this.rain_fall_type = [{key:"Target",value:"Target"},{key:"Achievement",value:"Achievement"}]

        // } else {
        //   this.views  = ViewsNotTrend
        // this.rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},{key:"Achievement",value:"Achievement"}]
        // }
        this.views  = ViewsNotTrend
      }
  }
    
  onSubmit(user) {
    user.rain_fall_type = "CD_Ratio"
    var controller = "deposites_and_credits5s"

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
      var controller = "deposites_and_credits5s"
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
