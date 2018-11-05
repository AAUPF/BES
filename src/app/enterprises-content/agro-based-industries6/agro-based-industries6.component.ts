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
    "Food Products/Beverages/ Tobacco Products",
    "Textiles/Wearing Apparel",
    "Leather and Leather Products",
    "Wood and Wood Products / Furniture",
    "Paper and Paper Products/ printing and Reproduction of Recorded Media/Publishing Activities",
    "Sub Total",
    "Food Products/Beverages/ Tobacco Products",
    "Textiles/Wearing Apparel",
    "Leather and Leather Products",
    "Wood and Wood Products / Furniture",
    "Paper and Paper Products/ printing and Reproduction of Recorded Media/Publishing Activities",
    "Sub Total",
    "Coke and Refined Petroleum Products",
    "Chemicals and Chemical products",
    "Basic Pharmaceutical Products",
    "Rubber and Plastic Products",
    "Non-Metallic Mineral Products",
    "Metals/ Fabricated Metal Products Except Machinery and Equipment",
    "Electrical Equipment/ Machinery and Equipment NEC/Repair and Installation of machinery equipment",
    "Motor vehicle, Trailer, Semi-Trailer/ Other Transport Equipment",
    "Others ( including 32 other manufacturing)",
    "Sub-Total",
    "Grand Total",
    "Coke and Refined Petroleum Products",
    "Chemicals and Chemical products",
    "Basic Pharmaceutical Products",
    "Rubber and Plastic Products",
    "Non-Metallic Mineral Products",
    "Metals/ Fabricated Metal Products Except Machinery and Equipment",
    "Electrical Equipment/ Machinery and Equipment NEC/Repair and Installation of machinery equipment",
    "Motor vehicle, Trailer, Semi-Trailer/ Other Transport Equipment",
    "Others ( including 32 other manufacturing)",
    "Sub-Total",
    "Grand Total"
,]
  years = [
  "Agro Based",
  "Non- Agro Based",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotDistrict;


  Comparison = [
    "Value of Output",
    "Net Value Added"
  ]


  rain_fall_type = [
    {key:"India",value:"India"},
    {key:"Bihar",value:"Bihar"},
    {key:"Bihar Percentage Share",value:"Bihar_Percentage_Share"},


  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    
    }
    toView(view){

    }
      toSet(select){

      }
      toYear(year){
        if(year == "Agro Based"){
          this.data.districts = "All"
          this.Districts = [    
          "All",
          "Food Products/Beverages/ Tobacco Products",
          "Textiles/Wearing Apparel",
          "Leather and Leather Products",
          "Wood and Wood Products / Furniture",
          "Paper and Paper Products/ printing and Reproduction of Recorded Media/Publishing Activities",
          "Sub Total",
          "Food Products/Beverages/ Tobacco Products",
          "Textiles/Wearing Apparel",
          "Leather and Leather Products",
          "Wood and Wood Products / Furniture",
          "Paper and Paper Products/ printing and Reproduction of Recorded Media/Publishing Activities",
          "Sub Total",]
         
        }else{
          this.data.districts = "All"
          this.Districts = [ 
            "All",
            "Coke and Refined Petroleum Products",
            "Chemicals and Chemical products",
            "Basic Pharmaceutical Products",
            "Rubber and Plastic Products",
            "Non-Metallic Mineral Products",
            "Metals/ Fabricated Metal Products Except Machinery and Equipment",
            "Electrical Equipment/ Machinery and Equipment NEC/Repair and Installation of machinery equipment",
            "Motor vehicle, Trailer, Semi-Trailer/ Other Transport Equipment",
            "Others ( including 32 other manufacturing)",
            "Sub-Total",
            "Grand Total",
            "Coke and Refined Petroleum Products",
            "Chemicals and Chemical products",
            "Basic Pharmaceutical Products",
            "Rubber and Plastic Products",
            "Non-Metallic Mineral Products",
            "Metals/ Fabricated Metal Products Except Machinery and Equipment",
            "Electrical Equipment/ Machinery and Equipment NEC/Repair and Installation of machinery equipment",
            "Motor vehicle, Trailer, Semi-Trailer/ Other Transport Equipment",
            "Others ( including 32 other manufacturing)",
            "Sub-Total",
            "Grand Total"

          ]
         
        }
      }
    
  onSubmit(user) {
    var controller = "agro_based_industries6s"

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
