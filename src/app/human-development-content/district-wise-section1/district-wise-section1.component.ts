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
  selector: 'app-district-wise-section1',
  templateUrl: './district-wise-section1.component.html',
  styleUrls: ['./district-wise-section1.component.css']
})
export class DistrictWiseSection1Component implements OnInit {
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
  Districts = ["Number","Percentage"]
  years = [
    "All",
    "2013-14",
    "2014-15",
    "2015-16",
  "2016-17",
  ];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    "Patna",
    "Nalanda",
    "Bhojpur",
    "Buxar",
    "Rohtas",
    "Kaimur",
    "Gaya",
    "Jehanabad",
    "Arwal",
    "Nawada",
    "Aurangabad",
    "Saran",
    "Siwan",
    "Gopalganj",
    "WestChamparan",
    "EastChamparan",
    "Muzaffarpur",
    "Sitamarhi",
    "Sheohar",
    "Vaishali",
    "Darbhanga",
    "Madhubani",
    "Samastipur",
    "Begusarai",
    "Munger",
    "Sheikhpura",
    "Lakhisarai",
    "Jamui",
    "Khagaria",
    "Bhagalpur",
    "Banka",
    "Saharsa",
    "Supaul",
    "Madhepura",
    "Purnia",
    "Kishanganj",
    "Araria",
    "Katihar",
    "Bihar",
    
  ]


  rain_fall_type = [
    "All",
    "Patna",
    "Nalanda",
    "Bhojpur",
    "Buxar",
    "Rohtas",
    "Kaimur",
    "Gaya",
    "Jehanabad",
    "Arwal",
    "Nawada",
    "Aurangabad",
    "Saran",
    "Siwan",
    "Gopalganj",
    "WestChamparan",
    "EastChamparan",
    "Muzaffarpur",
    "Sitamarhi",
    "Sheohar",
    "Vaishali",
    "Darbhanga",
    "Madhubani",
    "Samastipur",
    "Begusarai",
    "Munger",
    "Sheikhpura",
    "Lakhisarai",
    "Jamui",
    "Khagaria",
    "Bhagalpur",
    "Banka",
    "Saharsa",
    "Supaul",
    "Madhepura",
    "Purnia",
    "Kishanganj",
    "Araria",
    "Katihar",
    "Bihar",
  ]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
    toNumber(d) {

      if (d == "All") {
        this.data.Comparison = "None"
        this.Comparison = ['None']
        
      } else {
        this.data.Comparison = "None"
        this.Comparison = [
          "Patna",
    "Nalanda",
    "Bhojpur",
    "Buxar",
    "Rohtas",
    "Kaimur",
    "Gaya",
    "Jehanabad",
    "Arwal",
    "Nawada",
    "Aurangabad",
    "Saran",
    "Siwan",
    "Gopalganj",
    "WestChamparan",
    "EastChamparan",
    "Muzaffarpur",
    "Sitamarhi",
    "Sheohar",
    "Vaishali",
    "Darbhanga",
    "Madhubani",
    "Samastipur",
    "Begusarai",
    "Munger",
    "Sheikhpura",
    "Lakhisarai",
    "Jamui",
    "Khagaria",
    "Bhagalpur",
    "Banka",
    "Saharsa",
    "Supaul",
    "Madhepura",
    "Purnia",
    "Kishanganj",
    "Araria",
    "Katihar",
    "Bihar",
          
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
  if (view == "line") {
    this.years = ["All"];
  } else {
    this.years = ["All",
    "2013-14",
    "2014-15",
    "2015-16",
  "2016-17",
]
    
  }
    }
      toSet(select){
        if (select == "Public Investment in Road and Bridges") {         
      this.rain_fall_type = [
        "All",
    "Patna",
    "Nalanda",
    "Bhojpur",
    "Buxar",
    "Rohtas",
    "Kaimur",
    "Gaya",
    "Jehanabad",
    "Arwal",
    "Nawada",
    "Aurangabad",
    "Saran",
    "Siwan",
    "Gopalganj",
    "WestChamparan",
    "EastChamparan",
    "Muzaffarpur",
    "Sitamarhi",
    "Sheohar",
    "Vaishali",
    "Darbhanga",
    "Madhubani",
    "Samastipur",
    "Begusarai",
    "Munger",
    "Sheikhpura",
    "Lakhisarai",
    "Jamui",
    "Khagaria",
    "Bhagalpur",
    "Banka",
    "Saharsa",
    "Supaul",
    "Madhepura",
    "Purnia",
    "Kishanganj",
    "Araria",
    "Katihar",
    "Bihar",
      
  ]
           
        }  else if (select == "Other Liabilities") {


          this.rain_fall_type = [
            "All",
            "Patna",
            "Nalanda",
            "Bhojpur",
            "Buxar",
            "Rohtas",
            "Kaimur",
            "Gaya",
            "Jehanabad",
            "Arwal",
            "Nawada",
            "Aurangabad",
            "Saran",
            "Siwan",
            "Gopalganj",
            "WestChamparan",
            "EastChamparan",
            "Muzaffarpur",
            "Sitamarhi",
            "Sheohar",
            "Vaishali",
            "Darbhanga",
            "Madhubani",
            "Samastipur",
            "Begusarai",
            "Munger",
            "Sheikhpura",
            "Lakhisarai",
            "Jamui",
            "Khagaria",
            "Bhagalpur",
            "Banka",
            "Saharsa",
            "Supaul",
            "Madhepura",
            "Purnia",
            "Kishanganj",
            "Araria",
            "Katihar",
            "Bihar",
          ]
        }

  
        
        else {
          this.rain_fall_type = [ 
            "All",
            "Patna",
            "Nalanda",
            "Bhojpur",
            "Buxar",
            "Rohtas",
            "Kaimur",
            "Gaya",
            "Jehanabad",
            "Arwal",
            "Nawada",
            "Aurangabad",
            "Saran",
            "Siwan",
            "Gopalganj",
            "WestChamparan",
            "EastChamparan",
            "Muzaffarpur",
            "Sitamarhi",
            "Sheohar",
            "Vaishali",
            "Darbhanga",
            "Madhubani",
            "Samastipur",
            "Begusarai",
            "Munger",
            "Sheikhpura",
            "Lakhisarai",
            "Jamui",
            "Khagaria",
            "Bhagalpur",
            "Banka",
            "Saharsa",
            "Supaul",
            "Madhepura",
            "Purnia",
            "Kishanganj",
            "Araria",
            "Katihar",
            "Bihar",
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
    var controller = "district_wise_section1s"

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
      var controller = "district_wise_section1s"
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
