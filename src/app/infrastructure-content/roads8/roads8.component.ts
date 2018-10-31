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
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-roads8',
  templateUrl: './roads8.component.html',
  styleUrls: ['./roads8.component.css']
})
export class Roads8Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  
  // title:string;
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","BRGF (Ganga Bridge) between Digha and Sonepur and approach road","BRGF (AIIMS, Patna to Digha Ghat)","ADB (BSHP-I) upgradation of 2-lane of 9 SH","ADB (BSHP-II) upgradation of 2-lane of 5 SH","ADB (Additional Financing for BSHP-II) upgradation of 2-lane of 4 SH","ADB (6-lane Ganga Bridge and Road Project)","JICA (4-laning of NH-82) Gaya – Hisua – Rajgir – Nalanda – Biharsharif Section","PPP Mode (Greenfield Bridge on River Ganga -Bakhtiyarpur on NH31 to Tajpur  NH28)","HUDCO (Road) "]
  rain_fall_type = [{key:"All",value:"All"},{key:"Length(kms)",value:"Length_in_kms"},{key:"Remarks",value:"Remarks"}]
  data: any = {};    
    
  onSubmit(user) {
    user.view = "Table"
    var controller = "roads8s"

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
      
      var controller = "roads8s"
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














