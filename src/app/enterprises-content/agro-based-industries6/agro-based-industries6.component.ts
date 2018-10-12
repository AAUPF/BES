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
  selector: 'app-agro-based-industries6',
  templateUrl: './agro-based-industries6.component.html',
  styleUrls: ['./agro-based-industries6.component.css']
})
export class AgroBasedIndustries6Component implements OnInit {
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
  Districts = [
    "All",
    "Cooperative Societies",
  "Collection of Milk",
  "Marketing of Products",
  "Services",]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},

   
  
  
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
        if (select == "Cooperative Societies") {         
      this.rain_fall_type_sort = [
        {key:"Organised",value:"Organised"},
        {key:"Operational",value:"Operational"},
        {key:"Registered",value:"Registered"},
        {key:"No. of Members (lakh)",value:"No. of Members (lakh)"},
      
  ]
           
        }  else if (select == "Collection of Milk") {


          this.rain_fall_type_sort = [
            {key:"Collection of Milk (lakh kg/day)",value:"Collection of Milk (lakh kg/day)"},
          ]
        }

        else if (select == "Marketing of Products") {


          this.rain_fall_type_sort = [
            {key:"No. of Retail Outlets",value:"No. of Retail Outlets"},
            {key:"Milk (lakh litres/day)",value:"Milk (lakh litres/day)"},
            {key:"Ghee (tonnes)",value:"Ghee (tonnes)"},
            {key:"Lassi (tonnes)",value:"Lassi (tonnes)"},
            {key:"Peda (tonnes)",value:"Peda (tonnes)"},
            {key:"Paneer (tonnes)",value:"Paneer (tonnes)"},
            {key:"Dahi (tonnes)",value:"Dahi (tonnes)"},
            {key:"Gulab Jamun (tonnes)",value:"Gulab Jamun (tonnes)"},
            {key:"Ice-Cream (tonnes)",value:"Ice-Cream (tonnes)"},
          ]
        }

        else if (select == "Services") {


          this.rain_fall_type_sort = [
            {key:"No. of Artificial Insemination Centres",value:"No. of Artificial Insemination Centres"},
          {key:"Artificial Insemination (lakh)",value:"Artificial Insemination (lakh)"},
          {key:"Vaccination (lakh)",value:"Vaccination (lakh)"},
          {key:"De-worming (lakh)",value:"De-worming (lakh)"},
          {key:"Seed Distribution (tonnes)",value:"Seed Distribution (tonnes)"},
          {key:"Cattle Feed Distribution (tonnes)",value:"Cattle Feed Distribution (tonnes)"},
          ]
        }
        else {
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
           
  
          
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
    var controller = "agro_based_industries5s"

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
