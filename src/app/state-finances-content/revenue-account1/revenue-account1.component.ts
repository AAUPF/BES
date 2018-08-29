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
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-revenue-account1',
  templateUrl: './revenue-account1.component.html',
  styleUrls: ['./revenue-account1.component.css']
})
export class RevenueAccount1Component implements OnInit {
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
  Districts = ["All","None","Revenue Receipt","Revenue Expenditure","Revenue Surplus","State's own tax plus non tax revenue"]
  Districts1 = ["All","None","State’s own revenue as percentage of total revenue","State’s share of Central tax as percentage of total revenue","Central Grants as percentage of its total revenue","State’s own revenue as percentage of revenue expenditure"]
  years = ["All","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  views = ViewsNotMap
  rain_fall_type = [{key:"Amount",value:"Amount"}]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None","Revenue Receipt","Revenue Expenditure","Revenue Surplus","State's own tax plus non tax revenue","State’s own revenue as percentage of total revenue","State’s share of Central tax as percentage of total revenue","Central Grants as percentage of its total revenue","State’s own revenue as percentage of revenue expenditure"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison  = undefined
        this.butDisabled = true;
      } else {
        this.butDisabled = false;
      }
        if(d !== "None"){
          this.Districts1 = ["None"]
          if (d == "All") {
            this.Comparison = ["None"]
          } else {
            this.Comparison = ["None","Revenue Receipt","Revenue Expenditure","Revenue Surplus","State's own tax plus non tax revenue"]
          }
        }
        else{
          this.Districts1 = ["All","None","State’s own revenue as percentage of total revenue","State’s share of Central tax as percentage of total revenue","Central Grants as percentage of its total revenue","State’s own revenue as percentage of revenue expenditure"]
          
            this.Comparison = ["None","State’s own revenue as percentage of total revenue","State’s share of Central tax as percentage of total revenue","Central Grants as percentage of its total revenue","State’s own revenue as percentage of revenue expenditure"]
          
          
        }
    }
    toCheck(d){
      if (d == "All") {
        //this.data == {years: null, views: "",Comparison: ""};
        this.data.Comparison  = undefined
        this.butDisabled = true;
  
      } else {
        this.butDisabled = false;
      }
      if(d !== "None"){
        this.Districts = ["None"]
        if (d == "All") {
          this.Comparison = ["None"]
        } else {
          this.Comparison = ["None","State’s own revenue as percentage of total revenue","State’s share of Central tax as percentage of total revenue","Central Grants as percentage of its total revenue","State’s own revenue as percentage of revenue expenditure"]
        }
        
      }
      else{
        this.Districts = ["All","None","Revenue Receipt","Revenue Expenditure","Revenue Surplus","State's own tax plus non tax revenue"]
        if (this.Districts == ["All"]) {
          alert("ok")
          this.Comparison = ["None"]
        } else {
          this.Comparison = ["None","Revenue Receipt","Revenue Expenditure","Revenue Surplus","State's own tax plus non tax revenue"]
        }
        
      }
    }
    
  onSubmit(user) {
    user.rain_fall_type = "Amount"
    var controller = "revenue_account1s"

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
        this.AgricultureService.six_column_data(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.districts1);
        }
    } 
    else if(user.view == "Map View") {
     const that = this;
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      var controller = "revenue_account1s"
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




















