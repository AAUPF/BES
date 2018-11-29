import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Districtswithoutbihar, Comparedistrictswithoutbihar } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
import { ViewsNotTrend } from '../../data/viewsnottrend';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-sectoral-share11',
  templateUrl: './sectoral-share11.component.html',
  styleUrls: ['./sectoral-share11.component.css']
})
export class SectoralShare11Component implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  
  // title:string;
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  Districts = Districtswithoutbihar
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = ["Agriculture","Small and Medium Enterprise","Other Priority Sector","Total Priority Sector"];
  views = ViewsNotTrend
  rain_fall_type = [{key: "All", value: "All"},{key:"Target",value:"Target"},
  {key:"Achievement",value:"Achievement"},
  {key:"Achievement Percentage",value:"Achievement_Percentage"},]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = Comparedistrictswithoutbihar
    data: any = {};    
    toNumber(d) {
        if (d == "All") {
          this.data.Comparison = "None"
          this.Comparison = ["None"]

        } else {
          this.Comparison = Comparedistrictswithoutbihar
        }
    }
    toHide(view){
      if(view=="Map View"){
        this.rain_fall_type = [{key:"Target",value:"Target"},
        {key:"Achievement",value:"Achievement"},
        {key:"Achievement Percentage",value:"Achievement_Percentage"},]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }else{
        this.rain_fall_type = [{key: "All", value: "All"},{key:"Target",value:"Target"},
        {key:"Achievement",value:"Achievement"},
        {key:"Achievement Percentage",value:"Achievement_Percentage"},]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }
    }
  onSubmit(user) {
    var controller = "sectoral_share11s"

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
      var controller = "sectoral_share11s"
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
