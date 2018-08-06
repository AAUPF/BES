import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { NewViews } from '../data/newviews';
import{Functions} from '../data/func';
import { ViewsNotMap } from '../data/viewsnotmap';

declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();

declare var CanvasJS:any;
@Component({
  selector: 'app-irrigation1',
  templateUrl: './irrigation1.component.html',
  styleUrls: ['./irrigation1.component.css']
})
export class Irrigation1Component implements OnInit {
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
  // Districts = ["All", "MajorandMediumIrrigation","MinorIrrigation","SurfaceIrrigation","GroundWater","Total"];
  Districts = [{key: "All", value: "All"},{key:"Major and Medium Irrigation",value:"Major and Medium Irrigation"},	{key:"Minor Irrigation",value:"Minor Irrigation"},	{key:"Surface Irrigation",value:"Surface Irrigation"},{key:"Ground Water",value:"Ground Water"},{key:"Total",value:"Total"}]
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  // views = NewViews;
  views = ViewsNotMap;

  rain_fall_type = [{key: "All", value: "All"},{key:"Ultimate Potential",value:"Ultimate_Potential"},	{key:"Created Potential",value:"Created_Potential"},	{key:"Utilised Potential",value:"Utilised_Potential"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = [{key: "None", value: "None"},{key:"Major and Medium Irrigation",value:"MajorandMediumIrrigation"},	{key:"Minor Irrigation",value:"MinorIrrigation"},	{key:"Surface Irrigation",value:"SurfaceIrrigation"},{key:"Ground Water",value:"GroundWater"},{key:"Total",value:"Total"}]

    // Comparison = ["None"]
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data == {years: null, views: "",Comparison: ""};
      this.data.Comparison  = undefined
      this.butDisabled = true;

    } else {
      this.butDisabled = false;
    }
    
    }
    toHide(selected){
      if(selected == "All"){
        this.Comparison = [{key: "None", value: "None"}]
      }else{
        this.Comparison = [{key: "None", value: "None"},{key:"Major and Medium Irrigation",value:"MajorandMediumIrrigation"},	{key:"Minor Irrigation",value:"MinorIrrigation"},	{key:"Surface Irrigation",value:"SurfaceIrrigation"},{key:"Ground Water",value:"GroundWater"},{key:"Total",value:"Total"}]

      }
    }
    onSubmit(user) {
      var controller = "irrigation1s"
  
      if (user.view !== "Map View") {
  
        console.log("errror");
        
        this.visbile_chart= true;
        this.visbile= false;
        this.visbile_table= false;
        // this.AgricultureService.pie();
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
        // this.AgricultureService.barchart();
        this.visbile_chart= false;
        this.visbile= true;
        this.visbile_table= false;
        this.title =user.rain_fall_type;
        // this.SvgService.test("echamparan");
        var controller = "animal_husbandry6s"
        this.spinner.show();
        setTimeout(function() {
          //  that.SvgService.test("echamparan");
              that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
              var u = "wchamparan";
              that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
        }, 500);
        // this.SvgService.svg();
        
      }
  
    }  

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }

}

