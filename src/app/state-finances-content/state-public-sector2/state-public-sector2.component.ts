import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Districtswithoutbihar } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-state-public-sector2',
  templateUrl: './state-public-sector2.component.html',
  styleUrls: ['./state-public-sector2.component.css']
})
export class StatePublicSector2Component implements OnInit {
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
  Districts = ["All","Working","Non-Working"]
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  views = ViewsNotDistrict
  rain_fall_type = [{key: "All", value: "All"},{key:"Government Companies Capital",value:"Government_Companies_Capital"},	{key:"Government Companies Long Term Loans",value:"Government_Companies_Long_Term_Loans"},	{key:"Total Government Companies",value:"Total_Government_Companies"},	{key:"Statutory Corporations Capital",value:"Statutory_Corporations_Capital"},{key:"Statutory Corporations Long Term Loans",value:"Statutory_Corporations_Long_Term_Loans"},{key:"Total Statutory Corporations",value:"Total_Statutory_Corporations"},{key:"Grand Total",value:"Grand_Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = [{key: "None", value: "None"},{key:"Government Companies Capital",value:"Government_Companies_Capital"},	{key:"Government Companies Long Term Loans",value:"Government_Companies_Long_Term_Loans"},	{key:"Total Government Companies",value:"Total_Government_Companies"},	{key:"Statutory Corporations Capital",value:"Statutory_Corporations_Capital"},{key:"Statutory Corporations Long Term Loans",value:"Statutory_Corporations_Long_Term_Loans"},{key:"Total Statutory Corporations",value:"Total_Statutory_Corporations"},{key:"Grand Total",value:"Grand_Total"}]
    Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {
        if (d == "All") {
          this.data.Comparison = "None"
          this.Comparison = [{key: "None", value: "None"}]
          this.Comparison_sort = this.Comparison.sort(f.compare);

        } else {
          this.Comparison = [{key: "None", value: "None"},{key:"Government Companies Capital",value:"Government_Companies_Capital"},	{key:"Government Companies Long Term Loans",value:"Government_Companies_Long_Term_Loans"},	{key:"Total Government Companies",value:"Total_Government_Companies"},	{key:"Statutory Corporations Capital",value:"Statutory_Corporations_Capital"},{key:"Statutory Corporations Long Term Loans",value:"Statutory_Corporations_Long_Term_Loans"},{key:"Total Statutory Corporations",value:"Total_Statutory_Corporations"},{key:"Grand Total",value:"Grand_Total"}]
          this.Comparison_sort = this.Comparison.sort(f.compare);
        }
    }
    
  onSubmit(user) {
    var controller = "state_public_sector2s"

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
      var controller = "state_public_sector2s"
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












