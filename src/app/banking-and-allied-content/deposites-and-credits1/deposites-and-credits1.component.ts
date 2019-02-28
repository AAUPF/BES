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
  selector: 'app-deposites-and-credits1',
  templateUrl: './deposites-and-credits1.component.html',
  styleUrls: ['./deposites-and-credits1.component.css']
})
export class DepositesAndCredits1Component implements OnInit {

 
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
  Districts = ["Deposits","Credits","CDRatio","Share of Credits","Share of Deposits"]
  years = [
    "All",
    "2014-15",
    "2015-16",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"AndhraPradesh",value:"AndhraPradesh"},
    {key:"Bihar",value:"Bihar"},
    {key:"Gujarat",value:"Gujarat"},
    {key:"Haryana",value:"Haryana"},
    {key:"HimachalPradesh",value:"HimachalPradesh"},
    {key:"Jharkhand",value:"Jharkhand"},
    {key:"Karnataka",value:"Karnataka"},
    {key:"Kerala",value:"Kerala"},
    {key:"MadhyaPradesh",value:"MadhyaPradesh"},
    {key:"Maharashtra",value:"Maharashtra"},
    {key:"Odisha",value:"Odisha"},
    {key:"Punjab",value:"Punjab"},
    {key:"Rajasthan",value:"Rajasthan"},
    {key:"TamilNadu",value:"TamilNadu"},
    {key:"UttarPradesh",value:"UttarPradesh"},
    {key:"WestBengal",value:"WestBengal"},
    {key:"India",value:"India"},
    
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"AndhraPradesh",value:"AndhraPradesh"},
    {key:"Bihar",value:"Bihar"},
    {key:"Gujarat",value:"Gujarat"},
    {key:"Haryana",value:"Haryana"},
    {key:"HimachalPradesh",value:"HimachalPradesh"},
    {key:"Jharkhand",value:"Jharkhand"},
    {key:"Karnataka",value:"Karnataka"},
    {key:"Kerala",value:"Kerala"},
    {key:"MadhyaPradesh",value:"MadhyaPradesh"},
    {key:"Maharashtra",value:"Maharashtra"},
    {key:"Odisha",value:"Odisha"},
    {key:"Punjab",value:"Punjab"},
    {key:"Rajasthan",value:"Rajasthan"},
    {key:"TamilNadu",value:"TamilNadu"},
    {key:"UttarPradesh",value:"UttarPradesh"},
    {key:"WestBengal",value:"WestBengal"},
    {key:"India",value:"India"},
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
          {key:"AndhraPradesh",value:"AndhraPradesh"},
          {key:"Bihar",value:"Bihar"},
          {key:"Gujarat",value:"Gujarat"},
          {key:"Haryana",value:"Haryana"},
          {key:"HimachalPradesh",value:"HimachalPradesh"},
          {key:"Jharkhand",value:"Jharkhand"},
          {key:"Karnataka",value:"Karnataka"},
          {key:"Kerala",value:"Kerala"},
          {key:"MadhyaPradesh",value:"MadhyaPradesh"},
          {key:"Maharashtra",value:"Maharashtra"},
          {key:"Odisha",value:"Odisha"},
          {key:"Punjab",value:"Punjab"},
          {key:"Rajasthan",value:"Rajasthan"},
          {key:"TamilNadu",value:"TamilNadu"},
          {key:"UttarPradesh",value:"UttarPradesh"},
          {key:"WestBengal",value:"WestBengal"},
          {key:"India",value:"India"},
                   
        ]
        
      }
    
    }
    toView(view){
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All",
    "2014-15",
    "2015-16",];
    
  }
    }
      toSet(select){
        if (select == "Public Investment in Road and Bridges") {         
      this.rain_fall_type = [
        {key:"All",value:"All"},
        
        {key:"AndhraPradesh",value:"AndhraPradesh"},
        {key:"Bihar",value:"Bihar"},
        {key:"Gujarat",value:"Gujarat"},
        {key:"Haryana",value:"Haryana"},
        {key:"HimachalPradesh",value:"HimachalPradesh"},
        {key:"Jharkhand",value:"Jharkhand"},
        {key:"Karnataka",value:"Karnataka"},
        {key:"Kerala",value:"Kerala"},
        {key:"MadhyaPradesh",value:"MadhyaPradesh"},
        {key:"Maharashtra",value:"Maharashtra"},
        {key:"Odisha",value:"Odisha"},
        {key:"Punjab",value:"Punjab"},
        {key:"Rajasthan",value:"Rajasthan"},
        {key:"TamilNadu",value:"TamilNadu"},
        {key:"UttarPradesh",value:"UttarPradesh"},
        {key:"WestBengal",value:"WestBengal"},
        {key:"India",value:"India"},
      
  ]
           
        }  else if (select == "Other Liabilities") {


          this.rain_fall_type = [
            {key:"All",value:"All"},
            {key:"AndhraPradesh",value:"AndhraPradesh"},
            {key:"Bihar",value:"Bihar"},
            {key:"Gujarat",value:"Gujarat"},
            {key:"Haryana",value:"Haryana"},
            {key:"HimachalPradesh",value:"HimachalPradesh"},
            {key:"Jharkhand",value:"Jharkhand"},
            {key:"Karnataka",value:"Karnataka"},
            {key:"Kerala",value:"Kerala"},
            {key:"MadhyaPradesh",value:"MadhyaPradesh"},
            {key:"Maharashtra",value:"Maharashtra"},
            {key:"Odisha",value:"Odisha"},
            {key:"Punjab",value:"Punjab"},
            {key:"Rajasthan",value:"Rajasthan"},
            {key:"TamilNadu",value:"TamilNadu"},
            {key:"UttarPradesh",value:"UttarPradesh"},
            {key:"WestBengal",value:"WestBengal"},
            {key:"India",value:"India"},
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            {key:"All",value:"All"},
            {key:"AndhraPradesh",value:"AndhraPradesh"},
            {key:"Bihar",value:"Bihar"},
            {key:"Gujarat",value:"Gujarat"},
            {key:"Haryana",value:"Haryana"},
            {key:"HimachalPradesh",value:"HimachalPradesh"},
            {key:"Jharkhand",value:"Jharkhand"},
            {key:"Karnataka",value:"Karnataka"},
            {key:"Kerala",value:"Kerala"},
            {key:"MadhyaPradesh",value:"MadhyaPradesh"},
            {key:"Maharashtra",value:"Maharashtra"},
            {key:"Odisha",value:"Odisha"},
            {key:"Punjab",value:"Punjab"},
            {key:"Rajasthan",value:"Rajasthan"},
            {key:"TamilNadu",value:"TamilNadu"},
            {key:"UttarPradesh",value:"UttarPradesh"},
            {key:"WestBengal",value:"WestBengal"},
            {key:"India",value:"India"},
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
    var controller = "deposites_and_credits1s"

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
      var controller = "deposites_and_credits1s"
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
