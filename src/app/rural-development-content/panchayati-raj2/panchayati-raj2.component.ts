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
  selector: 'app-panchayati-raj2',
  templateUrl: './panchayati-raj2.component.html',
  styleUrls: ['./panchayati-raj2.component.css']
})
export class PanchayatiRaj2Component implements OnInit {
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
  Districts = ["Gram Panchayat","Panchayat Samiti","Zila Parishad"]
  years = [
    {key:"All",value:"All"},
    {key:"2013 14 Actual",value:"2013_14_Actual"},
    {key:"2014 15 Actual",value:"2014_15_Actual"},
    {key:"2015 16 Actual",value:"2015_16_Actual"},
    {key:"2016 17 BE",value:"2016_17_BE"},
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
          {key:"Payment and Allowance to GP members/ functionaries",value:"Payment and Allowance to GP members/ functionaries"},,
        ]
        
      }
    
    }
    toView(view){
  if (view == "line") {
    this.years = [{key:"All",value:"All"}]
  } else {
    // if (this.data.rain_fall_type == "All") {
    //   this.years = ["2015","2016_RE","2017_RE"];
    // } else {
    //   this.years = ["All","2015","2016_RE","2017_RE"];
    // }
    this.years = [{key:"All",value:"All"},
    {key:"2013 14 Actual",value:"2013_14_Actual"},
    {key:"2014 15 Actual",value:"2014_15_Actual"},
    {key:"2015 16 Actual",value:"2015_16_Actual"},
    {key:"2016 17 BE",value:"2016_17_BE"}]
  }
    }
      toSet(select){
        if (select == "Gram Panchayat") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        
        {key:"BRGF",value:"BRGF"},
        {key:"RGPSA",value:"RGPSA"},
        {key:"MMGY",value:"MMGY"},
        {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
        {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
        {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
        {key:"Construction of Panchayat Sarkar Bhawan",value:"Construction of Panchayat Sarkar Bhawan"},
        {key:"Contingency Grant",value:"Contingency Grant"},
        {key:"Payment and Allowance to GP members/ functionaries",value:"Payment and Allowance to GP members/ functionaries"},
        {key:"Total",value:"Total"},
      
  ]
           
        }  else if (select == "Panchayat Samiti") {


          this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"BRGF",value:"BRGF"},
            {key:"RGPSA",value:"RGPSA"},
            {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
            {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
            {key:"Allowance to PS  members",value:"Allowance to PS  members"},
            {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
            {key:"Total",value:"Total"},
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"BRGF",value:"BRGF"},
            {key:"RGPSA",value:"RGPSA"},
            {key:"Union Finance Commission Grants",value:"Union Finance Commission Grants"},
            {key:"State Finance Commission Grants",value:"State Finance Commission Grants"},
            {key:"Allowance to ZP  members",value:"Allowance to ZP  members"},
            {key:"Mukhya Mantri Saat Nishchay Yojana",value:"Mukhya Mantri Saat Nishchay Yojana"},
            {key:"Total",value:"Total"},
            {key:"Grand Total",value:"Grand Total"},
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
    var controller = "panchayati_raj2s"

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
