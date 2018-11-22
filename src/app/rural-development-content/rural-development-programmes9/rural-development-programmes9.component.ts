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
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-rural-development-programmes9',
  templateUrl: './rural-development-programmes9.component.html',
  styleUrls: ['./rural-development-programmes9.component.css']
})
export class RuralDevelopmentProgrammes9Component implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);
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
  rain_fall_type = [{key: "All", value: "All"},{key:"Number of Dealers",value:"Number_of_Dealers"},	{key:"Dealers belonging to SC or ST",value:"Dealers_belonging_to_SC_or_ST"},	{key:"Dealers belonging to BC or EBC",value:"Dealers_belonging_to_BC_or_EBC"},	{key:"Dealers belonging to Minority",value:"Dealers_belonging_to_Minority"},{key:"Dealers belonging to Women",value:"Dealers_belonging_to_Women"},{key:"Dealers belonging to Women or Other SHG",value:"Dealers_belonging_to_Women_or_Other_SHG"},{key:"Dealers from Helper Samiti or PACS or Samiti of ExArmy Personnel",value:"Dealers_from_Helper_Samiti_or_PACS_or_Samiti_of_ExArmy_Personnel"},{key:"Dealers belonging to General",value:"Dealers_belonging_to_General"},{key:"Total",value:"Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = Comparedistrictswithoutbihar
    data: any = {};    
    toNumber(d) {
        if (d == "All") {
          this.data.Comparison = "None"
          this.Comparison = ["None"]

        } else {
          this.Comparison = Comparedistrictswithoutbihar
        }
    }
    toHide(view){
      if(view=="Map View"){
        this.rain_fall_type = [{key:"Number of Dealers",value:"Number_of_Dealers"},	{key:"Dealers belonging to SC or ST",value:"Dealers_belonging_to_SC_or_ST"},	{key:"Dealers belonging to BC or EBC",value:"Dealers_belonging_to_BC_or_EBC"},	{key:"Dealers belonging to Minority",value:"Dealers_belonging_to_Minority"},{key:"Dealers belonging to Women",value:"Dealers_belonging_to_Women"},{key:"Dealers belonging to Women or Other SHG",value:"Dealers_belonging_to_Women_or_Other_SHG"},{key:"Dealers from Helper Samiti or PACS or Samiti of ExArmy Personnel",value:"Dealers_from_Helper_Samiti_or_PACS_or_Samiti_of_ExArmy_Personnel"},{key:"Dealers belonging to General",value:"Dealers_belonging_to_General"},{key:"Total",value:"Total"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }else{
        this.rain_fall_type = [{key: "All", value: "All"},{key:"Number of Dealers",value:"Number_of_Dealers"},	{key:"Dealers belonging to SC or ST",value:"Dealers_belonging_to_SC_or_ST"},	{key:"Dealers belonging to BC or EBC",value:"Dealers_belonging_to_BC_or_EBC"},	{key:"Dealers belonging to Minority",value:"Dealers_belonging_to_Minority"},{key:"Dealers belonging to Women",value:"Dealers_belonging_to_Women"},{key:"Dealers belonging to Women or Other SHG",value:"Dealers_belonging_to_Women_or_Other_SHG"},{key:"Dealers from Helper Samiti or PACS or Samiti of ExArmy Personnel",value:"Dealers_from_Helper_Samiti_or_PACS_or_Samiti_of_ExArmy_Personnel"},{key:"Dealers belonging to General",value:"Dealers_belonging_to_General"},{key:"Total",value:"Total"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }
    }
  onSubmit(user) {
    var controller = "rural_development_programmes9s"

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
      var controller = "rural_development_programmes9s"
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






