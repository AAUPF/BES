import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';
import{Functions} from '../data/func';
import { ViewsNotMap } from '../data/viewsnotmap';
import { ViewsNotDistrict } from '../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-animal-husbandry1',
  templateUrl: './animal-husbandry1.component.html',
  styleUrls: ['./animal-husbandry1.component.css']
})
export class AnimalHusbandry1Component implements OnInit {
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
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = ["All",2003,2007,2012];
  //views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"}];
  views = ViewsNotMap;
  // rain_fall_type = ["All","Winter Rain","Hot Weather Rain","South West Monsoon Rain","North West Monsoon Rain"]
  rain_fall_type = [{key: "All", value: "All"}, {key:"Cattle",value:"Cattle"},	{key:"Cattle Males over 3 years",value:"Cattle_Males_over_3_years"},	{key:"Cattle Females over 3 years",value:"Cattle_Females_over_3_years"},	{key:"Cattle Young stock",value:"Cattle_Young_stock"},	{key:"Buffalo",value:"Buffalo"},	{key:"Buffalo Males over 3 years",value:"Buffalo_Males_over_3_years"},	{key:"Buffalo Females over 3 years",value:"Buffalo_Females_over_3_years"},	{key:"Buffalo Young stock",value:"Buffalo_Young_stock"},	{key:"Sheep",value:"Sheep"},	{key:"Goats",value:"Goats"},	{key:"Pigs",value:"Pigs"},	{key:"Horses Ponies",value:"Horses_Ponies"},	{key:"Others",value:"Others"},	{key:"Total Livestock",value:"Total_Livestock"},	{key:"Total Poultry",value:"Total_Poultry"}	]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"},{key:"Cattle",value:"Cattle"},	{key:"Cattle Males over 3 years",value:"Cattle_Males_over_3_years"},	{key:"Cattle Females over 3 years",value:"Cattle_Females_over_3_years"},	{key:"Cattle Young stock",value:"Cattle_Young_stock"},	{key:"Buffalo",value:"Buffalo"},	{key:"Buffalo Males over 3 years",value:"Buffalo_Males_over_3_years"},	{key:"Buffalo Females over 3 years",value:"Buffalo_Females_over_3_years"},	{key:"Buffalo Young stock",value:"Buffalo_Young_stock"},	{key:"Sheep",value:"Sheep"},	{key:"Goats",value:"Goats"},	{key:"Pigs",value:"Pigs"},	{key:"Horses Ponies",value:"Horses_Ponies"},	{key:"Others",value:"Others"},	{key:"Total Livestock",value:"Total_Livestock"},	{key:"Total Poultry",value:"Total_Poultry"}]
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    // toNumber(d) {
    //   if (d == "All") {
    //     this.data == {years: null, views: "",Comparison: ""};
    //     // this.data.Comparison  = undefined
    //     // this.butDisabled = true;
  
    //     this.Comparison_sort = [{key: "None", value: "None"}]
  
    //   } else {
    //     // this.butDisabled = false;
    //     //this.Comparison = [{key: "None", value: "None"}, {key:"Cattle",value:"Cattle"},	{key:"Males over 3 years",value:"Males_over_3_years"},	{key:"Females over 3 years",value:"Females_over_3_years"},	{key:"Young stock",value:"Young_stock"},	{key:"Buffalo",value:"Buffalo"},	{key:"Males over 3 years",value:"Males_over_3_years"},	{key:"Females over 3 years",value:"Females_over_3_years"},	{key:"Young stock",value:"Young_stock"},	{key:"Sheep",value:"Sheep"},	{key:"Goats",value:"Goats"},	{key:"Pigs",value:"Pigs"},	{key:"Horses Ponies",value:"Horses_Ponies"},	{key:"Others",value:"Others"},	{key:"Total Livestock",value:"Total_Livestock"},	{key:"Total Poultry",value:"Total_Poultry"}]
    //     this.Comparison_sort = this.Comparison.sort(f.compare);
    //   }
    //   }

    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        
        this.Comparison_sort = [{key: "None", value: "None"}]
  
      } else {
        this.Comparison_sort = this.Comparison.sort(f.compare);
      }
      }

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
      this.years = ["All",2003,2007,2012];
    }
      }
  onSubmit(user) {
    var controller = "animal_husbandry1s"
    if (user.view !== "Map View") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
      } 
     else if(user.Comparison) { 
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
      else {
        this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
      }
    } 
    else if(user.view == "Trend Line") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      if (user.districts == "All") {
        this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
      } 
      else if(user.Comparison == "Bihar vs District") { 
        this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
        }
      else {
        this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
      }
      
    } 
    else if(user.view == "Table") {
      this.visbile_chart= false;
      this.visbile_table= true;
      this.visbile= false;
      this.spinner.show();

      this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    }
    else if(user.view == "Map View") {
     const that = this;
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      var controller = "animal_husbandry1s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }
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











