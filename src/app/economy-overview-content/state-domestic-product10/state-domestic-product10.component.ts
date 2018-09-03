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
declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-state-domestic-product10',
  templateUrl: './state-domestic-product10.component.html',
  styleUrls: ['./state-domestic-product10.component.css']
})
export class StateDomesticProduct10Component implements OnInit {
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
  years = [
    {key:"All",value:"All"},
  {key:"2015-16",value:"2015-16"},
  {key:"2016-17",value:"2016-17"},
  {key:"Avg of 2015-17",value:"Avg of 2015-17"},
   ];
  views = NewViews

  Fuel_Type = [
    {key:"All",value:"All"},
    {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
    {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
    {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
    {key:"Share of Population",value:"Share_of_Population"}  
  ]
  rain_fall_type = [{key:"Number",value:"Number"},{key:"Percentage",value:"Percentage"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    Comparison = [
      {key:"None",value:"None"},
      
    ]
    data: any = {};    
    toNumber(d) {
    if (d == "All") {
      //this.data == {years: null, views: "",Comparison: ""};


      this.data.Comparison  = undefined
      this.butDisabled = true;

    } else {
      this.butDisabled = false;
    }
    
    }


view(d){


    if (d == "Map View") {
      this.data.years = undefined

      this.years = [
      {key:"2015-16",value:"2015-16"},
      {key:"2016-17",value:"2016-17"},
      {key:"Avg of 2015-17",value:"Avg of 2015-17"},
      ];
      
    } else {
  this.data.years = undefined
      this.years = [
        {key:"All",value:"All"},
        {key:"2015-16",value:"2015-16"},
        {key:"2016-17",value:"2016-17"},
        {key:"Avg of 2015-17",value:"Avg of 2015-17"},
        ];
      
    }


}


data1(d){


  if (d == "Number") {

          if (this.data.view == "Map View" || this.data.years == "All") {
            this.data.Fuel_Type= "Diesel"
          this.Fuel_Type = [
            {key:"Diesel",value:"Diesel"},
            {key:"Petrol",value:"Petrol"},
            {key:"LPG",value:"LPG"},
          ]
          } else {

            this.data.Fuel_Type= "All"
          this.Fuel_Type = [
            {key:"All",value:"All"},
            {key:"Diesel",value:"Diesel"},
            {key:"Petrol",value:"Petrol"},
            {key:"LPG",value:"LPG"},
          ]
            
          }

  }  else if (d == "Percentage"){



    if (this.data.view == "Map View" || this.data.years == "All") {


      this.data.Fuel_Type= "Percentage_Share_of_Petrol"

      this.Fuel_Type = [
        {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
        {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
        {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
        {key:"Share of Population",value:"Share_of_Population"}  
      ]
      
    } else {


      this.data.Fuel_Type= "All"

      this.Fuel_Type = [
        {key:"All",value:"All"},
        {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
        {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
        {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
        {key:"Share of Population",value:"Share_of_Population"}  
      ]
      
    }


  

  }
  
  
  else {

    this.data.Fuel_Type= "All"

    this.Fuel_Type = [
      {key:"All",value:"All"},
      {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
      {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
      {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
      {key:"Share of Population",value:"Share_of_Population"}  
    ]
  
    
  }



}

year(d){

  if (d == "All") {

    if (this.data.rain_fall_type == "Number") {

      this.data.Fuel_Type= "Diesel"
      this.Fuel_Type = [
        {key:"Diesel",value:"Diesel"},
        {key:"Petrol",value:"Petrol"},
        {key:"LPG",value:"LPG"},
      ]
      
    } else {



      this.data.Fuel_Type= "Percentage_Share_of_Petrol"

      this.Fuel_Type = [
        {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
        {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
        {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
        {key:"Share of Population",value:"Share_of_Population"}  
      ]
      
    }


    
  }
  
  
  else {


    if (this.data.view == "Map View") {


      if (this.data.rain_fall_type == "Number") {

        this.data.Fuel_Type= "Diesel"
        this.Fuel_Type = [
          {key:"Diesel",value:"Diesel"},
          {key:"Petrol",value:"Petrol"},
          {key:"LPG",value:"LPG"},
        ]
        
      } else {
  
  
  
        this.data.Fuel_Type= "Percentage_Share_of_Petrol"
  
        this.Fuel_Type = [
          {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
          {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
          {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
          {key:"Share of Population",value:"Share_of_Population"}  
        ]
        
      }
      
    } else {


      if (this.data.rain_fall_type == "Number") {

        this.data.Fuel_Type= "Diesel"
        this.Fuel_Type = [
          {key:"All",value:"All"},
          {key:"Diesel",value:"Diesel"},
          {key:"Petrol",value:"Petrol"},
          {key:"LPG",value:"LPG"},
        ]
        
      } else {
  
  
  
        this.data.Fuel_Type= "Percentage_Share_of_Petrol"
  
        this.Fuel_Type = [
          {key:"All",value:"All"},
          {key:"Percentage Share of Petrol",value:"Percentage_Share_of_Petrol"},
          {key:"Percentage Share of Diesel",value:"Percentage_Share_of_Diesel"},
          {key:"Percentage Share of LPG",value:"Percentage_Share_of_LPG"},
          {key:"Share of Population",value:"Share_of_Population"}  
        ]
        
      }
      
    }


    
  }


}

fuel(d){





}
    

    get diagnostic() { return JSON.stringify(this.data); }
  onSubmit(user) {
    var controller = "state_domestic_product10s"

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
        this.AgricultureService.six_column_with_fule(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.Fuel_Type);
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
      var controller = "state_domestic_product10s"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg_eov(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller,user.Fuel_Type);
            var u = "wchamparan";
            that.SvgService.test_eov(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.Fuel_Type); 
      }, 500);
      // this.SvgService.svg();
      
    }


    // if (user.view == "Graph") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
    //   }
    // } 
    // else if(user.view == "Trend Line") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   if (user.districts == "All") {
    //     this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
    //   } 
    //   else if(user.Comparison == "Bihar vs District") { 
    //     this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //     }
    //   else {
    //     this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
    //   }
      
    // } 
    // else if(user.view == "Table") {
    //   this.visbile_chart= false;
    //   this.visbile_table= true;
    //   this.visbile= false;
    //   this.spinner.show();

    //   this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    // }
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "agricultural_credit2s"
    //   this.spinner.show();
    //   setTimeout(function() {
    //     //  that.SvgService.test("echamparan");
    //         that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
    //         var u = "wchamparan";
    //         that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
    //   }, 500);
    //   // this.SvgService.svg();
      
    // }
    // else if(user.view == "Bubble") {
    //   this.visbile_chart= true;
    //   this.visbile= false;
    //   this.visbile_table= false;

    //   // this.AgricultureService.pie();
    //   if (user.districts == "All") {
    //     this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   } 
    //  else if(user.Comparison == "Bihar vs District") { 
    //   this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
    //   }
    //   else {
    //     this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
    //   }
      
    // } 

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
