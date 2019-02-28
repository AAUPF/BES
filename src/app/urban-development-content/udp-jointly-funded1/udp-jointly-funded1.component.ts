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
  selector: 'app-udp-jointly-funded1',
  templateUrl: './udp-jointly-funded1.component.html',
  styleUrls: ['./udp-jointly-funded1.component.css']
})
export class UDPJointlyFunded1Component implements OnInit {
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
  Districts = ["All","Ganga River Front Development (GRFD) Patna","Saidpur Sewer network for Patna","Saidpur STP and Adjoining Network for Patna","Karmalichak Sewerage Scheme for Patna","Sewerage and Sewage Treatment Plant at Begusarai*","Sewerage and Sewage Treatment Plant at Buxar","Sewerage and Sewage Treatment Plant at Hajipur*","Sewerage and Sewage Treatment Plant at Munger*","Sewerage Treatment Plant, Karmalichak (Patna)","Sewerage Treatment Plant, Beur (Patna)","Sewerage scheme Pahari Zone V \"for Patna","Sewerage System in Sewerage Zone IV A (South) Pahari","Sewage Treatment Plant (60 MLD), Pahari for Patna","Beur sewerage Network for Patna in Bihar","Mokama Sewerage Project","Barh  Sewerage Project","Navgachiya Sewerage Project","Sultanganj Sewerage Project","Bhagalpur Sewerage Project","Digha Sewerage Project","Kankarbagh Sewerage Project","Total"]
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},{key:"SubProject cost sanctioned",value:"SubProject_cost_sanctioned"},	{key:"Total Expenditure till Nov 2017",value:"Total_Expenditure_till_Nov_2017"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Ganga River Front Development (GRFD) Patna","Saidpur Sewer network for Patna","Saidpur STP and Adjoining Network for Patna","Karmalichak Sewerage Scheme for Patna","Sewerage and Sewage Treatment Plant at Begusarai*","Sewerage and Sewage Treatment Plant at Buxar","Sewerage and Sewage Treatment Plant at Hajipur*","Sewerage and Sewage Treatment Plant at Munger*","Sewerage Treatment Plant, Karmalichak (Patna)","Sewerage Treatment Plant, Beur (Patna)","Sewerage scheme Pahari Zone V \"for Patna","Sewerage System in Sewerage Zone IV A (South) Pahari","Sewage Treatment Plant (60 MLD), Pahari for Patna","Beur sewerage Network for Patna in Bihar","Mokama Sewerage Project","Barh  Sewerage Project","Navgachiya Sewerage Project","Sultanganj Sewerage Project","Bhagalpur Sewerage Project","Digha Sewerage Project","Kankarbagh Sewerage Project","Total"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
        } else {
          this.Comparison = ["None","Ganga River Front Development (GRFD) Patna","Saidpur Sewer network for Patna","Saidpur STP and Adjoining Network for Patna","Karmalichak Sewerage Scheme for Patna","Sewerage and Sewage Treatment Plant at Begusarai*","Sewerage and Sewage Treatment Plant at Buxar","Sewerage and Sewage Treatment Plant at Hajipur*","Sewerage and Sewage Treatment Plant at Munger*","Sewerage Treatment Plant, Karmalichak (Patna)","Sewerage Treatment Plant, Beur (Patna)","Sewerage scheme Pahari Zone V \"for Patna","Sewerage System in Sewerage Zone IV A (South) Pahari","Sewage Treatment Plant (60 MLD), Pahari for Patna","Beur sewerage Network for Patna in Bihar","Mokama Sewerage Project","Barh  Sewerage Project","Navgachiya Sewerage Project","Sultanganj Sewerage Project","Bhagalpur Sewerage Project","Digha Sewerage Project","Kankarbagh Sewerage Project","Total"]
        }
    }
    
  onSubmit(user) {
    var controller = "udp_jointly_funded1s"

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
      
      var controller = "udp_jointly_funded1s"
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














