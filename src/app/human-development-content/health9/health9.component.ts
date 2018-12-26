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
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-health9',
  templateUrl: './health9.component.html',
  styleUrls: ['./health9.component.css']
})
export class Health9Component implements OnInit {
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
  Districts = ["All","Andhra Pradesh","Bihar","Goa","Haryana","Karnataka","Madhya Pradesh","Meghalaya","Sikkim","Tamil Nadu","Tripura","Uttarakhand","West Bengal","India"]
  views = ViewsNotDistrict
  rain_fall_type = [{key:"All",value:"All"},{key: "Percentage of children fully immunized NFHS-3 2005-06", value: "Percentage_of_children_fully_immunized_NFHS_3_2005_06"},{key:"Percentage of children fully immunized NFHS-4 2015-16",value:"Percentage_of_children_fully_immunized_NFHS_4_2015_16"},{key:"Percentage Point Increase",value:"Percentage_Point_Increase"},{key:"Rank by percentage increase",value:"Rank_by_percentage_increase"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None","Andhra Pradesh","Bihar","Goa","Haryana","Karnataka","Madhya Pradesh","Meghalaya","Sikkim","Tamil Nadu","Tripura","Uttarakhand","West Bengal","India"];
  Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison = "None"
    } else {
      this.Comparison = ["None","Andhra Pradesh","Bihar","Goa","Haryana","Karnataka","Madhya Pradesh","Meghalaya","Sikkim","Tamil Nadu","Tripura","Uttarakhand","West Bengal","India"];
    }
    }
  onSubmit(user) {
    var controller = "health9s"

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
      var controller = "health9s"
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



