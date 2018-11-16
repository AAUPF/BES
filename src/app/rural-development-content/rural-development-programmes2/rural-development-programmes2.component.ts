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
  selector: 'app-rural-development-programmes2',
  templateUrl: './rural-development-programmes2.component.html',
  styleUrls: ['./rural-development-programmes2.component.css']
})
export class RuralDevelopmentProgrammes2Component implements OnInit {

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
  years = ["All", "2011-12",
  "2012-13",
  "2013-14",
  "2014-15",
  "2015-16",
  "2016-17",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        
      } else {
        this.Comparison = [
          {key:"None",value:"None"},
          {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
          
        ]
        
      }
    
    }


    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All",  "2011-12",
        "2012-13",
        "2013-14",
        "2014-15",
        "2015-16",
        "2016-17",];
      }
        }

      toSet(select){
        if (select == "Public Debt") {         
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
      
  ]
           
        }  else if (select == "Other Liabilities") {


          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
           

          ]
        }

  
        
        else {
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"No. of job cards issued (lakh)",value:"No. of job cards issued (lakh)"},
    {key:"No. of households provided with employment (lakh)",value:"No. of households provided with employment (lakh)"},
    {key:"No. of households obtaining 100 days of employment (lakh)",value:"No. of households obtaining 100 days of employment (lakh)"},
    {key:"Employment generated (lakh persondays)",value:"Employment generated (lakh persondays)"},
    {key:"Percentage share of women in total employment generated",value:"Percentage share of women in total employment generated"},
    {key:"Average employment per household (persondays)",value:"Average employment per household (persondays)"},
    {key:"Number of completed works",value:"Number of completed works"},
    {key:"Fund utilized (percentage)",value:"Fund utilized (percentage)"},
    {key:"No. of  accounts opened (in lakh)",value:"No. of  accounts opened (in lakh)"}
           
          
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
    var controller = "rural_development_programmes2s"

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
      var controller = "rural_development_programmes2s"
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
