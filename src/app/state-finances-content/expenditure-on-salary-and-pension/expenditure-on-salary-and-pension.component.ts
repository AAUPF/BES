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
import { ViewsNotDistrict } from '../../data/viewsnotdistrict';
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-expenditure-on-salary-and-pension',
  templateUrl: './expenditure-on-salary-and-pension.component.html',
  styleUrls: ['./expenditure-on-salary-and-pension.component.css']
})
export class ExpenditureOnSalaryAndPensionComponent implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  title = ""
  butDisabled: boolean = false;

  public loading = false;

  htmlContent:string;
  visbile= false;
  visbile_chart= true;
  visbile_table= false;
  Districts = ["All","Expenditure on Salaries","Expenditure on Pensions","Total expenditure on Salary and Pension"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17","2017-18_BE"];
  views = ViewsNotMap;
  Comparison = [
    {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
    {key:"Mining and Quarrying",value:"Mining and Quarrying"},
  ]
  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Non-Plan Head",value:"Non-Plan Head"},
    {key:"Plan Head",value:"Plan Head"},
    {key:"Salary as percentage of GSDP",value:"Salary as percentage of GSDP"},
    {key:"Salary as percentage of RR",value:"Salary as percentage of RR"},
    {key:"Salary as percentage of RE",value:"Salary as percentage of RE"},
    {key:"None",value:"None"}
  ]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    data: any = {};    
    toNumber(d) {
    
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    if (this.data.rain_fall_type == "All") {
      this.years = ["2015","2016_RE","2017_RE"];
    } else {
      this.years = ["All","2015","2016_RE","2017_RE"];
    }
    
  }
    }
      toSet(select){
        if (select == "Expenditure on Salaries") {    
          this.data.rain_fall_type = "All"    
      this.rain_fall_type_sort = [
        {key:"All",value:"All"},
        {key:"Non-Plan Head",value:"Non-Plan Head"},
        {key:"Plan Head",value:"Plan Head"},
        {key:"Salary as percentage of GSDP",value:"Salary as percentage of GSDP"},
        {key:"Salary as percentage of RR",value:"Salary as percentage of RR"},
        {key:"Salary as percentage of RE",value:"Salary as percentage of RE"},
        {key:"None",value:"None"},
  ]
        }  else if (select == "Expenditure on Pensions") {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Rate of Growth",value:"Rate of Growth"},
            {key:"Pension as percentage of GSDP",value:"Pension as percentage of GSDP"},
            {key:"Pension as percentage of RR",value:"Pension as percentage of RR"},
            {key:"Pension as percentage of RE",value:"Pension as percentage of RE"},
            {key:"Salary as percentage of RE",value:"Salary as percentage of RE"},
            {key:"None",value:"None"},
          ]
        }

        else if (select == "Total expenditure on Salary and Pension") {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [
            {key:"All",value:"All"},
            {key:"Total as percentage of GSDP",value:"Total as percentage of GSDP"},
            {key:"Total as percentage of RR",value:"Total as percentage of RR"},
            {key:"Total as percentage of RE",value:"Total as percentage of RE"},
            {key:"None",value:"None"},
          ]
        }
        
        else {
          this.data.rain_fall_type = "All" 
          this.rain_fall_type_sort = [ 
            {key:"All",value:"All"},
            {key:"Non-Plan Head",value:"Non-Plan Head"},
            {key:"Plan Head",value:"Plan Head"},
            {key:"Salary as percentage of GSDP",value:"Salary as percentage of GSDP"},
            {key:"Salary as percentage of RR",value:"Salary as percentage of RR"},
            {key:"Salary as percentage of RE",value:"Salary as percentage of RE"},
            {key:"Rate of Growth",value:"Rate of Growth"},
            {key:"Pension as percentage of GSDP",value:"Pension as percentage of GSDP"},
            {key:"Pension as percentage of RR",value:"Pension as percentage of RR"},
            {key:"Pension as percentage of RE",value:"Pension as percentage of RE"},
            {key:"Salary as percentage of RE",value:"Salary as percentage of RE"},
            {key:"Total as percentage of GSDP",value:"Total as percentage of GSDP"},
            {key:"Total as percentage of RR",value:"Total as percentage of RR"},
            {key:"Total as percentage of RE",value:"Total as percentage of RE"},
          ]
        }
      }
      toYear(year){
        if(year == "All"){
          this.data.views = "column"
          this.views = ViewsNotMap
         
        }else{
          this.data.views = "column"
          this.views  = ViewsNotDistrict
         
        }
      }
    
  onSubmit(user) {
    var controller = "expenditure_on_salary_and_pensions"

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
      var controller = "fiscal_performance1s"
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
