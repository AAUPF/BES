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
import { CompareFruits } from '../../data/fruits';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-tax-department7',
  templateUrl: './tax-department7.component.html',
  styleUrls: ['./tax-department7.component.css']
})
export class TaxDepartment7Component implements OnInit {

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
      "All",
      "Patna West ",
      "Patna Central",
      "Patna North ",
      "Gandhi Madan",
      "Patna South",
      "Kadam Kuan",
      "Patna City East ",
      "Patna City West ",
      "Danapur ",
      "Barh ",
      "Shahabad ",
      "Buxar ",
      "Biharshariff ",

  ];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2015, 2016];
  views = ViewsNotMap;
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  rain_fall_type = [{key: "All", value: "All"}, {key:"VAT",value:"VAT"},
  {key:"VAT",value:"VAT"},
  {key:"CST",value:"CST"},
  {key:"ENT Tax",value:"ENT_Tax"},
  {key:"ED",value:"ED"},
  {key:"ADV Tax",value:"ADV_Tax"},
  {key:"LUX Tax",value:"LUX_Tax"},
  {key:"Entry Tax",value:"Entry_Tax"},
  {key:"Professional Tax",value:"Professional_Tax"},
  {key:"Total",value:"Total"},
  {key:"Target",value:"Target"},]

  Comparison = [
    "Central Division",
    "Patna Division",
    "Gaya Division",
    "Saran Division",
    "Tirhut Division",
    "Darbhanga Division",
    "Purnea Division",
    "Bhagalpur Division"
  ]


  compare(d) {

    if (d ==  "Central Division") {
      this.data.districts =  "Patna Special "

      this.Districts = [
        "All",
        "Patna Special ",
      "Patliputra ",] 
    } 
    
    else if (d ==  "Patna Division") {
      this.data.districts = "Patna Central"

      this.Districts = [
        "All",
        "Patna West ",
      "Patna Central",
      "Patna North ",
      "Gandhi Madan",
      "Patna South",
      "Kadam Kuan",
      "Patna City East ",
      "Patna City West ",
      "Danapur ",
      "Barh ",
      "Shahabad ",
      "Buxar ",
      "Biharshariff ",
      ]
    }

    else if (d ==  "Gaya Division") {
      this.data.districts =  "Sasaram "

      this.Districts = [
        "All",
        "Sasaram ",
        "Bhabhua ",
        "Gaya ",
        "Jehanabad ",
        "Nawada ",
        "Aurangabad ",
      ]
    }

    else if (d ==  "Saran Division") {
      this.data.districts = "Saran "

      this.Districts = [
        "All",
        "Saran ",
        "Siwan ",
        "Gopalganj ",
        "Hajipur ",
      ]
    }

    else if (d ==  "Tirhut Division") {
      this.data.districts = "Muzaffarpur West"

      this.Districts = [
        "All",
        "Muzaffarpur West",
        "Muzaffarpur East",
        "Sitamarhi ",
        "Motihari ",
        "Raxaul ",
        "Bettiah ",
        "Bagaha ",
      ]
    }

    else if (d ==  "Darbhanga Division") {
      this.data.districts =  "Darbhanga "

      this.Districts = [
        "All",
        "Darbhanga ",
        "Samastipur ",
        "Madhubani ",
        "Janjharpur ",
        "Begusarai ",
        "Teghara ",
      ]
    }

    else if (d ==  "Purnea Division") {
      this.data.districts = "Saharsa "

      this.Districts = [
        "All",
        "Saharsa ",
        "Madhepura ",
        "Purnea ",
        "Katihar ",
        "Forbesganj ",
        "Kishanganj ",
        "Khagaria ",
        "Supaul",
      ]
    }

    else if (d ==  "Bhagalpur Division") {
      this.data.districts = "Bhagalpur "
      this.Districts = [
        "All",
        "Bhagalpur ",
        "Lakhisarai ",
        "Munger ",
        "Jamui ",
      ]
    }
    else {
      
    }


  }
 
    data: any = {};    
    toNumber(d) {
    // if (d == "All") {
    //   this.data == {years: null, views: "",Comparison: ""};
    //   this.data.Comparison  = undefined
    //   this.butDisabled = true;

    // } else {
    //   this.butDisabled = false;
    // }
    
    }
    toHide(view){
      // if(view == "Map View"){
      //   this.rain_fall_type = [{key: "All", value: "All"}, {key:"VAT",value:"VAT"},
      //   {key:"CST",value:"CST"},
      //   {key:"ENT_Tax",value:"ENT_Tax"},
      //   {key:"ED",value:"ED"},
      //   {key:"ADV_Tax",value:"ADV_Tax"},
      //   {key:"LUX_Tax",value:"LUX_Tax"},
      //   {key:"Entry_Tax",value:"Entry_Tax"},
      //   {key:"Professional_Tax",value:"Professional_Tax"},
      //   {key:"Total",value:"Total"},
      //   {key:"Target",value:"Target"},]
      //   //this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      // }else{
      //   this.rain_fall_type = [{key: "All", value: "All"}, {key:"VAT",value:"VAT"},
      //   {key:"CST",value:"CST"},
      //   {key:"ENT_Tax",value:"ENT_Tax"},
      //   {key:"ED",value:"ED"},
      //   {key:"ADV_Tax",value:"ADV_Tax"},
      //   {key:"LUX_Tax",value:"LUX_Tax"},
      //   {key:"Entry_Tax",value:"Entry_Tax"},
      //   {key:"Professional_Tax",value:"Professional_Tax"},
      //   {key:"Total",value:"Total"},
      //   {key:"Target",value:"Target"},]
      //   //this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      // }
    }
  onSubmit(user) {
    var controller = "tax_department7s"



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
        this.AgricultureService.barchart_bihar_vs_district_rainfall(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
        }
    } 
    else if(user.view == "Map View") {
     const that = this;
      // this.AgricultureService.barchart();
      this.visbile_chart= false;
      this.visbile= true;
      this.visbile_table= false;
      this.title =user.rain_fall_type;
      // this.SvgService.test("echamparan");
      var controller = "newrices"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
            var u = "wchamparan";
            that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
      }, 500);
      // this.SvgService.svg();
      
    }
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
    //   // var controller = "rainfalls"
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
