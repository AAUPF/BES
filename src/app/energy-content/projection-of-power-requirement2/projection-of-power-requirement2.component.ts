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
  selector: 'app-projection-of-power-requirement2',
  templateUrl: './projection-of-power-requirement2.component.html',
  styleUrls: ['./projection-of-power-requirement2.component.css']
})
export class ProjectionOfPowerRequirement2Component implements OnInit {

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
  Districts = ["Number","Percentage"]
  years = ["All",
  "2017-18",
  "2018-19",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"Energy requirement as per demand projections (MU)",value:"Energy requirement as per demand projections (MU)"},
    {key:"Distribution losses (Percentage)",value:"Distribution losses (Percentage)"},
    {key:"Intra-state transmission losses (Percentage)",value:"Intra-state transmission losses (Percentage)"},
    {key:"Energy requirement at state periphery (MU)",value:"Energy requirement at state periphery (MU)"},
    {key:"Peak demand at 0.734 Load Factor (MW)",value:"Peak demand at 0.734 Load Factor (MW)"},
    {key:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)",value:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Energy requirement as per demand projections (MU)",value:"Energy requirement as per demand projections (MU)"},
    {key:"Distribution losses (Percentage)",value:"Distribution losses (Percentage)"},
    {key:"Intra-state transmission losses (Percentage)",value:"Intra-state transmission losses (Percentage)"},
    {key:"Energy requirement at state periphery (MU)",value:"Energy requirement at state periphery (MU)"},
    {key:"Peak demand at 0.734 Load Factor (MW)",value:"Peak demand at 0.734 Load Factor (MW)"},
    {key:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)",value:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)"},
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
          {key:"Energy requirement as per demand projections (MU)",value:"Energy requirement as per demand projections (MU)"},
    {key:"Distribution losses (Percentage)",value:"Distribution losses (Percentage)"},
    {key:"Intra-state transmission losses (Percentage)",value:"Intra-state transmission losses (Percentage)"},
    {key:"Energy requirement at state periphery (MU)",value:"Energy requirement at state periphery (MU)"},
    {key:"Peak demand at 0.734 Load Factor (MW)",value:"Peak demand at 0.734 Load Factor (MW)"},
    {key:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)",value:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)"},
          
        ]
        
      }
    
    }


    toView(view){
      if (view == "line") {
        this.years = ["All"];
      } else {
        this.years = ["All", "2017-18",
        "2018-19"];
      }
        }

      toSet(select){
        if (select == "Percentage") {
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"Distribution losses (Percentage)",value:"Distribution losses (Percentage)"},
        {key:"Intra-state transmission losses (Percentage)",value:"Intra-state transmission losses (Percentage)"},
      ]
      this.Comparison = [{key:"None",value:"None"},
      {key:"Distribution losses (Percentage)",value:"Distribution losses (Percentage)"},
      {key:"Intra-state transmission losses (Percentage)",value:"Intra-state transmission losses (Percentage)"},
    ]
           
        }  

  
        
        else {
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"Energy requirement as per demand projections (MU)",value:"Energy requirement as per demand projections (MU)"},
    {key:"Energy requirement at state periphery (MU)",value:"Energy requirement at state periphery (MU)"},
    {key:"Peak demand at 0.734 Load Factor (MW)",value:"Peak demand at 0.734 Load Factor (MW)"},
    {key:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)",value:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)"},
    ]
    this.Comparison = [{key:"None",value:"None"},
    {key:"Energy requirement as per demand projections (MU)",value:"Energy requirement as per demand projections (MU)"},
    {key:"Energy requirement at state periphery (MU)",value:"Energy requirement at state periphery (MU)"},
    {key:"Peak demand at 0.734 Load Factor (MW)",value:"Peak demand at 0.734 Load Factor (MW)"},
    {key:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)",value:"Peak demand at 0.734 Load Factor (MW) (Including Agricultural load upto 50 percent only) (MW)"},
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
    var controller = "projection_of_power_requirement2s"
    user.Comparison = "None"
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
      var controller = "projection_of_power_requirement2s"
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


