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
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-tax-department3',
  templateUrl: './tax-department3.component.html',
  styleUrls: ['./tax-department3.component.css']
})
export class TaxDepartment3Component implements OnInit {
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
  Districts = ["All","Petro Products","Electrical Goods","Cement","Unregistered Dealer Works Contractor","FMCG","Four Wheelers and Chassis of Automobile","Crude Oil","Works Contract and TDS","Two and Three Wheelers","Drugs and Medicines"," Others"]
  years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17"];
  views = ViewsNotMap
  rain_fall_type = [{key:"All",value:"All"},{key:"Collection",value:"Collection"},{key:"Rate of Growth",value:"Rate_of_Growth"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = ["None","Petro Products","Electrical Goods","Cement","Unregistered Dealer Works Contractor","FMCG","Four Wheelers and Chassis of Automobile","Crude Oil","Works Contract and TDS","Two and Three Wheelers","Drugs and Medicines"," Others"]
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      this.data.Comparison = "None"
      this.Comparison = ["None"]
      
    } else {
      this.Comparison = ["None","Petro Products","Electrical Goods","Cement","Unregistered Dealer Works Contractor","FMCG","Four Wheelers and Chassis of Automobile","Crude Oil","Works Contract and TDS","Two and Three Wheelers","Drugs and Medicines"," Others"]
      
    }
    }
    toHide(view){
      
        if (view == "line") {
          this.years = ["All"];
        } else {
          if (this.data.rain_fall_type == "All") {
            this.years = ["2012-13", "2013-14","2014-15","2015-16","2016-17"];
          }
          else if(this.data.rain_fall_type == "Rate_of_Growth")
          {
            this.years = ["All","2013-14","2014-15","2015-16","2016-17"];
          }
          else {
            this.years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17"];
          }
          
        }
        // this.years = ["All",2001, 2011];
        if(this.data.years == "2012-13"){
          this.rain_fall_type = [{key:"Collection",value:"Collection"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }else{
          if(this.data.years == "All"){
            this.rain_fall_type = [{key:"Collection",value:"Collection"},{key:"Rate of Growth",value:"Rate_of_Growth"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }else{
            this.rain_fall_type = [{key:"All",value:"All"},{key:"Collection",value:"Collection"},{key:"Rate of Growth",value:"Rate_of_Growth"}]
            this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
          }
          
        }
        
      
    }
toGet(type){
    if (type == "Rate_of_Growth") {
      if (this.data.view=="line") {
        this.years = ["All"];
      } else {
        this.years = ["All", "2013-14","2014-15","2015-16","2016-17"];
      }
    }
    else if(type == "All"){
      this.years = ["2012-13", "2013-14","2014-15","2015-16","2016-17"];
      this.views = ViewsNotDistrict
    }
    else {
      if (this.data.view=="line") {
        this.years = ["All"];
      } else {
        this.years = ["All","2012-13", "2013-14","2014-15","2015-16","2016-17"];
      }
      
    }
}
    toYear(year){
      
        if(year == "All"){
          this.views = ViewsNotMap
          this.rain_fall_type = [{key:"Collection",value:"Collection"},{key:"Rate of Growth",value:"Rate_of_Growth"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        else{
          this.views = ViewsNotDistrict
          if(year == "2012-13") {
            this.rain_fall_type = [{key:"Collection",value:"Collection"}]
              this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
            
          }else{
          
          this.rain_fall_type = [{key:"All",value:"All"},{key:"Collection",value:"Collection"},{key:"Rate of Growth",value:"Rate_of_Growth"}]
          this.rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
        }
        }
    
    }
  onSubmit(user) {
    var controller = "tax_department3s"

    if (user.view !== "Map View") {

      console.log("errror");
      
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
      
      var controller = "tax_department3s"
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



















