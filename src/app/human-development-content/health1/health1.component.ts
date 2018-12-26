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
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-health1',
  templateUrl: './health1.component.html',
  styleUrls: ['./health1.component.css']
})
export class Health1Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
   
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = ["All",2011,2012,2013,2014,2015,2016];
  views = ViewsNotMap;
  rain_fall_type = [{key: "All", value: "All"}, {key: "Total Expense on Social Services India", value: "Total_Expense_on_Social_Services_India"}, {key: "Total Expense on Social Services Bihar", value: "Total_Expense_on_Social_Services_Bihar"},{key: "Total Expense India", value: "Total_Expense_India"},{key: "Total Expense Bihar", value: "Total_Expense_Bihar"},{key: "Percentage share of Social Services in Total Expenditure India", value: "Percentage_share_of_Social_Services_in_Total_Expenditure_India"},{key: "Percentage share of Social Services in Total Expenditure Bihar", value: "Percentage_share_of_Social_Services_in_Total_Expenditure_Bihar"},{key: "Per Capita Expenditure on Social Services India", value: "Per_Capita_Expenditure_on_Social_Services_India"},{key: "Per Capita Expenditure on Social Services Bihar", value: "Per_Capita_Expenditure_on_Social_Services_Bihar"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"}, {key: "Total Expense on Social Services India", value: "Total_Expense_on_Social_Services_India"}, {key: "Total Expense on Social Services Bihar", value: "Total_Expense_on_Social_Services_Bihar"},{key: "Total Expense India", value: "Total_Expense_India"},{key: "Total Expense Bihar", value: "Total_Expense_Bihar"},{key: "Percentage share of Social Services in Total Expenditure India", value: "Percentage_share_of_Social_Services_in_Total_Expenditure_India"},{key: "Percentage share of Social Services in Total Expenditure Bihar", value: "Percentage_share_of_Social_Services_in_Total_Expenditure_Bihar"},{key: "Per Capita Expenditure on Social Services India", value: "Per_Capita_Expenditure_on_Social_Services_India"},{key: "Per Capita Expenditure on Social Services Bihar", value: "Per_Capita_Expenditure_on_Social_Services_Bihar"}]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};
    
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
    this.years = ["All",2011,2012,2013,2014,2015,2016];
  }
    }
    
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison = "None";
      this.Comparison_sort = [{key: "None", value: "None"}]
    } else {
      this.Comparison_sort = this.Comparison.sort(f.compare);
    }
    }
  onSubmit(user) {
    var controller = "health1s"

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
      var controller = "health1s"
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
