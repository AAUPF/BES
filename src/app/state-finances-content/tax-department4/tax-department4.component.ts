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
  selector: 'app-tax-department4',
  templateUrl: './tax-department4.component.html',
  styleUrls: ['./tax-department4.component.css']
})
export class TaxDepartment4Component implements OnInit {

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
  Districts = ["Stamp Duty","Registration Fees","All"]
  years = ["All", "2012-13","2013-14","2014-15","2015-16","2016-17"];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;


  Comparison = [
    {key:"None",value:"None"},
    {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
    {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
    {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
    {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
    {key:"Revenue Stamps",value:"Revenue Stamps"},
    {key:"Judicial Stamps",value:"Judicial Stamps"},
    {key:"Sub-Total Stamps",value:"Sub-Total Stamps"},
    {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
    {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
    {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
    {key:"Fee from searches of records and Non-Encumbrances",value:"Fee from searches of records and Non-Encumbrances"},
    {key:"Fee from certified copies",value:"Fee from certified copies"},
    {key:"Sub-Total Fee",value:"Sub-Total Fee"},
    {key:"Total",value:"Total"},
  ]


  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
    {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
    {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
    {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
    {key:"Revenue Stamps",value:"Revenue Stamps"},
    {key:"Judicial Stamps",value:"Judicial Stamps"},
    {key:"Sub-Total Stamps",value:"Sub-Total Stamps"},
    {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
    {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
    {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
    {key:"Fee from searches of records and Non-Encumbrances",value:"Fee from searches of records and Non-Encumbrances"},
    {key:"Fee from certified copies",value:"Fee from certified copies"},
    {key:"Sub-Total Fee",value:"Sub-Total Fee"},
    {key:"Total",value:"Total"},
   
  ]
  // rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
    // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
     //Comparison_sort = this.Comparison.sort(f.compare);
    data: any = {};    
  //   toNumber(d) {
    
  //   }
  //   toView(view){
  // // if (view == "line") {
  // //   this.years = ["All"];
  // // } else {
  // //   if (this.data.rain_fall_type == "All") {
  // //     this.years = ["2015","2016_RE","2017_RE"];
  // //   } else {
  // //     this.years = ["All","2015","2016_RE","2017_RE"];
  // //   }
    
  // // }
  //   }
  //     toSet(select){
  //       if (select == "Stamp Duty") {    
  //         this.data.rain_fall_type = "All"    
  //     this.rain_fall_type_sort = [
  //       {key:"All",value:"All"},
  //       {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
  //       {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
  //       {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
  //       {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
  //       {key:"Revenue Stamps",value:"Revenue Stamps"},
  //       {key:"Judicial Stamps",value:"Judicial Stamps"},
  //       {key:"None",value:"None"},
  // ]
  //       }  else if (select == "Registration Fees") {
  //         this.data.rain_fall_type = "All" 
  //         this.rain_fall_type_sort = [
  //           {key:"All",value:"All"},
  //           {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
  //           {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
  //           {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
  //           {key:"Fee from searches of records & Non-Encumbrances",value:"Fee from searches of records & Non-Encumbrances"},
  //           {key:"Fee from certified copies",value:"Fee from certified copies"},
  //           {key:"None",value:"None"},
  //         ]
  //       }

  //       else if (select == "III. Total Revenue Receipts") {
  //         this.data.rain_fall_type = "None" 
  //         this.rain_fall_type_sort = [
  //           {key:"State’s Own Revenue as Percentage of Total Receipts",value:"State’s Own Revenue as Percentage of Total Receipts"},
  //           {key:"None",value:"None"},
  //         ]
  //       }
        
  //       else {
  //         this.data.rain_fall_type = "All" 
  //         this.rain_fall_type_sort = [ 
  //           {key:"All",value:"All"},
  //           {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
  //           {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
  //           {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
  //           {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
  //           {key:"Revenue Stamps",value:"Revenue Stamps"},
  //           {key:"Judicial Stamps",value:"Judicial Stamps"},
  //           {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
  //           {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
  //           {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
  //           {key:"Fee from searches of records & Non-Encumbrances",value:"Fee from searches of records & Non-Encumbrances"},
  //           {key:"Fee from certified copies",value:"Fee from certified copies"},
            
          
  //         ]
  //       }
  //     }
  //     toYear(year){
  //       if(year == "All"){
  //         this.data.views = "column"
  //         this.views = ViewsNotMap
         
  //       }else{
  //         this.data.views = "column"
  //         this.views  = ViewsNotDistrict
         
  //       }
  //     }
    



  toNumber(d) {

    if (d == "All") {
      this.data.Comparison = "None"
      this.Comparison = [{key:"None",value:"None"}]
      
    } else {
      this.Comparison = [
        {key:"None",value:"None"},
        {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
        {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
        {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
        {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
        {key:"Revenue Stamps",value:"Revenue Stamps"},
        {key:"Judicial Stamps",value:"Judicial Stamps"},
        {key:"Sub-Total Stamps",value:"Sub-Total Stamps"},
        {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
        {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
        {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
        {key:"Fee from searches of records and Non-Encumbrances",value:"Fee from searches of records and Non-Encumbrances"},
        {key:"Fee from certified copies",value:"Fee from certified copies"},
        {key:"Sub-Total Fee",value:"Sub-Total Fee"},
        {key:"Total",value:"Total"},
       
        
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
      if (select == "Public Debt") {         
    this.rain_fall_type = [
      {key:"All",value:"All"},
      {key:"Internal  Debt",value:"Internal  Debt"},
      {key:"Central Loans",value:"Central Loans"},
      {key:"Total",value:"Total"},
    
]
         
      }  else if (select == "Other Liabilities") {


        this.rain_fall_type = [
          {key:"All",value:"All"},
          {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
        {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
        {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
        {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
        {key:"Revenue Stamps",value:"Revenue Stamps"},
        {key:"Judicial Stamps",value:"Judicial Stamps"},
        {key:"Sub-Total Stamps",value:"Sub-Total Stamps"},
        {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
        {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
        {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
        {key:"Fee from searches of records and Non-Encumbrances",value:"Fee from searches of records and Non-Encumbrances"},
        {key:"Fee from certified copies",value:"Fee from certified copies"},
        {key:"Sub-Total Fee",value:"Sub-Total Fee"},
        {key:"Total",value:"Total"},

        ]
      }


      
      else {
        this.rain_fall_type = [ 
          {key:"All",value:"All"},
          {key:"From Printed Non-judicial stamps",value:"From Printed Non-judicial stamps"},
          {key:"From Non-judicial stamp duty deposited through Bank challan",value:"From Non-judicial stamp duty deposited through Bank challan"},
          {key:"Non-Judicial adhesive stamps",value:"Non-Judicial adhesive stamps"},
          {key:"Non Judicial special adhesive stamp –  through  Franking machines",value:"Non Judicial special adhesive stamp –  through  Franking machines"},
          {key:"Revenue Stamps",value:"Revenue Stamps"},
          {key:"Judicial Stamps",value:"Judicial Stamps"},
          {key:"Sub-Total Stamps",value:"Sub-Total Stamps"},
          {key:"Fees on registration of instruments",value:"Fees on registration of instruments"},
          {key:"Landlord’s Registration fee",value:"Landlord’s Registration fee"},
          {key:"Landlord’s Process fee",value:"Landlord’s Process fee"},
          {key:"Fee from searches of records and Non-Encumbrances",value:"Fee from searches of records and Non-Encumbrances"},
          {key:"Fee from certified copies",value:"Fee from certified copies"},
          {key:"Sub-Total Fee",value:"Sub-Total Fee"},
          {key:"Total",value:"Total"},
         
        
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
    var controller = "tax_department4s"

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
