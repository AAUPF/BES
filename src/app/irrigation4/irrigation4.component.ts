import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Location } from '@angular/common';
import { ViewsNotMap } from '../data/viewsnotmap';
import{Functions} from '../data/func';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-irrigation4',
  templateUrl: './irrigation4.component.html',
  styleUrls: ['./irrigation4.component.css']
})
export class Irrigation4Component implements OnInit {
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
  Districts = ["Number"];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = [2016, 2017];
  // views = NewViews;
  views = ViewsNotMap;

  rain_fall_type = [{key: "All", value: "All"},{key:"Management of irrigation System Transferred",value:"Management_of_irrigation_System_Transferred"},	{key:"Societies ready for transfer of system",value:"Societies_ready_for_transfer_of_system"},	{key:"Applied for Registration",value:"Applied_for_Registration"},	{key:"Under the process of motivation",value:"Under_the_process_of_motivation"},	{key:"Total",value:"Total"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = [{key: "None", value: "None"},{key:"Management of irrigation System Transferred",value:"Management_of_irrigation_System_Transferred"},	{key:"Societies ready for transfer of system",value:"Societies_ready_for_transfer_of_system"},	{key:"Applied for Registration",value:"Applied_for_Registration"},	{key:"Under the process of motivation",value:"Under_the_process_of_motivation"},	{key:"Total",value:"Total"}]
    Comparison_sort = this.Comparison.sort(f.compare);
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
    onSubmit(user) {
      var controller = "irrigation4s"
  
      if (user.view !== "Map View") {
  
        
        
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
        var controller = "irrigation4s"
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
  // test(a) {
  //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
  //   let svgDoc = map.contentDocument; // should be fine
  //   let echamparan = svgDoc.getElementById(a);
  //   echamparan.classList.add("mystyle");
  //   console.log(echamparan); 
  // }

  myEvent(event) {
    var n =  new TableExport(document.getElementsByTagName("table"));
  }

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }

}



