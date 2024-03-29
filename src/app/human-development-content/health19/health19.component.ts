import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Comparedistrictswithoutbihar, Districtswithoutbihar } from '../../data/districts';
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
  selector: 'app-health19',
  templateUrl: './health19.component.html',
  styleUrls: ['./health19.component.css']
})
export class Health19Component implements OnInit {
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

  years = ["All",2013,2014,2015,2016];
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"},{key:"Target",value:"Target"},	{key:"Selection",value:"Selection"}]
  
    Comparison = Comparedistrictswithoutbihar
    data: any = {};    
    
    toNumber(d) {
      if (d == "All") {
        this.years = [2013,2014,2015,2016];
      } 
      else {
        if (this.data.view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All",2013,2014,2015,2016];
        }
      
      }
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    if (this.data.rain_fall_type == "All") {
      this.years = [2013,2014,2015,2016];
    } else {
      this.years = ["All",2013,2014,2015,2016];
    }
    
  }
    }
      toSet(select){
        if (select == "All") {
          this.data.Comparison  = "None"
          this.Comparison  = ["None"]
          
        } else {
          this.data.Comparison  = "None"
          this.Comparison  = Comparedistrictswithoutbihar
          }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = [{key:"Target",value:"Target"},	{key:"Selection",value:"Selection"}]
        }else{
          this.views  = ViewsNotDistrict
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Target",value:"Target"},	{key:"Selection",value:"Selection"}]
        }
      }
  onSubmit(user) {
    var controller = "health19s"

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
      var controller = "health19s"
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















