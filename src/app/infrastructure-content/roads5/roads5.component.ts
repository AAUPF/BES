import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Districtswithoutbihar } from '../../data/districts';
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
  selector: 'app-roads5',
  templateUrl: './roads5.component.html',
  styleUrls: ['./roads5.component.css']
})
export class Roads5Component implements OnInit {
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
  Districts = [
    
    "Single Lane (3.75m width)",
    "Intermediate Lane (5.50m width)",
    "Double Lane (7.0m width)",
    "Multiple Lane (More than 7.00m width)",
    "Missing Link",
    "Total",
  ]
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [{key:"All",value:"All"},{key:"Length",value:"Length"},{key:"Percentage",value:"Percentage"}
    
   

];
  views = ViewsNotDistrict;
  rain_fall_type = [
   
  {key:"National Highways",value:"National Highways"},
  {key:"State Highways",value:"State Highways"},
  {key:"Major District Roads",value:"Major District Roads"},
  
]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["National Highways","State Highways","Major District Roads"]
    data: any = {};    
    toNumber(d) {
        // if (d == "All") {
        //   this.data.Comparison = "None"
        //   this.Comparison = ["Rural","Urban","Total"]

        // } else {
        //   this.Comparison = ["Rural","Urban","Total"]
        // }
    }
    toHide(view){
      // if(view=="Map View"){
      //   this.rain_fall_type = [{key:"Number of Establishments Rural",value:"Number_of_Establishments_Rural"},	{key:"Number of Establishments Urban",value:"Number_of_Establishments_Urban"},	{key:"Total Number of Establishments",value:"Total_Number_of_Establishments"},	{key:"Percentage Share Establishments",value:"Percentage_Share_Establishments"},{key:"Percentage Share Population",value:"Percentage_Share_Population"}]
      //   this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      // }else{
      //   this.rain_fall_type = [{key: "All", value: "All"},{key:"Number of Establishments Rural",value:"Number_of_Establishments_Rural"},	{key:"Number of Establishments Urban",value:"Number_of_Establishments_Urban"},	{key:"Total Number of Establishments",value:"Total_Number_of_Establishments"},	{key:"Percentage Share Establishments",value:"Percentage_Share_Establishments"},{key:"Percentage Share Population",value:"Percentage_Share_Population"}]
      //   this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      // }
    }

    //   toView(view){
    //       if (view == "line") {
    //         this.years = ["All"];
    //       } else {
    //         this.years = ["All", 'Number_2005', 'Number_2013','Percentage_Increase'];
    //       }
    //   }

    // toYear(year){
    //   if(year == "All"){
    //     this.views = ViewsNotMap
       
    //   }else{
    //     this.views  = ViewsNotDistrict
       
    //   }
    // }
  onSubmit(user) {
    var controller = "roads5s"
    // var r_type = ""

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
      var controller = "roads5s"
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
