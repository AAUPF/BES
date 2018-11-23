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
  selector: 'app-municipal-finances',
  templateUrl: './municipal-finances.component.html',
  styleUrls: ['./municipal-finances.component.css']
})
export class MunicipalFinancesComponent implements OnInit {

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
  Districts = ["Revenue Income","Revenue Expenditure","Key Indicator's"]
  years = [
    {key:"All",value:"All"},
    {key:"2014-15",value:"2014-15"},
    {key:"2015-16",value:"2015-16"},
    
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"BRGF",value:"BRGF"},
    {key:"RGPSA",value:"RGPSA"},
    {key:"MMGY",value:"MMGY"},
    {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
    {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
    {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
    {key:"Construction of Panchayat Sarkar Bhawan",value:"Construction of Panchayat Sarkar Bhawan"},
    {key:"Contingency Grant",value:"Contingency Grant"},
    {key:"Payment and Allowance to GP members/ functionaries",value:"Payment and Allowance to GP members/ functionaries"},
    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"(a) Self -Generated Income",value:"(a) Self -Generated Income"},
{key:"(i) Holding Tax",value:"(i) Holding Tax"},
{key:"(ii) Other Tax",value:"(ii) Other Tax"},
{key:"(iii) Non Taxes",value:"(iii) Non Taxes"},
{key:"(b) Assigned Income ",value:"(b) Assigned Income "},
{key:"(c) Revenue  Grants ",value:"(c) Revenue  Grants "},
{key:"(d) Other Income/Receipts",value:"(d) Other Income/Receipts"},
  ]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        
      } else {
        this.data.Comparison = "None"
        this.Comparison = [
          {key:"None",value:"None"},
          {key:"BRGF",value:"BRGF"},
          {key:"RGPSA",value:"RGPSA"},
          {key:"MMGY",value:"MMGY"},
          {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
          {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
          {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
          {key:"Construction of Panchayat Sarkar Bhawan",value:"Construction of Panchayat Sarkar Bhawan"},
          {key:"Contingency Grant",value:"Contingency Grant"},
          {key:"Payment and Allowance to GP members/ functionaries",value:"Payment and Allowance to GP members/ functionaries"},
          
          // {key:"Total Expenditure on Road and Bridges",value:"Total Expenditure on Road and Bridges"},
          // {key:"Revenue Expenditure on Road and Bridges",value:"Revenue Expenditure on Road and Bridges"},
          // {key:"Capital Expenditure on Road and Bridges",value:"Capital Expenditure on Road and Bridges"},
          // {key:"Expenditure on Economic Services",value:"Expenditure on Economic Services"},
          // {key:"Development Expenditure",value:"Development Expenditure"},
          // {key:"Total Budget",value:"Total Budget"},
          // {key:"GSDP",value:"GSDP"},
          
        ]
        
      }
    
    }
    toView(view){
  // if (view == "line") {
  //   this.years = ["All"];
  // } else {
  //   if (this.data.rain_fall_type == "All") {
  //     this.years = ["2015","2016_RE","2017_RE"];
  //   } else {
  //     this.years = ["All","2015","2016_RE","2017_RE"];
  //   }
    
  // }
    }
      toSet(select){
        if (select == "Revenue Income") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        {key:"(a) Self -Generated Income",value:"(a) Self -Generated Income"},
        {key:"(i) Holding Tax",value:"(i) Holding Tax"},
        {key:"(ii) Other Tax",value:"(ii) Other Tax"},
        {key:"(iii) Non Taxes",value:"(iii) Non Taxes"},
        {key:"(b) Assigned Income ",value:"(b) Assigned Income "},
        {key:"(c) Revenue  Grants ",value:"(c) Revenue  Grants "},
        {key:"(d) Other Income/Receipts",value:"(d) Other Income/Receipts"},
      
  ]
           
        }  else if (select == "Revenue Expenditure") {


          this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"(a) Establishment ",value:"(a) Establishment "},
            {key:"(b) Programme",value:"(b) Programme"},
            {key:"(c) Operation/ Maintenance ",value:"(c) Operation/ Maintenance "},
            {key:"(d) Finance /Interest",value:"(d) Finance /Interest"},
            {key:"(e) Others",value:"(e) Others"},
            {key:"Total ",value:"Total "},
            {key:"Capital Grants",value:"Capital Grants"},
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"Self-Generated Income/ Revenue Income (Percentage)",value:"Self-Generated Income/ Revenue Income (Percentage)"},
            {key:"Self-Generated Income/ Establishment Expenditure (Percentage)",value:"Self-Generated Income/ Establishment Expenditure (Percentage)"},
           ]
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
    var controller = "municipal_finances"

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
      var controller = "roads2s"
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
