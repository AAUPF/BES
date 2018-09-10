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
  selector: 'app-resource-management1',
  templateUrl: './resource-management1.component.html',
  styleUrls: ['./resource-management1.component.css']
})
export class ResourceManagement1Component implements OnInit {

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
  Districts = ["I.    State’s Own Revenue","II.  Receipts from Centre","III. Total Revenue Receipts","All"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Net Borrowing",value:"Net Borrowing"},
    {key:"Net Public Account",value:"Net Public Account"},
    {key:"Net Decrease in Cash Balance (Opening - Closing Balance)",value:"Net Decrease in Cash Balance (Opening - Closing Balance)"},
    {key:"GFD",value:"GFD"},
   
  
  
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
        if (select == "I.    State’s Own Revenue") {    
          this.data.rain_fall_type = "All"    
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"(a) Tax Revenue",value:"(a) Tax Revenue"},
        {key:"(b)  Non-Tax Revenue",value:"(b)  Non-Tax Revenue"},
        {key:"None",value:"None"},
  ]
        }  else if (select == "II.  Receipts from Centre") {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"(a)  Share of Divisible Taxes",value:"(a)  Share of Divisible Taxes"},
            {key:"(b) Grants-in-aid",value:"(b) Grants-in-aid"},
            {key:"None",value:"None"},
          ]
        }

        else if (select == "III. Total Revenue Receipts") {
          this.data.rain_fall_type = "None" 
          this.rain_fall_type_sort = [
            {key:"State’s Own Revenue as Percentage of Total Receipts",value:"State’s Own Revenue as Percentage of Total Receipts"},
            {key:"None",value:"None"},
          ]
        }
        
        else {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"(a) Tax Revenue",value:"(a) Tax Revenue"},
        {key:"(b)  Non-Tax Revenue",value:"(b)  Non-Tax Revenue"},
            {key:"(a)  Share of Divisible Taxes",value:"(a)  Share of Divisible Taxes"},
            {key:"(b) Grants-in-aid",value:"(b) Grants-in-aid"},
            {key:"State’s Own Revenue as Percentage of Total Receipts",value:"State’s Own Revenue as Percentage of Total Receipts"},
            
          
          ]
        }
      }
      toYear(year){
        if(year == "All"){
          this.data.views = "column"
          this.views = ViewsNotMap
         
        }else{
          this.data.views = "column"
          this.views  = ViewsNotDistrict
         
        }
      }
    
  onSubmit(user) {
    var controller = "resource_management1s"

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
