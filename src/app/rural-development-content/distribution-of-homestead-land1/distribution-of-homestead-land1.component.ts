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
  selector: 'app-distribution-of-homestead-land1',
  templateUrl: './distribution-of-homestead-land1.component.html',
  styleUrls: ['./distribution-of-homestead-land1.component.css']
})
export class DistributionOfHomesteadLand1Component implements OnInit {
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
  Districts = ["All","No. of surveyed landless Families","No. of Families provided with land","No. of remaining Landless Families"]
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},{key:"Mahadalit",value:"Mahadalit"},	{key:"SC",value:"SC"},	{key:"ST",value:"ST"},	{key:"BC Schedule 1",value:"BC_Schedule_1"},{key:"BC Schedule 2",value:"BC_Schedule_2"},{key:"Total",value:"Total"},{key:"Percentage of Mahadalit",value:"Percentage_of_Mahadalit"},{key:"Percentage of SC",value:"Percentage_of_SC"},{key:"Percentage of ST",value:"Percentage_of_ST"},{key:"Percentage of BC Schedule 1",value:"Percentage_of_BC_Schedule_1"},{key:"Percentage of BC Schedule 2",value:"Percentage_of_BC_Schedule_2"},{key:"Total Percentage",value:"Total_Percentage"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","No. of surveyed landless Families","No. of Families provided with land","No. of remaining Landless Families"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
        } else {
          this.Comparison = ["None","No. of surveyed landless Families","No. of Families provided with land","No. of remaining Landless Families"]
        }
    }
    
  onSubmit(user) {
    var controller = "distribution_of_homestead_land1s"

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
      
      var controller = "distribution_of_homestead_land1s"
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













