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
// import { NewViews } from '../data/newviews';


declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-health3',
  templateUrl: './health3.component.html',
  styleUrls: ['./health3.component.css']
})
export class Health3Component implements OnInit {
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
  //Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["Bihar","India"]
  month  = ["Total","Rural","Urban"]

  years = [{key:"All",value:"All"},{key:"2012",value:2012},{key:"2013",value:2013},{key:"2014",value:2014},{key:"2015",value:2015}];
  
  views = ViewsNotMap
  rain_fall_type = [{key: "All", value: "All"},{key:"Crude Birth Rate", value:"Crude_Birth_Rate"},	{key:"Infant Mortality Rate", value:"Infant_Mortality_Rate"},	{key:"Child Mortality Rate", value:"Child_Mortality_Rate"},	{key:"Under Five Mortality Rate", value:"Under_Five_Mortality_Rate"},{key:"Neo Natal Mortality Rate", value:"Neo_Natal_Mortality_Rate"},{key:"Total Fertility Rate",value:"Total_Fertility_Rate"},{key:"Total Marital Fertility Rate",value:"Total_Marital_Fertility_Rate"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);

    Comparison = [{key: "None", value: "None"},{key:"Crude Birth Rate", value:"Crude_Birth_Rate"},	{key:"Infant Mortality Rate", value:"Infant_Mortality_Rate"},	{key:"Child Mortality Rate", value:"Child_Mortality_Rate"},	{key:"Under Five Mortality Rate", value:"Under_Five_Mortality_Rate"},{key:"Neo Natal Mortality Rate", value:"Neo_Natal_Mortality_Rate"},{key:"Total Fertility Rate",value:"Total_Fertility_Rate"},{key:"Total Marital Fertility Rate",value:"Total_Marital_Fertility_Rate"}]
    Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: ""};
        this.Comparison_sort = [{key: "None", value: "None"}];
        //this.butDisabled = true;

      } else {
        //this.butDisabled = false;
        this.Comparison_sort = this.Comparison.sort(f.compare);
      }
    }
    // toHide(view){
    //   if(view == "All"){
    //     this.Comparison_sort = [{key:"None",value:"None"}];
    //   }else{
    //     this.Comparison_sort = this.Comparison.sort(f.compare);
    //   }
    // }
  onSubmit(user) {
    var controller = "health3s"
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
        this.AgricultureService.chart(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.Month);
           
      }
    } 
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "health3s"
    //   this.spinner.show();
    //   setTimeout(function() {
    //     //  that.SvgService.test("echamparan");
    //         that.SvgService.svg2(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller,user.Month);
    //         var u = "wchamparan";
    //         that.SvgService.test1(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.Month); 
    //   }, 500);
    //   // this.SvgService.svg(); 
    // }
    // if (user.view == "Graph") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
    //   }
    // } 
    // else if(user.view == "Trend Line") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   if (user.districts == "All") {
    //     this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
    //   } 
    //   else if(user.Comparison == "Bihar vs District") { 
    //     this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //     }
    //   else {
    //     this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
    //   }
      
    // } 
    // else if(user.view == "Table") {
    //   this.visbile_chart= false;
    //   this.visbile_table= true;
    //   this.visbile= false;
    //   this.spinner.show();

    //   this.SvgService.newtable(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
    // }
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "rainfall2s"
    //   this.spinner.show();
    //   setTimeout(function() {
    //     //  that.SvgService.test("echamparan");
    //         that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
    //         var u = "wchamparan";
    //         that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
    //   }, 500);
    //   // this.SvgService.svg();
      
    // }
    // else if(user.view == "Bubble") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   }
      
    // } 
  }     
  // test(a) {
  //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
  //   let svgDoc = map.contentDocument; // should be fine
  //   let echamparan = svgDoc.getElementById(a);
  //   echamparan.classList.add("mystyle");
  //   console.log(echamparan); 
  // }

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }

}

