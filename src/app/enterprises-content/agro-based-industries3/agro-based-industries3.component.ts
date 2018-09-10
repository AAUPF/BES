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
  selector: 'app-agro-based-industries3',
  templateUrl: './agro-based-industries3.component.html',
  styleUrls: ['./agro-based-industries3.component.css']
})
export class AgroBasedIndustries3Component implements OnInit {
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
  // Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","Vaishal Patliputra Milk Union, Patna","Deshratna Dr. Rajendra Prasad Milk Union, Barauni","Mithila Milk Union, Samastipur","Tirhut Milk Union, Muzaffarpur","Shahbad Milk Union, Ara","Vikramshila Milk Union, Bhagalpur","Magadh Dairy Project, Gaya","Kosi Dairy Project, Purnea","Kosi Milk Union, Supaul","Ranchi or Bokaro or Jamshedpur Dairy"]
  years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","CAGR"];
  views = ViewsNotMap
  rain_fall_type = [{key:"All",value:"All"},{key:"Daily Milk Collection",value:"Daily_Milk_Collection"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Vaishal Patliputra Milk Union, Patna","Deshratna Dr. Rajendra Prasad Milk Union, Barauni","Mithila Milk Union, Samastipur","Tirhut Milk Union, Muzaffarpur","Shahbad Milk Union, Ara","Vikramshila Milk Union, Bhagalpur","Magadh Dairy Project, Gaya","Kosi Dairy Project, Purnea","Kosi Milk Union, Supaul","Ranchi or Bokaro or Jamshedpur Dairy"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.Comparison = ["None"]
        
      } else {
        this.Comparison = ["None","Vaishal Patliputra Milk Union, Patna","Deshratna Dr. Rajendra Prasad Milk Union, Barauni","Mithila Milk Union, Samastipur","Tirhut Milk Union, Muzaffarpur","Shahbad Milk Union, Ara","Vikramshila Milk Union, Bhagalpur","Magadh Dairy Project, Gaya","Kosi Dairy Project, Purnea","Kosi Milk Union, Supaul","Ranchi or Bokaro or Jamshedpur Dairy"]
        
      }
  }
  toYear(year){
    if(year == "All"){
      
this.views = ViewsNotMap
    }else{
      this.views  =  ViewsNotDistrict
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  this.years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","CAGR"];
}
  }
  onSubmit(user) {
    user.rain_fall_type = "Daily_Milk_Collection"
    var controller = "agro_based_industries3s"

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
      
      var controller = "agro_based_industries3s"
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



















