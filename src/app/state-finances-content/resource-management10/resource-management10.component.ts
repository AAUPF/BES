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
  selector: 'app-resource-management10',
  templateUrl: './resource-management10.component.html',
  styleUrls: ['./resource-management10.component.css']
})
export class ResourceManagement10Component implements OnInit {
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
  Districts = ["All","Taxes on sales / trade, etc","State excise","Stamp duty and registration fee","Taxes on Vehicles"]
  years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17","2017-18 BE"];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"Collection",value:"Collection"},	{key:"Expenditure on collection",value:"Expenditure_on_collection"},{key:"Cost as Percentage of Collection",value:"Cost_as_Percentage_of_Collection"}]
  Comparison  = ["None","Taxes on sales / trade, etc","State excise","Stamp duty and registration fee","Taxes on Vehicles"]
    
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.years = ["2012-13", "2013-14","2014-15","2015-16","2016-17","2017-18 BE"];
    } 
    else {
      if (this.data.view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17","2017-18 BE"];
      }
    
    }
  }
  toView(view){
if (view == "line") {
  this.years = ["All"];
} else {
  if (this.data.rain_fall_type == "All") {
    this.years = ["2012-13", "2013-14","2014-15","2015-16","2016-17","2017-18 BE"];
  } else {
    this.years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17","2017-18 BE"];
  }
  
}
  }
    toSet(select){
      if (select == "All") {
        // this.data == {years: null, views: "",Comparison: ""};
        this.Comparison  = ["None"]
        // this.butDisabled = true;
      } else {
        this.Comparison  = ["None","Taxes on sales / trade, etc","State excise","Stamp duty and registration fee","Taxes on Vehicles"]

        // this.butDisabled = false;
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Collection",value:"Collection"},	{key:"Expenditure on collection",value:"Expenditure_on_collection"},{key:"Cost as Percentage of Collection",value:"Cost_as_Percentage_of_Collection"}]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Collection",value:"Collection"},	{key:"Expenditure on collection",value:"Expenditure_on_collection"},{key:"Cost as Percentage of Collection",value:"Cost_as_Percentage_of_Collection"}]
      }
    }

  onSubmit(user) {
    var controller = "resource_management10s"

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
      var controller = "resource_management10s"
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









