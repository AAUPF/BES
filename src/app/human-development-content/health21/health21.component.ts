import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts, Comparedistrictswithoutbihar } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { Views } from '../../data/views';
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
  selector: 'app-health21',
  templateUrl: './health21.component.html',
  styleUrls: ['./health21.component.css']
})
export class Health21Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  views = ViewsNotTrend
  rain_fall_type = [{key: "All", value: "All"},{key:"Acute Diarrheal Disease",value:"Acute_Diarrheal_Disease"},	{key:"Bacillary Dysentery",value:"Bacillary_Dysentery"},	{key:"Viral Hepatitis",value:"Viral_Hepatitis"},	{key:"Enteric Fever",value:"Enteric_Fever"},{key:"Malaria",value:"Malaria"},{key:"PUO",value:"PUO"},{key:"Acute Respiratory Infection",value:"Acute_Respiratory_Infection"},{key:"Pneumonia",value:"Pneumonia"},{key:"Dogbite",value:"Dogbite"},{key:"Other State Specific Disease",value:"Other_State_Specific_Disease"},{key:"Unusual Syndromes Not Captured",value:"Unusual_Syndromes_Not_Captured"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None","Bihar vs District"]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ["None"]

      } else {
        if (this.data.view == "Map View") {
          this.data.Comparison = "None"
        this.Comparison = ["None"]
        } else {
          this.Comparison = Comparedistrictswithoutbihar
        }
      }
  }
  toHide(view){
    if(view=="Map View"){
      this.data.Comparison = "None"
      this.Comparison = ["None"]
      this.rain_fall_type = [{key:"Acute Diarrheal Disease",value:"Acute_Diarrheal_Disease"},	{key:"Bacillary Dysentery",value:"Bacillary_Dysentery"},	{key:"Viral Hepatitis",value:"Viral_Hepatitis"},	{key:"Enteric Fever",value:"Enteric_Fever"},{key:"Malaria",value:"Malaria"},{key:"PUO",value:"PUO"},{key:"Acute Respiratory Infection",value:"Acute_Respiratory_Infection"},{key:"Pneumonia",value:"Pneumonia"},{key:"Dogbite",value:"Dogbite"},{key:"Other State Specific Disease",value:"Other_State_Specific_Disease"},{key:"Unusual Syndromes Not Captured",value:"Unusual_Syndromes_Not_Captured"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    }else{
      this.rain_fall_type = [{key: "All", value: "All"},{key:"Acute Diarrheal Disease",value:"Acute_Diarrheal_Disease"},	{key:"Bacillary Dysentery",value:"Bacillary_Dysentery"},	{key:"Viral Hepatitis",value:"Viral_Hepatitis"},	{key:"Enteric Fever",value:"Enteric_Fever"},{key:"Malaria",value:"Malaria"},{key:"PUO",value:"PUO"},{key:"Acute Respiratory Infection",value:"Acute_Respiratory_Infection"},{key:"Pneumonia",value:"Pneumonia"},{key:"Dogbite",value:"Dogbite"},{key:"Other State Specific Disease",value:"Other_State_Specific_Disease"},{key:"Unusual Syndromes Not Captured",value:"Unusual_Syndromes_Not_Captured"}]
      this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      this.Comparison = Comparedistrictswithoutbihar
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
    var controller = "health21s"

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
      var controller = "health21s"
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














