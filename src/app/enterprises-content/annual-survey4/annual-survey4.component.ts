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
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-annual-survey4',
  templateUrl: './annual-survey4.component.html',
  styleUrls: ['./annual-survey4.component.css']
})
export class AnnualSurvey4Component implements OnInit {

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
  Districts = ["All",
  "Number of Factories in Operation ( in ‘000)",
  "Fixed capital (Rs. ‘000 crore)",
  "Working Capital (Rs. ‘000 crore)",
  "Persons Engaged (in ‘000)",
  "Value of Output (Rs. ‘ 000 crore)",
  "Net Value Added (Rs. ‘000 crore)",
]
  years = ["All",
      "2005-06",
      "2006-07",
      "2007-08",
      "2008-09",
      "2009-10",
      "2010-11",
      "2011-12",
      "2012-13",
      "2013-14",
      "2014-15",
      "CAGR",
     ];
  views = ViewsNotMap;
  rain_fall_type = [{key:"All",value:"All"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
  Comparison  = ["None","Number of Factories in Operation ( in ‘000)",
  "Fixed capital (Rs. ‘000 crore)",
  "Working Capital (Rs. ‘000 crore)",
  "Persons Engaged (in ‘000)",
  "Value of Output (Rs. ‘ 000 crore)",
  "Net Value Added (Rs. ‘000 crore)",]
    
  data: any = {};    
  toNumber(d) {
  if (d == "All") {
    this.years = [ "2005-06",
    "2006-07",
    "2007-08",
    "2008-09",
    "2009-10",
    "2010-11",
    "2011-12",
    "2012-13",
    "2013-14",
    "2014-15",
    "CAGR",];
  } 
  else {
    if (this.data.view == "line") {
      this.years = ["All"];
    } else {
      this.years = ["All", "2005-06",
      "2006-07",
      "2007-08",
      "2008-09",
      "2009-10",
      "2010-11",
      "2011-12",
      "2012-13",
      "2013-14",
      "2014-15",
      "CAGR",];
    }
  
  }
}
toView(view){
if (view == "line") {
this.years = ["All"];
} else {
if (this.data.rain_fall_type == "All") {
  this.years = [ "2005-06",
  "2006-07",
  "2007-08",
  "2008-09",
  "2009-10",
  "2010-11",
  "2011-12",
  "2012-13",
  "2013-14",
  "2014-15",
  "CAGR",];
} else {
  this.years = ["All", "2005-06",
  "2006-07",
  "2007-08",
  "2008-09",
  "2009-10",
  "2010-11",
  "2011-12",
  "2012-13",
  "2013-14",
  "2014-15",
  "CAGR",];
}

}
}
    toSet(select){
      if (select == "All") {
        this.data.Comparison  = "None"
        this.Comparison  = ["None"]
        
      } else {
        this.Comparison  = ["None","Number of Factories in Operation ( in ‘000)",
        "Fixed capital (Rs. ‘000 crore)",
        "Working Capital (Rs. ‘000 crore)",
        "Persons Engaged (in ‘000)",
        "Value of Output (Rs. ‘ 000 crore)",
        "Net Value Added (Rs. ‘000 crore)",
      ]

        
      }
    }
    toYear(year){
      if(year == "All"){
        this.views = ViewsNotMap
        this.rain_fall_type = [{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
      }else{
        this.views  = ViewsNotDistrict
        this.rain_fall_type = [{key:"All",value:"All"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
      }
    }

  onSubmit(user) {
    var controller = "annual_survey4s"

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
      var controller = "annual_survey4s"
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
