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
  selector: 'app-education-art-culture9',
  templateUrl: './education-art-culture9.component.html',
  styleUrls: ['./education-art-culture9.component.css']
})
export class EducationArtCulture9Component implements OnInit {

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
  Districts = ["Universities","Colleges","Teacher Training Centre / Engineering Colleges"]
  years = [
          "All",
          "2013",
          "2014",
          "2015",
          "2016"
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"Central University",value:"Central University"},
{key:"State Public University",value:"State Public University"},
{key:"Institute of National Importance ",value:"Institute of National Importance "},
{key:"State Open University",value:"State Open University"},
{key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
{key:"Deemed University",value:"Deemed University"},
{key:"Total Universities",value:"Total Universities"},
{key:"Research Institute",value:"Research Institute"},
{key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
{key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
{key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
{key:"Recognized Centre",value:"Recognized Centre"},
{key:"Total Colleges",value:"Total Colleges"},
{key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
{key:"Engineering College",value:"Engineering College"},
{key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"},
    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Central University",value:"Central University"},
{key:"State Public University",value:"State Public University"},
{key:"Institute of National Importance ",value:"Institute of National Importance "},
{key:"State Open University",value:"State Open University"},
{key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
{key:"Deemed University",value:"Deemed University"},
{key:"Total Universities",value:"Total Universities"},
{key:"Research Institute",value:"Research Institute"},
{key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
{key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
{key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
{key:"Recognized Centre",value:"Recognized Centre"},
{key:"Total Colleges",value:"Total Colleges"},
{key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
{key:"Engineering College",value:"Engineering College"},
{key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"},
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
        // this.data.Comparison = "None"
        // this.Comparison = [
        //   {key:"None",value:"None"},
        //   {key:"Central University",value:"Central University"},
        //   {key:"State Public University",value:"State Public University"},
        //   {key:"Institute of National Importance ",value:"Institute of National Importance "},
        //   {key:"State Open University",value:"State Open University"},
        //   {key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
        //   {key:"Deemed University",value:"Deemed University"},
        //   {key:"Total Universities",value:"Total Universities"},
        //   {key:"Research Institute",value:"Research Institute"},
        //   {key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
        //   {key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
        //   {key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
        //   {key:"Recognized Centre",value:"Recognized Centre"},
        //   {key:"Total Colleges",value:"Total Colleges"},
        //   {key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
        //   {key:"Engineering College",value:"Engineering College"},
        //   {key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"},
        // ]
        if (this.data.districts == "Universities") {
          this.Comparison = [
            {key:"None",value:"None"},
          {key:"Central University",value:"Central University"},
          {key:"State Public University",value:"State Public University"},
          {key:"Institute of National Importance ",value:"Institute of National Importance "},
          {key:"State Open University",value:"State Open University"},
          {key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
          {key:"Deemed University",value:"Deemed University"},
          {key:"Total Universities",value:"Total Universities"},
          {key:"Research Institute",value:"Research Institute"},
          ]
        } else if(this.data.districts == "Colleges") {
          this.Comparison = [
            {key:"None",value:"None"},
            {key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
            {key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
            {key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
            {key:"Recognized Centre",value:"Recognized Centre"},
            {key:"Total Colleges",value:"Total Colleges"},
          ]
          
        }
        else{
          this.Comparison = [
            {key:"None",value:"None"},
            {key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
            {key:"Engineering College",value:"Engineering College"},
            {key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"}
           ]
        }
        
      }
    
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All",
    "2013",
    "2014",
    "2015",
    "2016"];
    
  }
    }
      toSet(select){
        if (select == "Universities") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        {key:"Central University",value:"Central University"},
        {key:"State Public University",value:"State Public University"},
        {key:"Institute of National Importance ",value:"Institute of National Importance "},
        {key:"State Open University",value:"State Open University"},
        {key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
        {key:"Deemed University",value:"Deemed University"},
        {key:"Total Universities",value:"Total Universities"},
        {key:"Research Institute",value:"Research Institute"},
        ]
        this.Comparison = [
          {key:"None",value:"None"},
        {key:"Central University",value:"Central University"},
        {key:"State Public University",value:"State Public University"},
        {key:"Institute of National Importance ",value:"Institute of National Importance "},
        {key:"State Open University",value:"State Open University"},
        {key:"Institute Under State Legislative Act",value:"Institute Under State Legislative Act"},
        {key:"Deemed University",value:"Deemed University"},
        {key:"Total Universities",value:"Total Universities"},
        {key:"Research Institute",value:"Research Institute"},
        ]
           
        }  else if (select == "Colleges") {
        this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
            {key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
            {key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
            {key:"Recognized Centre",value:"Recognized Centre"},
            {key:"Total Colleges",value:"Total Colleges"},
          ]
          this.Comparison = [
            {key:"None",value:"None"},
            {key:"Government Colleges/ Constituent College",value:"Government Colleges/ Constituent College"},
            {key:"Local Body Colleges/ Affiliated College",value:"Local Body Colleges/ Affiliated College"},
            {key:"P.G Center/Off-Campus Center",value:"P.G Center/Off-Campus Center"},
            {key:"Recognized Centre",value:"Recognized Centre"},
            {key:"Total Colleges",value:"Total Colleges"},
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
            {key:"Engineering College",value:"Engineering College"},
            {key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"}
           ]
           this.Comparison = [
            {key:"None",value:"None"},
            {key:"Education/ Teacher Training Centre (Primary)",value:"Education/ Teacher Training Centre (Primary)"},
            {key:"Engineering College",value:"Engineering College"},
            {key:"Total Teacher Training Centre / Engineering Colleges",value:"Total Teacher Training Centre / Engineering Colleges"}
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
    var controller = "education_art_culture9s"

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
      var controller = "education_art_culture9s"
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
