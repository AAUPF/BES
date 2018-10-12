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
  selector: 'app-non-agro-based-industries1',
  templateUrl: './non-agro-based-industries1.component.html',
  styleUrls: ['./non-agro-based-industries1.component.css']
})
export class NonAgroBasedIndustries1Component implements OnInit {
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
  // Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","Bhagalpur","Banka","Gaya","Nalanda","Nawada","Darbhanga, Madhubani, Sitamarhi","Aurangabad, Rohtas","Kaimur","Patna, Siwan","Purnea, Katihar"]
  //  years = [2016, 2017];
  // views =[{key: "Table", value: "Table"}];
  rain_fall_type = [{key:"Products",value:"Products"}]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = ["None","Bihar vs District"]
    data: any = {};    
    // toNumber(d) {
    //     if (d == "All") {
    //       this.data == {years: null, views: "",Comparison: ""};
    //       this.data.Comparison  = undefined
    //       this.butDisabled = true;

    //     } else {
    //       this.butDisabled = false;
    //     }
    // }
    // toHide(view){
    //   if(view=="Map View"){
    //     this.rain_fall_type = [{key:"Target Physical",value:"Target_Physical"},	{key:"Target Financial",value:"Target_Financial"},	{key:"Achievement Physical",value:"Achievement_Physical"},	{key:"Achievement Financial",value:"Achievement_Financial"}]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }else{
    //     this.rain_fall_type = [{key: "All", value: "All"},{key:"Target Physical",value:"Target_Physical"},	{key:"Target Financial",value:"Target_Financial"},	{key:"Achievement Physical",value:"Achievement_Physical"},	{key:"Achievement Financial",value:"Achievement_Financial"}]
    //     this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    //   }
    // }
  onSubmit(user) {
    user.view = "Table"
    var controller = "non_agro_based_industries1s"

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
      
      var controller = "non_agro_based_industries1s"
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














