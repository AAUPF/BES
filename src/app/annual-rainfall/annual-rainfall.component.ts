import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../services/agriculture.service';
import { Districts } from '../data/districts';
import { ModalComponent } from '../modal/modal.component';
import { SvgcomponentComponent } from '../svgcomponent/svgcomponent.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableExport } from '../../../node_modules/tableexport';
import { Views } from '../data/views';
import { Location } from '@angular/common';
import{Functions} from '../data/func';
import { NewViews } from '../data/newviews';
// import { NewViews } from '../data/newviews';


declare var $:any
interface years<> {
  id: number;  any
}
let f = new Functions();
declare var CanvasJS:any;
@Component({
  selector: 'app-annual-rainfall',
  templateUrl: './annual-rainfall.component.html',
  styleUrls: ['./annual-rainfall.component.css']
})
export class AnnualRainfallComponent implements OnInit {
  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
    // this.AgricultureService.barchart();
    // this.SvgService.barchart1("Muzaffarpur",2016);
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


  month  = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  years = [
    {key:"Avg. of all Years",value:1947},
    {key:"All",value:"All"},
    {key:"2005",value:2005},
    {key:"2006",value:2006},
    {key:"2007",value:2007},
    {key:"2008",value:2008},
    {key:"2009",value:2009},
    {key:"2010",value:2010},
    {key:"2011",value:2011},
    {key:"2012",value:2012},
    {key:"2013",value:2013},
    {key:"2014",value:2014},
    {key:"2015",value:2015},
    {key:"2016",value:2016},
    {key:"2017",value:2017},
    
  ];
  // views = Views;
   views = NewViews;
  //views = [{key: "Graph", value: "column"},{key: "Stack Column", value: "stackedColumn100"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  rain_fall_type = [{key: "All", value: "All"},{key:"Winter Rain", value:"Winter_Rain"},	{key:"Hot Weather Rain", value:"Hot_Weather_Rain"},	{key:"South West Monsoon", value:"South_West_Monsoon"},	{key:"North West Monsoon", value:"North_West_Monsoon"},{key:"None", value:"None"}]
  rain_fall_type_sort = this.rain_fall_type.sort(f.compare);

    Comparison = [
      "None",
      "Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "EastChamparan",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Patna",
      "Purnia",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
      "WestChamparan"
    ]
    data: any = {};    
    toNumber(d) {
      if (d == "All") {
        this.data == {years: null, views: "",Comparison: "None"};
        this.years = [
          {key:"Avg. of all Years",value:1947},
          {key:"2005",value:2005},
          {key:"2006",value:2006},
          {key:"2007",value:2007},
          {key:"2008",value:2008},
          {key:"2009",value:2009},
          {key:"2010",value:2010},
          {key:"2011",value:2011},
          {key:"2012",value:2012},
          {key:"2013",value:2013},
          {key:"2014",value:2014},
          {key:"2015",value:2015},
          {key:"2016",value:2016},
          {key:"2017",value:2017},
          
        ];
        this.data.Comparison  = undefined
        this.butDisabled = true;

      } else {
        console.log("error");
        this.years = [
          {key:"Avg. of all Years",value:1947},
          {key:"All",value:"All"},
          {key:"2005",value:2005},
          {key:"2006",value:2006},
          {key:"2007",value:2007},
          {key:"2008",value:2008},
          {key:"2009",value:2009},
          {key:"2010",value:2010},
          {key:"2011",value:2011},
          {key:"2012",value:2012},
          {key:"2013",value:2013},
          {key:"2014",value:2014},
          {key:"2015",value:2015},
          {key:"2016",value:2016},
          {key:"2017",value:2017}, 
        ]
        this.butDisabled = false;
      }
    }
    toHide(view){
      if(view == "All"){

        this.Comparison = [
          "None"
        ]

        this.rain_fall_type = [{key: "All", value: "All"}]
      }else{
        console.log("error");
        this.Comparison = [
          "None",
          "Araria",
          "Arwal",
          "Aurangabad",
          "Banka",
          "Begusarai",
          "Bhagalpur",
          "Bhojpur",
          "Buxar",
          "Darbhanga",
          "EastChamparan",
          "Gaya",
          "Gopalganj",
          "Jamui",
          "Jehanabad",
          "Kaimur",
          "Katihar",
          "Khagaria",
          "Kishanganj",
          "Lakhisarai",
          "Madhepura",
          "Madhubani",
          "Munger",
          "Muzaffarpur",
          "Nalanda",
          "Nawada",
          "Patna",
          "Purnia",
          "Rohtas",
          "Saharsa",
          "Samastipur",
          "Saran",
          "Sheikhpura",
          "Sheohar",
          "Sitamarhi",
          "Siwan",
          "Supaul",
          "Vaishali",
          "WestChamparan"
        ]

        this.rain_fall_type = [{key: "All", value: "All"},{key:"Winter Rain", value:"Winter_Rain"},	{key:"Hot Weather Rain", value:"Hot_Weather_Rain"},	{key:"South West Monsoon", value:"South_West_Monsoon"},	{key:"North West Monsoon", value:"North_West_Monsoon"},{key:"None", value:"None"}]

      }
    }

    mapview(d){
      if (d == "Map View") {
        this.rain_fall_type = [{key:"None", value:"None"}]
        this.month  = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
        this.Comparison = [
          "None",
        ]

        this.years = [
          {key:"Avg. of all Years",value:1947},
          {key:"2005",value:2005},
          {key:"2006",value:2006},
          {key:"2007",value:2007},
          {key:"2008",value:2008},
          {key:"2009",value:2009},
          {key:"2010",value:2010},
          {key:"2011",value:2011},
          {key:"2012",value:2012},
          {key:"2013",value:2013},
          {key:"2014",value:2014},
          {key:"2015",value:2015},
          {key:"2016",value:2016},
          {key:"2017",value:2017}, 
        ]
      } else {
        this.rain_fall_type = [{key: "All", value: "All"},{key:"Winter Rain", value:"Winter_Rain"},	{key:"Hot Weather Rain", value:"Hot_Weather_Rain"},	{key:"South West Monsoon", value:"South_West_Monsoon"},	{key:"North West Monsoon", value:"North_West_Monsoon"},{key:"None", value:"None"}]
        this.month  = [
          "All",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
        this.Comparison = [
          "None",
          "Araria",
          "Arwal",
          "Aurangabad",
          "Banka",
          "Begusarai",
          "Bhagalpur",
          "Bhojpur",
          "Buxar",
          "Darbhanga",
          "EastChamparan",
          "Gaya",
          "Gopalganj",
          "Jamui",
          "Jehanabad",
          "Kaimur",
          "Katihar",
          "Khagaria",
          "Kishanganj",
          "Lakhisarai",
          "Madhepura",
          "Madhubani",
          "Munger",
          "Muzaffarpur",
          "Nalanda",
          "Nawada",
          "Patna",
          "Purnia",
          "Rohtas",
          "Saharsa",
          "Samastipur",
          "Saran",
          "Sheikhpura",
          "Sheohar",
          "Sitamarhi",
          "Siwan",
          "Supaul",
          "Vaishali",
          "WestChamparan"
        ]

        this.years = [
          {key:"Avg. of all Years",value:1947},
          {key:"All",value:"All"},
          {key:"2005",value:2005},
          {key:"2006",value:2006},
          {key:"2007",value:2007},
          {key:"2008",value:2008},
          {key:"2009",value:2009},
          {key:"2010",value:2010},
          {key:"2011",value:2011},
          {key:"2012",value:2012},
          {key:"2013",value:2013},
          {key:"2014",value:2014},
          {key:"2015",value:2015},
          {key:"2016",value:2016},
          {key:"2017",value:2017}, 
        ]
        
      }


    }

    rain_fall_type1(d){

      if (d == "None") {
         this.data == {month: "All"};

        this.month  = [
          
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
        
        
      } else {

        this.month  = [
          "None",
        ]
        
      }



    }
  onSubmit(user) {
    var controller = "annual_rainfalls"
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
        this.AgricultureService.chart(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.Month);
           
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
      var controller = "annual_rainfalls"
      this.spinner.show();
      setTimeout(function() {
        //  that.SvgService.test("echamparan");
            that.SvgService.svg2(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller,user.Month);
            var u = "wchamparan";
            that.SvgService.test1(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.Month); 
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

    //   this.SvgService.newtable(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view);
    // }
    // else if(user.view == "Map View") {
    //  const that = this;
    //   // this.AgricultureService.barchart();
    //   this.visbile_chart= false;
    //   this.visbile= true;
    //   this.visbile_table= false;
    //   this.title =user.rain_fall_type;
    //   // this.SvgService.test("echamparan");
    //   var controller = "rainfall2s"
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
