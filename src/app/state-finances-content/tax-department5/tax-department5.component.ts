import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Districtswithoutbihar, Comparedistrictswithoutbihar } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
import { ViewsNotTrend } from '../../data/viewsnottrend';
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-tax-department5',
  templateUrl: './tax-department5.component.html',
  styleUrls: ['./tax-department5.component.css']
})
export class TaxDepartment5Component implements OnInit {
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
  Districts = Districtswithoutbihar
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  views = ViewsNotTrend
  rain_fall_type = [{key: "All", value: "All"},{key:"Number of Document",value:"Number_of_Document"},	{key:"Total Receipt",value:"Total_Receipt"},	{key:"Target",value:"Target"},	{key:"Percentage receipt against target",value:"Percentage_receipt_against_target"},{key:"Receipt per Document",value:"Receipt_per_Document"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","District vs Total"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ["None"]

      } 
      else {
        this.Comparison = Comparedistrictswithoutbihar
        
      }
  }
  toHide(view){
    if(view=="Map View"){
      this.data.Comparison = "None"
      this.Comparison = ["None"]
      this.rain_fall_type = [{key:"Number of Document",value:"Number_of_Document"},	{key:"Total Receipt",value:"Total_Receipt"},	{key:"Target",value:"Target"},	{key:"Percentage receipt against target",value:"Percentage_receipt_against_target"},{key:"Receipt per Document",value:"Receipt_per_Document"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    }else{
      this.rain_fall_type = [{key: "All", value: "All"},{key:"Number of Document",value:"Number_of_Document"},	{key:"Total Receipt",value:"Total_Receipt"},	{key:"Target",value:"Target"},	{key:"Percentage receipt against target",value:"Percentage_receipt_against_target"},{key:"Receipt per Document",value:"Receipt_per_Document"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      if(this.data.districts == "All"){
        this.data.Comparison = "None"
        this.Comparison = ["None"]

      }else{
        this.Comparison = Comparedistrictswithoutbihar
      }
    }
  }
  toMap(data){
    if (data=="All") {
      this.views = ViewsNotDistrict
    } else {
      this.views = ViewsNotTrend
    }
  }
  onSubmit(user) {
    var controller = "tax_department5s"

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
      var controller = "tax_department5s"
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












