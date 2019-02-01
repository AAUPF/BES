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
import { ViewsNotDistrict } from '../data/viewsnotdistrict';

declare var $:any
interface years<> {
  id: number;  any
}
declare var CanvasJS:any;
let f = new Functions();

@Component({
  selector: 'app-irrigation2',
  templateUrl: './irrigation2.component.html',
  styleUrls: ['./irrigation2.component.css']
})
export class Irrigation2Component implements OnInit {
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
  Districts = ["All", "Western Kosi Canal System","Durgawati Reservoir Scheme","Lavaich Rampur Barrage","Uderasthan Barrage Scheme","Solhanda Weir Scheme","Nusratpur weir Scheme","Siwan weir Scheme","Eastern Gandak Canal Phase II","Total"];
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  years = [2016, 2017];
  views = ViewsNotDistrict;
  rain_fall_type = [{key:"Created Irrigation Potential",value:"Created_Irrigation_Potential"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
  Comparison = ["None", "Western Kosi Canal System","Durgawati Reservoir Scheme","Lavaich Rampur Barrage","Uderasthan Barrage Scheme","Solhanda Weir Scheme","Nusratpur weir Scheme","Siwan weir Scheme","Eastern Gandak Canal Phase II","Total"];
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data == {years: null, views: "",Comparison: ""};
      this.data.Comparison  = "None"
      this.Comparison = ["None"];
    } else {
      this.butDisabled = false;
      this.Comparison = ["None", "Western Kosi Canal System","Durgawati Reservoir Scheme","Lavaich Rampur Barrage","Uderasthan Barrage Scheme","Solhanda Weir Scheme","Nusratpur weir Scheme","Siwan weir Scheme","Eastern Gandak Canal Phase II","Total"];
    }
    
    }
    onSubmit(user) {
      var controller = "irrigation2s"
  
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


