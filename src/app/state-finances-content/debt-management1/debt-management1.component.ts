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
  selector: 'app-debt-management1',
  templateUrl: './debt-management1.component.html',
  styleUrls: ['./debt-management1.component.css']
})
export class DebtManagement1Component implements OnInit {

 
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
  Districts = ["Public Debt","Other Liabilities"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Internal  Debt",value:"Internal  Debt"},
    {key:"Central Loans",value:"Central Loans"},
    {key:"Total",value:"Total"},
   
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    
    }
    toView(view){
  // if (view == "line") {
  //   this.years = ["All"];
  // } else {
  //   if (this.data.rain_fall_type == "All") {
  //     this.years = ["2015","2016_RE","2017_RE"];
  //   } else {
  //     this.years = ["All","2015","2016_RE","2017_RE"];
  //   }
    
  // }
    }
      toSet(select){
        if (select == "Public Debt") {         
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"Internal  Debt",value:"Internal  Debt"},
        {key:"Central Loans",value:"Central Loans"},
        {key:"Total",value:"Total"},
      
  ]
           
        }  else if (select == "Other Liabilities") {


          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Small Savings, PF etc.",value:"Small Savings, PF etc."},
            {key:"Reserve Funds",value:"Reserve Funds"},
            {key:"Deposits and Advances",value:"Deposits and Advances"},
            {key:"Total",value:"Total"},
            {key:"Total (Public Debt plus Other Liabilities)",value:"Total (Public Debt plus Other Liabilities)"},
            {key:"Outstanding Liability as Percentage of GSDP",value:"Outstanding Liability as Percentage of GSDP"},
           

          ]
        }

  
        
        else {
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"Internal  Debt",value:"Internal  Debt"},
            {key:"Central Loans",value:"Central Loans"},
            {key:"Total",value:"Total"},
            {key:"Small Savings, PF etc.",value:"Small Savings, PF etc."},
            {key:"Reserve Funds",value:"Reserve Funds"},
            {key:"Deposits and Advances",value:"Deposits and Advances"},
            {key:"Total",value:"Total"},
            {key:"Total (Public Debt plus Other Liabilities)",value:"Total (Public Debt plus Other Liabilities)"},
            {key:"Outstanding Liability as Percentage of GSDP",value:"Outstanding Liability as Percentage of GSDP"},
           
          
          ]
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
    var controller = "debt_management1s"

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
      var controller = "fiscal_performance1s"
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
