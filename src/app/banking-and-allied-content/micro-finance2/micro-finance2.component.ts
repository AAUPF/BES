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
  selector: 'app-micro-finance2',
  templateUrl: './micro-finance2.component.html',
  styleUrls: ['./micro-finance2.component.css']
})
export class MicroFinance2Component implements OnInit {

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
  years = ["All", "Mar-14",
  "Mar-15",
  "Mar-16",
  "Mar-17"
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    "None",
    "Rural households covered (SHG : savings linked)(in lakh)",
"No. of SHG shavings avings banka ccount (in lakh)",
"Average savings / SHG (Bihar) (Rs)",
"Average savings / SHG (India) (Rs.)",
"No.of SHGs provided bank loan",
"Amount of bank loan outstanding (Rs. lakh)",
"No. of SHGs provided bank loan during the year",
"Amount of bank loan (Rs. lakh)",
"Average bank loan per SHG in Bihar (Rs. lakh)",
"Average bank loan per SHG in India (Rs. lakh)",
"Gross NPA (Rs. lakh)",
"Percentage of gross NPA to total outstanding in Bihar"
    
  ]


  rain_fall_type = [
    "All",
    "Rural households covered (SHG : savings linked)(in lakh)",
"No. of SHG shavings avings banka ccount (in lakh)",
"Average savings / SHG (Bihar) (Rs)",
"Average savings / SHG (India) (Rs.)",
"No.of SHGs provided bank loan",
"Amount of bank loan outstanding (Rs. lakh)",
"No. of SHGs provided bank loan during the year",
"Amount of bank loan (Rs. lakh)",
"Average bank loan per SHG in Bihar (Rs. lakh)",
"Average bank loan per SHG in India (Rs. lakh)",
"Gross NPA (Rs. lakh)",
"Percentage of gross NPA to total outstanding in Bihar"
  
  
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ["None"]
        
      } else {
        this.Comparison = [
          "None",
    "Rural households covered (SHG : savings linked)(in lakh)",
"No. of SHG shavings avings banka ccount (in lakh)",
"Average savings / SHG (Bihar) (Rs)",
"Average savings / SHG (India) (Rs.)",
"No.of SHGs provided bank loan",
"Amount of bank loan outstanding (Rs. lakh)",
"No. of SHGs provided bank loan during the year",
"Amount of bank loan (Rs. lakh)",
"Average bank loan per SHG in Bihar (Rs. lakh)",
"Average bank loan per SHG in India (Rs. lakh)",
"Gross NPA (Rs. lakh)",
"Percentage of gross NPA to total outstanding in Bihar"
          
        ]
        
      }
    
    }


    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All","Mar-14",
        "Mar-15",
        "Mar-16",
        "Mar-17"];
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
    var controller = "micro_finance2s"

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
      var controller = "micro_finance2s"
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
