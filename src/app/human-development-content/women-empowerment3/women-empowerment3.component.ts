import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
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
  selector: 'app-women-empowerment3',
  templateUrl: './women-empowerment3.component.html',
  styleUrls: ['./women-empowerment3.component.css']
})
export class WomenEmpowerment3Component implements OnInit {
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
  Districts = ["All","2011-12",
  "2012-13",
  "2013-14",
  "2014-15",
  "2015-16",
  "2016-17 (BE)",]
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},{key:"Lakshmibai Social Security Pension Scheme",value:"Lakshmibai_Social_Security_Pension_Scheme"},	{key:"Nari Shakti Yojana",value:"Nari_Shakti_Yojana"},{key:"Mukhyamantri Kanya Vivah Yojana",value:"Mukhyamantri_Kanya_Vivah_Yojana"},{key:"Mukhyamantri Kanya Suraksha Yojana",value:"Mukhyamantri_Kanya_Suraksha_Yojana"},{key:"Total",value:"Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","2011-12",
    "2012-13",
    "2013-14",
    "2014-15",
    "2015-16",
    "2016-17 (BE)",]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
        this.views = ViewsNotMap
        } else {
          this.views = ViewsNotDistrict
          this.Comparison = ["None","2011-12",
          "2012-13",
          "2013-14",
          "2014-15",
          "2015-16",
          "2016-17 (BE)",]
        }
    }

    toView(view){
      if (view == "line") {
        this.Districts = ["All"];
      } else {
        if (this.data.rain_fall_type == "All") {
          this.Districts = ["2011-12",
          "2012-13",
          "2013-14",
          "2014-15",
          "2015-16",
          "2016-17 (BE)"];
        } else {
          this.Districts = ["All","2011-12",
          "2012-13",
          "2013-14",
          "2014-15",
          "2015-16",
          "2016-17 (BE)"];
        }
        
      }
        }
    
  onSubmit(user) {
    var controller = "women_empowerment3s"

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
      
      var controller = "women_empowerment3s"
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














