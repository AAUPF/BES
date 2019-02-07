import { Component, OnInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { AgricultureService } from '../../services/agriculture.service';
import { Districts } from '../../data/districts';
import { ModalComponent } from '../../modal/modal.component';
import { SvgcomponentComponent } from '../../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../../node_modules/tableexport';
import { Views } from '../../data/views';
import { Location } from '@angular/common';
import{Functions} from '../../data/func';
import { NewViews } from '../../data/newviews';
import { ViewsNotMap } from '../../data/viewsnotmap';
import { ViewsNotTrend } from '../../data/viewsnottrend';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-demographic-profile2',
  templateUrl: './demographic-profile2.component.html',
  styleUrls: ['./demographic-profile2.component.css']
})
export class DemographicProfile2Component implements OnInit {
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
  Districts = Districts;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;

  years = ["All",2001, 2011];
  views = NewViews;
  rain_fall_type = [{key:"All",value:"All"},{key:"Population",value:"Population"},{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Bihar"]
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison  = "None"
      this.Comparison = ["None"]
      // this.data.Comparison  = undefined
      // this.butDisabled = true;
    } else {
      this.Comparison = ["None","Bihar"]
      // this.butDisabled = false;
    }
    }
    toHide(view){
      if(view == "Map View"){
        this.years = [2001, 2011];
        if(this.data.years == "2001"){
          this.rain_fall_type = [{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Percentage Population",value:"Percentage_Population"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
        this.rain_fall_type = [{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
        this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
      }
      }else{
        if (view == "line") {
          this.years = ["All"];
        } else {
          this.years = ["All",2001, 2011];
        }
        // this.years = ["All",2001, 2011];
        if(this.data.years == "2001"){
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
          if(this.data.years == "All"){
            this.rain_fall_type = [{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }else{
            this.rain_fall_type = [{key:"All",value:"All"},{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
            this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }
          
        }
        
      }
    }
toGet(type){
    if (type == "Decadal_Growth") {
      this.years = ["All", 2011];
    }
    else if(type == "All"){
      this.years = [2001, 2011];
      this.views = ViewsNotMap
    }
    else {
      if (this.data.view == "Map View") {
        this.years = [2001, 2011];
      } else {
        this.years = ["All",2001, 2011];
      }
    }
}
    toYear(year){
      if(year == 2001) {
        this.views = ViewsNotTrend
        if(this.data.views == "Map View"){
          this.rain_fall_type = [{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        
        else{
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        
      }
      else{
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = [{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        else{
          this.views = ViewsNotTrend
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Population",value:"Population"},	{key:"Sex Ratio Overall",value:"Sex_Ratio_Overall"},{key:"Sex Ratio Child",value:"Sex_Ratio_Child"},{key:"Density",value:"Density"},{key:"Urbanisation",value:"Urbanisation"},{key:"Decadal Growth",value:"Decadal_Growth"},{key:"Percentage Population",value:"Percentage_Population"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
    }
    }
  onSubmit(user) {
    var controller = "demographic_profile2s"

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
      this.title =user.rain_fall_type;
      
      var controller = "demographic_profile2s"
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

  ngOnInit() {

  
   
    // var n =  new TableExport(document.getElementsByTagName("table"));
// this.AgricultureService.testgoogle()


  
  }

}



















