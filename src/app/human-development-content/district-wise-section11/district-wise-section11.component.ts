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
  selector: 'app-district-wise-section11',
  templateUrl: './district-wise-section11.component.html',
  styleUrls: ['./district-wise-section11.component.css']
})
export class DistrictWiseSection11Component implements OnInit {

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
Districts = ["Financial Allotment","Physical Achievement","Amount Allotted"]
  years = [
    "All",
    "2014-15",
    "2015-16",
    "2016-17",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;
  Comparison = [
    {key:"Maintenance of Residential School SC",value:"Maintenance of Residential School SC"},
    {key:"Hostel Maintainance SC",value:"Hostel Maintainance SC"},
  ]
  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Patna",value:"Patna"},
    {key:"Nalanda",value:"Nalanda"},
    {key:"Bhojpur",value:"Bhojpur"},
    {key:"Buxar",value:"Buxar"},
    {key:"Rohtas",value:"Rohtas"},
    {key:"Kaimur",value:"Kaimur"},
    {key:"Gaya",value:"Gaya"},
    {key:"Jehanabad",value:"Jehanabad"},
    {key:"Arwal",value:"Arwal"},
    {key:"Nawada",value:"Nawada"},
    {key:"Aurangabad",value:"Aurangabad"},
    {key:"Saran",value:"Saran"},
    {key:"Siwan",value:"Siwan"},
    {key:"Gopalganj",value:"Gopalganj"},
    {key:"West Champaran",value:"West Champaran"},
    {key:"East Champaran",value:"East Champaran"},
    {key:"Muzaffarpur",value:"Muzaffarpur"},
    {key:"Sitamarhi",value:"Sitamarhi"},
    {key:"Sheohar",value:"Sheohar"},
    {key:"Vaishali",value:"Vaishali"},
    {key:"Darbhanga",value:"Darbhanga"},
    {key:"Madhubani",value:"Madhubani"},
    {key:"Samastipur",value:"Samastipur"},
    {key:"Begusarai",value:"Begusarai"},
    {key:"Munger",value:"Munger"},
    {key:"Sheikhpura",value:"Sheikhpura"},
    {key:"Lakhisarai",value:"Lakhisarai"},
    {key:"Jamui",value:"Jamui"},
    {key:"Khagaria",value:"Khagaria"},
    {key:"Bhagalpur",value:"Bhagalpur"},
    {key:"Banka",value:"Banka"},
    {key:"Saharsa",value:"Saharsa"},
    {key:"Supaul",value:"Supaul"},
    {key:"Madhepura",value:"Madhepura"},
    {key:"Purnia",value:"Purnia"},
    {key:"Kishanganj",value:"Kishanganj"},
    {key:"Araria",value:"Araria"},
    {key:"Katihar",value:"Katihar"},
    {key:"H.Q",value:"H.Q"},
    {key:"Bihar",value:"Bihar"},
    
  ]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      // if (d == "") {
      //   this.data.Comparison = "None"
      //   this.Comparison = [{key:"None",value:"None"}]
        
      // } else {
      //   this.data.Comparison = "None"
      //   this.Comparison = [
      //     {key:"None",value:"None"},
      //     {key:"Boys",value:"Boys"},
      //     {key:"Girls",value:"Girls"},
      //     {key:"Total",value:"Total"},
          
      //     // {key:"Total Expenditure on Road and Bridges",value:"Total Expenditure on Road and Bridges"},
      //     // {key:"Revenue Expenditure on Road and Bridges",value:"Revenue Expenditure on Road and Bridges"},
      //     // {key:"Capital Expenditure on Road and Bridges",value:"Capital Expenditure on Road and Bridges"},
      //     // {key:"Expenditure on Economic Services",value:"Expenditure on Economic Services"},
      //     // {key:"Development Expenditure",value:"Development Expenditure"},
      //     // {key:"Total Budget",value:"Total Budget"},
      //     // {key:"GSDP",value:"GSDP"},
          
      //   ]
        
      // }
    
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All",
    "2014-15",
    "2015-16",
    "2016-17",
  ];
  }
    }
      toSet(select){
        if (select == "Financial Allotment") { 
          this.Comparison = [
            {key:"Maintenance of Residential School SC",value:"Maintenance of Residential School SC"},
          ]   
          this.data.Comparison = "Maintenance of Residential School SC";        
        }  else if (select == "Physical Achievement") {   
          this.Comparison = [
            {key:"Maintenance of Residential School SC",value:"Maintenance of Residential School SC"},
          ]   
          this.data.Comparison = "Maintenance of Residential School SC";      
        }
        else { 
          this.Comparison = [
            {key:"Hostel Maintainance SC",value:"Hostel Maintainance SC"},
          ]
          this.data.Comparison = "Hostel Maintainance SC";
        }
      }
      toYear(year){
        if(year == "All"){
          this.views = ViewsNotMap
         
        }else{
          this.views  = ViewsNotDistrict
         
        }
      }
    
  onSubmit(user) {
    var controller = "district_wise_section11s"

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
      var controller = "education_art_culture2s"
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
