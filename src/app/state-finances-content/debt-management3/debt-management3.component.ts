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
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-debt-management3',
  templateUrl: './debt-management3.component.html',
  styleUrls: ['./debt-management3.component.css']
})
export class DebtManagement3Component implements OnInit {
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
  Districts = ["All","Discharge of internal debt","Repayment of loans to Centre","Discharge of other liabilities","Total Repayment","Total Interest Payment","Total Debt Service Burden"]
  years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  views = ViewsNotMap
  rain_fall_type = [{key:"Amounts",value:"Amounts"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Discharge of internal debt","Repayment of loans to Centre","Discharge of other liabilities","Total Repayment","Total Interest Payment","Total Debt Service Burden"]
    
    data: any = {};    
    // toNumber(d) {
    // if (d == "All") {
    //   //this.data == {years: null, views: "",Comparison: ""};
    //   this.data.Comparison  = undefined
    //   this.butDisabled = true;

    // } else {
    //   this.butDisabled = false;
    //   this.Comparison = ["None","Discharge of internal debt","Repayment of loans to Centre","Discharge of other liabilities","Total Repayment","Total Interest Payment","Total Debt Service Burden"]

    // }
    // }

    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
      }
        }
    toSet(select){
      if (select == "All") {
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Discharge of internal debt","Repayment of loans to Centre","Discharge of other liabilities","Total Repayment","Total Interest Payment","Total Debt Service Burden"]

      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        
      }else{
        this.views  = ViewsNotDistrict
        
      }
    }


    
  onSubmit(user) {
    var controller = "debt_management3s"
    user.rain_fall_type = "Amounts"
    if (user.view !== "Map View") {

      
      
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
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      var controller = "debt_management3s"
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
























