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
  selector: 'app-social-welfare1',
  templateUrl: './social-welfare1.component.html',
  styleUrls: ['./social-welfare1.component.css']
})
export class SocialWelfare1Component implements OnInit {
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
  Districts = ["All","Mahila Samridhi Scheme (0.30) (NSFDC)","Small Business (0.50) (NSFDC)","Mahila Samridhi Scheme (0.30) (NSKFDC)","MahilaSamridhi Scheme (0.50) (NSKFDC)","Micro Credit Finance Scheme (0.30) (NSKFDC)","Micro Credit Finance Scheme (0.50) (NSKFDC)","Term Loan Scheme (0.50) (NSKFDC)","Term Loan Scheme (1.00) (NSKFDC)","Subsidy Scheme (executed through Bank)","Total"]
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},{key:"Number of Beneficiaries",value:"Number_of_Beneficiaries"},	{key:"Term Loan",value:"Term_Loan"},	{key:"Bank Loan",value:"Bank_Loan"},	{key:"Margin Money",value:"Margin_Money"},{key:"Subsidy",value:"Subsidy"},{key:"Total",value:"Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Mahila Samridhi Scheme (0.30) (NSFDC)","Small Business (0.50) (NSFDC)","Mahila Samridhi Scheme (0.30) (NSKFDC)","MahilaSamridhi Scheme (0.50) (NSKFDC)","Micro Credit Finance Scheme (0.30) (NSKFDC)","Micro Credit Finance Scheme (0.50) (NSKFDC)","Term Loan Scheme (0.50) (NSKFDC)","Term Loan Scheme (1.00) (NSKFDC)","Subsidy Scheme (executed through Bank)","Total"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison  = ["None"]
        } else {
          this.Comparison = ["None","Mahila Samridhi Scheme (0.30) (NSFDC)","Small Business (0.50) (NSFDC)","Mahila Samridhi Scheme (0.30) (NSKFDC)","MahilaSamridhi Scheme (0.50) (NSKFDC)","Micro Credit Finance Scheme (0.30) (NSKFDC)","Micro Credit Finance Scheme (0.50) (NSKFDC)","Term Loan Scheme (0.50) (NSKFDC)","Term Loan Scheme (1.00) (NSKFDC)","Subsidy Scheme (executed through Bank)","Total"]
        }
    }
    
  onSubmit(user) {
    var controller = "social_welfare1s"

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
      
      var controller = "social_welfare1s"
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













