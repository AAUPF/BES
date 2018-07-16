import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Views } from '../data/views';
import { Location } from '@angular/common';

declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
@Component({
  selector: 'app-production-productivity2',
  templateUrl: './production-productivity2.component.html',
  styleUrls: ['./production-productivity2.component.css']
})
export class ProductionProductivity2Component implements OnInit {
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

  years = ["All",2011,2012,2013,2014,2015,2016];
  views =[{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Pie Chart", value: "pie"},{key: "Table", value: "Table"}];

  rain_fall_type = [{key: "All", value: "All"},{key:"Total Cereals",value:"Total_Cereals"},	{key:"Total Rice",value:"Total_Rice"},	{key:"Autumn Rice",value:"Autumn_Rice"},	{key:"Aghani Rice",value:"Aghani_Rice"},	{key:"Summer Rice",value:"Summer_Rice"},	{key:"Wheat",value:"Wheat"},	{key:"Total Maize",value:"Total_Maize"},	{key:"Kharif Maize",value:"Kharif_Maize"},	{key:"Rabi Maize",value:"Rabi_Maize"},	{key:"Summer Maize",value:"Summer_Maize"},	{key:"Total Coarse Cereals",value:"Total_Coarse_Cereals"},	{key:"Barley",value:"Barley"},	{key:"Jowar",value:"Jowar"},	{key:"Bajra",value:"Bajra"},	{key:"Ragi",value:"Ragi"},	{key:"Small Millets",value:"Small_Millets"},	{key:"Total Pulses",value:"Total_Pulses"},	{key:"Total Kharif Pulses",value:"Total_Kharif_Pulses"},	{key:"Urad",value:"Urad"},	{key:"Bhadai Moong",value:"Bhadai_Moong"},	{key:"Kulthi",value:"Kulthi"},	{key:"Ghagra",value:"Ghagra"},	{key:"Other Kharif Pulses",value:"Other_Kharif_Pulses"},	{key:"Total Rabi Pulses",value:"Total_Rabi_Pulses"},	{key:"Arhar Tur",value:"Arhar_Tur"},	{key:"Gram",value:"Gram"},	{key:"Lentil",value:"Lentil"},	{key:"Pea",value:"Pea"},	{key:"Khesari",value:"Khesari"},	{key:"Summer Moong",value:"Summer_Moong"},	{key:"Other Rabi Pulses",value:"Other_Rabi_Pulses"},	{key:"Total Oilseeds",value:"Total_Oilseeds"},	{key:"Castor seed",value:"Castor_seed"},	{key:"Safflower Kusum",value:"Safflower_Kusum"},	{key:"Sesamum",value:"Sesamum"},	{key:"Sunflower",value:"Sunflower"},	{key:"Mustard",value:"Mustard"},	{key:"Linseed",value:"Linseed"},	{key:"Ground Nut",value:"Ground_Nut"},	{key:"Total Fibre Crops",value:"Total_Fibre_Crops"},	{key:"Jute",value:"Jute"},	{key:"Mesta",value:"Mesta"},	{key:"Sugarcane",value:"Sugarcane"},]


    Comparison = [{key: "none", value: "None"},{key:"Total Cereals",value:"Total_Cereals"},	{key:"Total Rice",value:"Total_Rice"},	{key:"Autumn Rice",value:"Autumn_Rice"},	{key:"Aghani Rice",value:"Aghani_Rice"},	{key:"Summer Rice",value:"Summer_Rice"},	{key:"Wheat",value:"Wheat"},	{key:"Total Maize",value:"Total_Maize"},	{key:"Kharif Maize",value:"Kharif_Maize"},	{key:"Rabi Maize",value:"Rabi_Maize"},	{key:"Summer Maize",value:"Summer_Maize"},	{key:"Total Coarse Cereals",value:"Total_Coarse_Cereals"},	{key:"Barley",value:"Barley"},	{key:"Jowar",value:"Jowar"},	{key:"Bajra",value:"Bajra"},	{key:"Ragi",value:"Ragi"},	{key:"Small Millets",value:"Small_Millets"},	{key:"Total Pulses",value:"Total_Pulses"},	{key:"Total Kharif Pulses",value:"Total_Kharif_Pulses"},	{key:"Urad",value:"Urad"},	{key:"Bhadai Moong",value:"Bhadai_Moong"},	{key:"Kulthi",value:"Kulthi"},	{key:"Ghagra",value:"Ghagra"},	{key:"Other Kharif Pulses",value:"Other_Kharif_Pulses"},	{key:"Total Rabi Pulses",value:"Total_Rabi_Pulses"},	{key:"Arhar Tur",value:"Arhar_Tur"},	{key:"Gram",value:"Gram"},	{key:"Lentil",value:"Lentil"},	{key:"Pea",value:"Pea"},	{key:"Khesari",value:"Khesari"},	{key:"Summer Moong",value:"Summer_Moong"},	{key:"Other Rabi Pulses",value:"Other_Rabi_Pulses"},	{key:"Total Oilseeds",value:"Total_Oilseeds"},	{key:"Castor seed",value:"Castor_seed"},	{key:"Safflower Kusum",value:"Safflower_Kusum"},	{key:"Sesamum",value:"Sesamum"},	{key:"Sunflower",value:"Sunflower"},	{key:"Mustard",value:"Mustard"},	{key:"Linseed",value:"Linseed"},	{key:"Ground Nut",value:"Ground_Nut"},	{key:"Total Fibre Crops",value:"Total_Fibre_Crops"},	{key:"Jute",value:"Jute"},	{key:"Mesta",value:"Mesta"},	{key:"Sugarcane",value:"Sugarcane"},]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: ""};
        // this.data.Comparison  = undefined
        // this.butDisabled = true;
  
        this.Comparison = [{key: "none", value: "None"}]
  
      } else {
        // this.butDisabled = false;
        this.Comparison = [{key: "none", value: "None"},{key:"Total Cereals",value:"Total_Cereals"},	{key:"Total Rice",value:"Total_Rice"},	{key:"Autumn Rice",value:"Autumn_Rice"},	{key:"Aghani Rice",value:"Aghani_Rice"},	{key:"Summer Rice",value:"Summer_Rice"},	{key:"Wheat",value:"Wheat"},	{key:"Total Maize",value:"Total_Maize"},	{key:"Kharif Maize",value:"Kharif_Maize"},	{key:"Rabi Maize",value:"Rabi_Maize"},	{key:"Summer Maize",value:"Summer_Maize"},	{key:"Total Coarse Cereals",value:"Total_Coarse_Cereals"},	{key:"Barley",value:"Barley"},	{key:"Jowar",value:"Jowar"},	{key:"Bajra",value:"Bajra"},	{key:"Ragi",value:"Ragi"},	{key:"Small Millets",value:"Small_Millets"},	{key:"Total Pulses",value:"Total_Pulses"},	{key:"Total Kharif Pulses",value:"Total_Kharif_Pulses"},	{key:"Urad",value:"Urad"},	{key:"Bhadai Moong",value:"Bhadai_Moong"},	{key:"Kulthi",value:"Kulthi"},	{key:"Ghagra",value:"Ghagra"},	{key:"Other Kharif Pulses",value:"Other_Kharif_Pulses"},	{key:"Total Rabi Pulses",value:"Total_Rabi_Pulses"},	{key:"Arhar Tur",value:"Arhar_Tur"},	{key:"Gram",value:"Gram"},	{key:"Lentil",value:"Lentil"},	{key:"Pea",value:"Pea"},	{key:"Khesari",value:"Khesari"},	{key:"Summer Moong",value:"Summer_Moong"},	{key:"Other Rabi Pulses",value:"Other_Rabi_Pulses"},	{key:"Total Oilseeds",value:"Total_Oilseeds"},	{key:"Castor seed",value:"Castor_seed"},	{key:"Safflower Kusum",value:"Safflower_Kusum"},	{key:"Sesamum",value:"Sesamum"},	{key:"Sunflower",value:"Sunflower"},	{key:"Mustard",value:"Mustard"},	{key:"Linseed",value:"Linseed"},	{key:"Ground Nut",value:"Ground_Nut"},	{key:"Total Fibre Crops",value:"Total_Fibre_Crops"},	{key:"Jute",value:"Jute"},	{key:"Mesta",value:"Mesta"},	{key:"Sugarcane",value:"Sugarcane"},]
      }
      }
  onSubmit(user) {
    var controller = "production_productivity2s"
    if (user.view == "column" || user.view == "line"|| user.view == "scatter"|| user.view == "pie"|| user.view == "Table") {
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
      var controller = "production_productivity2s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }

    else if(user.view == "Bubble") {
      this.visbile_chart= true;
      this.visbile= false;
      this.visbile_table= false;

      // this.AgricultureService.pie();
      if (user.districts == "All") {
        this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
      } 
     else if(user.Comparison == "Bihar vs District") { 
      this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
      }
      else {
        this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
      }
      
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








