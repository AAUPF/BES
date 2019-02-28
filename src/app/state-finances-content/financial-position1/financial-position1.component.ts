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
  selector: 'app-financial-position1',
  templateUrl: './financial-position1.component.html',
  styleUrls: ['./financial-position1.component.css']
})
export class FinancialPosition1Component implements OnInit {





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
  Districts = ["As number of GSDP","As percentage of GSDP"]
  years = [
      {key:"All",value:"All"},
      {key:"2012-13",value:"2012-13"},
      {key:"2013-14",value:"2013-14"},
      {key:"2014-15",value:"2014-15"},
      {key:"2015-16",value:"2015-16"},
      {key:"2016-17",value:"2016-17"},
      {key:"2017-18 BE",value:"2017-18_BE"},

];
  //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
  views = ViewsNotMap;



  rain_fall_type = [
    {key:"All",value:"All"},
    {key:"Total Receipts Revenue Account",value:"Total Receipts Revenue Account"},
    {key:"Tax Revenue",value:"Tax Revenue"},
    {key:"Non Tax Revenue",value:"Non Tax Revenue"},
    {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
    {key:"Total Exp. Revenue Account",value:"Total Exp. Revenue Account"},
    {key:"General Services, of which",value:"General Services, of which"},
    {key:"Interest Payments",value:"Interest Payments"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Grants-in-aid",value:"Grants-in-aid"},
    {key:"Revenue Deficit",value:"Revenue Deficit"},
    {key:"Capital Receipts",value:"Capital Receipts"},
    {key:"Public Debt etc.",value:"Public Debt etc."},
    {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
    {key:"Capital Expenditure, of which",value:"Capital Expenditure, of which"},
    {key:"Capital Outlay",value:"Capital Outlay"},
    {key:"Loans and Advances",value:"Loans and Advances"},
    {key:"Public Debt.",value:"Public Debt."},
    {key:"Total Expenditure",value:"Total Expenditure"},
    {key:"Plan Expenditure",value:"Plan Expenditure"},
    {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
    {key:"Gross Fiscal Deficit",value:"Gross Fiscal Deficit"},
    {key:"Primary Deficit",value:"Primary Deficit"},
    {key:"Total Borrowings",value:"Total Borrowings"},
    {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
    {key:"Loans from Central Government",value:"Loans from Central Government"},
    {key:"Repayment of Public Debt",value:"Repayment of Public Debt"},
    {key:"Debt Outstanding",value:"Debt Outstanding"},
    {key:"GSDP",value:"GSDP"},
  ]


  Comparison = [
    {key:"None",value:"None"},
    {key:"Total Receipts Revenue Account",value:"Total Receipts Revenue Account"},
    {key:"Tax Revenue",value:"Tax Revenue"},
    {key:"Non Tax Revenue",value:"Non Tax Revenue"},
    {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
    {key:"Total Exp. Revenue Account",value:"Total Exp. Revenue Account"},
    {key:"General Services, of which",value:"General Services, of which"},
    {key:"Interest Payments",value:"Interest Payments"},
    {key:"Social Services",value:"Social Services"},
    {key:"Economic Services",value:"Economic Services"},
    {key:"Grants-in-aid",value:"Grants-in-aid"},
    {key:"Revenue Deficit",value:"Revenue Deficit"},
    {key:"Capital Receipts",value:"Capital Receipts"},
    {key:"Public Debt etc.",value:"Public Debt etc."},
    {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
    {key:"Capital Expenditure, of which",value:"Capital Expenditure, of which"},
    {key:"Capital Outlay",value:"Capital Outlay"},
    {key:"Loans and Advances",value:"Loans and Advances"},
    {key:"Public Debt.",value:"Public Debt."},
    {key:"Total Expenditure",value:"Total Expenditure"},
    {key:"Plan Expenditure",value:"Plan Expenditure"},
    {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
    {key:"Gross Fiscal Deficit",value:"Gross Fiscal Deficit"},
    {key:"Primary Deficit",value:"Primary Deficit"},
    {key:"Total Borrowings",value:"Total Borrowings"},
    {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
    {key:"Loans from Central Government",value:"Loans from Central Government"},
    {key:"Repayment of Public Debt",value:"Repayment of Public Debt"},
    {key:"Debt Outstanding",value:"Debt Outstanding"},
    {key:"GSDP",value:"GSDP"},
    
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
          {key:"Total Receipts Revenue Account",value:"Total Receipts Revenue Account"},
          {key:"Tax Revenue",value:"Tax Revenue"},
          {key:"Non Tax Revenue",value:"Non Tax Revenue"},
          {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
          {key:"Total Exp. Revenue Account",value:"Total Exp. Revenue Account"},
          {key:"General Services, of which",value:"General Services, of which"},
          {key:"Interest Payments",value:"Interest Payments"},
          {key:"Social Services",value:"Social Services"},
          {key:"Economic Services",value:"Economic Services"},
          {key:"Grants-in-aid",value:"Grants-in-aid"},
          {key:"Revenue Deficit",value:"Revenue Deficit"},
          {key:"Capital Receipts",value:"Capital Receipts"},
          {key:"Public Debt etc.",value:"Public Debt etc."},
          {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
          {key:"Capital Expenditure, of which",value:"Capital Expenditure, of which"},
          {key:"Capital Outlay",value:"Capital Outlay"},
          {key:"Loans and Advances",value:"Loans and Advances"},
          {key:"Public Debt.",value:"Public Debt."},
          {key:"Total Expenditure",value:"Total Expenditure"},
          {key:"Plan Expenditure",value:"Plan Expenditure"},
          {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
          {key:"Gross Fiscal Deficit",value:"Gross Fiscal Deficit"},
          {key:"Primary Deficit",value:"Primary Deficit"},
          {key:"Total Borrowings",value:"Total Borrowings"},
          {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
          {key:"Loans from Central Government",value:"Loans from Central Government"},
          {key:"Repayment of Public Debt",value:"Repayment of Public Debt"},
          {key:"Debt Outstanding",value:"Debt Outstanding"},
         
          
        ]
        
      }
    
    }



    changedata(d) {
      if (d == "As number of GSDP") {
        this.data.rain_fall_type = "All"
        this.data.Comparison = "None"
        this.Comparison = [{key:"None",value:"None"}]
        this.rain_fall_type = [
          {key:"All",value:"All"},
          {key:"Total Receipts Revenue Account",value:"Total Receipts Revenue Account"},
          {key:"Tax Revenue",value:"Tax Revenue"},
          {key:"Non Tax Revenue",value:"Non Tax Revenue"},
          {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
          {key:"Total Exp. Revenue Account",value:"Total Exp. Revenue Account"},
          {key:"General Services, of which",value:"General Services, of which"},
          {key:"Interest Payments",value:"Interest Payments"},
          {key:"Social Services",value:"Social Services"},
          {key:"Economic Services",value:"Economic Services"},
          {key:"Grants-in-aid",value:"Grants-in-aid"},
          {key:"Revenue Deficit",value:"Revenue Deficit"},
          {key:"Capital Receipts",value:"Capital Receipts"},
          {key:"Public Debt etc.",value:"Public Debt etc."},
          {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
          {key:"Capital Expenditure, of which",value:"Capital Expenditure, of which"},
          {key:"Capital Outlay",value:"Capital Outlay"},
          {key:"Loans and Advances",value:"Loans and Advances"},
          {key:"Public Debt.",value:"Public Debt."},
          {key:"Total Expenditure",value:"Total Expenditure"},
          {key:"Plan Expenditure",value:"Plan Expenditure"},
          {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
          {key:"Gross Fiscal Deficit",value:"Gross Fiscal Deficit"},
          {key:"Primary Deficit",value:"Primary Deficit"},
          {key:"Total Borrowings",value:"Total Borrowings"},
          {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
          {key:"Loans from Central Government",value:"Loans from Central Government"},
          {key:"Repayment of Public Debt",value:"Repayment of Public Debt"},
          {key:"Debt Outstanding",value:"Debt Outstanding"},
          {key:"GSDP",value:"GSDP"},
        ]
      } 
      else {
      this.data.rain_fall_type = "All"
      this.data.Comparison = "None"
      this.Comparison = [{key:"None",value:"None"}]
      this.rain_fall_type = [
        {key:"All",value:"All"},
        {key:"Total Receipts Revenue Account",value:"Total Receipts Revenue Account"},
        {key:"Tax Revenue",value:"Tax Revenue"},
        {key:"Non Tax Revenue",value:"Non Tax Revenue"},
        {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
        {key:"Total Exp. Revenue Account",value:"Total Exp. Revenue Account"},
        {key:"General Services, of which",value:"General Services, of which"},
        {key:"Interest Payments",value:"Interest Payments"},
        {key:"Social Services",value:"Social Services"},
        {key:"Economic Services",value:"Economic Services"},
        {key:"Grants-in-aid",value:"Grants-in-aid"},
        {key:"Revenue Deficit",value:"Revenue Deficit"},
        {key:"Capital Receipts",value:"Capital Receipts"},
        {key:"Public Debt etc.",value:"Public Debt etc."},
        {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
        {key:"Capital Expenditure, of which",value:"Capital Expenditure, of which"},
        {key:"Capital Outlay",value:"Capital Outlay"},
        {key:"Loans and Advances",value:"Loans and Advances"},
        {key:"Public Debt.",value:"Public Debt."},
        {key:"Total Expenditure",value:"Total Expenditure"},
        {key:"Plan Expenditure",value:"Plan Expenditure"},
        {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
        {key:"Gross Fiscal Deficit",value:"Gross Fiscal Deficit"},
        {key:"Primary Deficit",value:"Primary Deficit"},
        {key:"Total Borrowings",value:"Total Borrowings"},
        {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
        {key:"Loans from Central Government",value:"Loans from Central Government"},
        {key:"Repayment of Public Debt",value:"Repayment of Public Debt"},
        {key:"Debt Outstanding",value:"Debt Outstanding"},
       
      ]
      
      }
      
    }
  toView(view){
  if (view == "line") {
    this.years = [ {key:"All",value:"All"}];
  } else {
    this.years = [

    {key:"All",value:"All"},
    {key:"2012-13",value:"2012-13"},
    {key:"2013-14",value:"2013-14"},
    {key:"2014-15",value:"2014-15"},
    {key:"2015-16",value:"2015-16"},
    {key:"2016-17",value:"2016-17"},
    {key:"2017-18 BE",value:"2017-18_BE"},
    ];
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
    var controller = "financial_position1s"

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
      var controller = "support_institutions1s"
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


//   constructor(private AgricultureService: AgricultureService,private SvgService: SvgService,private spinner: NgxSpinnerService,private location: Location) { 
//     // this.AgricultureService.barchart();
//     // this.SvgService.barchart1("Muzaffarpur",2016);
//   }
//   cancel() {
//     this.location.back(); // <-- go back to previous location on cancel
//   }

  
//   // title:string;
//   title = ""
//   butDisabled: boolean = false;

//   public loading = false;

//   htmlContent:string;
//   // Districts = Districts;
//   visbile= false;
//   visbile_chart= true;
//   visbile_table= false;

//   Price_Reference = [
//      "As number of GSDP",
//      "As percentage of GSDP",
// ]
//   Districts = [
//       "Total Receipts Revenue Account",
//       "Total Exp. Revenue Account",
//       "Revenue Deficit",
//       "Capital Receipts",
//       "Capital Expenditure, of which",
//       "Total Expenditure",
//       "Gross Fiscal Deficit",
//       "Primary Deficit",
//       "Total Borrowings",
//       "Repayment of Public Debt",
//       "Debt Outstanding",
//       "GSDP",  
//     ]

//   years = [
//     {key:"All",value:"All"},
//     {key:"2012-13",value:"2012-13"},
//     {key:"2013-14",value:"2013-14"},
//     {key:"2014-15",value:"2014-15"},
//     {key:"2015-16",value:"2015-16"},
//     {key:"2016-17",value:"2016-17"},
//     {key:"2017-18 BE",value:"2017-18_BE"},
// ];
//   //views = [{key: "Graph", value: "column"},{key: "Trend Line", value: "line"},{key: "Bubble", value: "scatter"},{key: "Table", value: "Table"},{key:"Map View", value: "Map View"}];
//   views = ViewsNotMap;
//   rain_fall_type = [
//     {key:"All",value:"All"},
//     {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
//     {key:"Crops",value:"Crops"},
//     {key:"Livestock",value:"Livestock"},
//     {key:"Forestry and Logging",value:"Forestry and Logging"},
//     {key:"Fishing and Aquaculture",value:"Fishing and Aquaculture"},
//     {key:"Mining and Quarrying",value:"Mining and Quarrying"},
//     {key:"Total Primary Sector",value:"Total Primary Sector"},
//     {key:"Manufacturing",value:"Manufacturing"},
//     {key:"Electricity, gas, water supply and other utility services",value:"Electricity, gas, water supply and other utility services"},
//     {key:"Construction",value:"Construction"},
//     {key:"Total Secondary Sector",value:"Total Secondary Sector"},
//     {key:"Trade, repair, hotels and restaurants",value:"Trade, repair, hotels and restaurants"},
//     {key:"Trade and repair services",value:"Trade and repair services"},
//     {key:"Hotels and restaurants",value:"Hotels and restaurants"},
//     {key:"Transport, storage, communication and services related to broadcasting",value:"Transport, storage, communication and services related to broadcasting"},
//     {key:"Railways",value:"Railways"},
//     {key:"Road transport",value:"Road transport"},
//     {key:"Water transport",value:"Water transport"},
//     {key:"Air transport",value:"Air transport"},
//     {key:"Services incidental to transport",value:"Services incidental to transport"},
//     {key:"Storage",value:"Storage"},
//     {key:"Communication and services related to broadcasting",value:"Communication and services related to broadcasting"},
//     {key:"Financial services",value:"Financial services"},
//     {key:"Real estate, ownership of dwelling and professional services",value:"Real estate, ownership of dwelling and professional services"},
//     {key:"Public administration",value:"Public administration"},
//     {key:"Other services",value:"Other services"},
//     {key:"Total Tertiary Sector",value:"Total Tertiary Sector"},
//     {key:"Total Gross State Value Added at basic prices",value:"Total Gross State Value Added at basic prices"},
//     {key:"Taxes on Products",value:"Taxes on Products"},
//     {key:"Subsidies on products",value:"Subsidies on products"},
//     {key:"Gross State Domestic Product",value:"Gross State Domestic Product"},


// ]
//   rain_fall_type_sort = this.rain_fall_type.sort(f.compare);
//   Comparison  = [
//     {key:"None",value:"None"},
//   ]
//     // Comparison = [{key:"None",value:"None"},{key:"Bihar",value:"Bihar"},	{key:"India",value:"India"}]
//      //Comparison_sort = this.Comparison.sort(f.compare);
//     data: any = {};    

//     compare(d) {


//       if (d == "General Services, of which") {
//         this.data.Comparison = "All"
//         this.Comparison = 
//         [
//           {key:"Interest Payments",value:"Interest Payments"},
//           {key:"None",value:"None"},
  
//         ]
        
//       } 

      
//       else {
//       this.data.Comparison = "None"
//       this.Comparison = 
  
//         [
//           {key:"None",value:"None"},
  
//         ]
      
//       }
      
//     }


//     changedata(d) {


//       if (d == "As number of GSDP") {
//         this.data.Districts = "Total Receipts Revenue Account"
//         this.Districts = [
//           "Total Receipts Revenue Account",
//           "Total Exp. Revenue Account",
//           "Revenue Deficit",
//           "Capital Receipts",
//           "Capital Expenditure, of which",
//           "Total Expenditure",
//           "Gross Fiscal Deficit",
//           "Primary Deficit",
//           "Total Borrowings",
//           "Repayment of Public Debt",
//           "Debt Outstanding",
//           "GSDP",  
//         ]
//       } 
//       else {
//       this.data.Districts = "Total Receipts Revenue Account"
//       this.Districts = [
//         "Total Receipts Revenue Account",
//         "Total Exp. Revenue Account",
//         "Revenue Deficit",
//         "Capital Receipts",
//         "Capital Expenditure, of which",
//         "Total Expenditure",
//         "Gross Fiscal Deficit",
//         "Primary Deficit",
//         "Total Borrowings",
//         "Repayment of Public Debt",
//         "Debt Outstanding", 
//       ]
      
//       }
      
//     }
 
//     toSet(select){
//       if (select == "All") {
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Agriculture, Forestry and Fishing",value:"Agriculture, Forestry and Fishing"},
//           {key:"Mining and Quarrying",value:"Mining and Quarrying"},
//           {key:"Manufacturing",value:"Manufacturing"},
//           {key:"Electricity and Utilitiy Services",value:"Electricity and Utilitiy Services"},
//           {key:"Construction",value:"Construction"},
//           {key:"Trade and Hospitality",value:"Trade and Hospitality"},
//           {key:"Transport and Communication",value:"Transport and Communication"},
//           {key:"Financial Services",value:"Financial Services"},
//           {key:"Real Estate Services",value:"Real Estate Services"},
//           {key:"Public Administration",value:"Public Administration"},
//           {key:"Other Services",value:"Other Services"},
//           {key:"Total Gross State Value Added at basic prices",value:"Total Gross State Value Added at basic prices"},
//           {key:"Taxes on Products",value:"Taxes on Products"},
//           {key:"Subsidies on products",value:"Subsidies on products"},
//           {key:"Gross State Domestic Product",value:"Gross State Domestic Product"},
//           {key:"None",value:"None"},
//         ]
//       }
//       else if(select == "Total Receipts Revenue Account") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Tax Revenue",value:"Tax Revenue"},
//           {key:"Non Tax Revenue",value:"Non Tax Revenue"},
//           {key:"Grants in Aid and Contributions",value:"Grants in Aid and Contributions"},
//           {key:"None",value:"None"},
//       ]
//       }
//       else if(select == "Total Exp. Revenue Account") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"General Services, of which",value:"General Services, of which"},
//           {key:"Interset Payments",value:"Interset Payments"},
//           {key:"Social Services",value:"Social Services"},
//           {key:"Economic Services",value:"Economic Services"},
//           {key:"Grants-in-aid",value:"Grants-in-aid"},
//           {key:"None",value:"None"},
//       ]
//       }
//       else if(select == "Revenue Deficit") { 
//         this.data.rain_fall_type  = undefined

//         this.rain_fall_type_sort = [
//         {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "Capital Receipts") { 
//         this.data.rain_fall_type  = undefined

//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Public Debt etc.",value:"Public Debt etc."},
//         {key:"Recovery of Loan and Advances",value:"Recovery of Loan and Advances"},
//         {key:"None",value:"None"},
//       ]

//       }


//       else if(select == "Capital Expenditure, of which") { 
//         this.data.rain_fall_type  = undefined

//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Capital Outlay",value:"Capital Outlay"},
//           {key:"Loans and Advances",value:"Loans and Advances"},
//           {key:"Public Debt.",value:"Public Debt."},
//          {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "Total Expenditure") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Plan Expenditure",value:"Plan Expenditure"},
//           {key:"Non Plan Expenditure",value:"Non Plan Expenditure"},
//          {key:"None",value:"None"},
//       ]
//       }

//       else if(select == "Gross Fiscal Deficit") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//          {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "Primary Deficit") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//          {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "Total Borrowings") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//           {key:"All",value:"All"},
//           {key:"Internal Debt Receipt",value:"Internal Debt Receipt"},
//           {key:"Loans from Central Government",value:"Loans from Central Government"},
//          {key:"None",value:"None"},
//       ]
//       }


//       else if(select == "Repayment of Public Debt") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//          {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "Debt Outstanding") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//          {key:"None",value:"None"},
//       ]

//       }

//       else if(select == "GSDP") { 
//         this.data.rain_fall_type  = undefined
//         this.rain_fall_type_sort = [
//          {key:"None",value:"None"},
//       ]

//       }
//       else {
//         this.butDisabled = false;
//       }
//     }
  
//       toyear(d){
//         if (d == "All") {
//           this.data.view = undefined
  
         
//           this.views = ViewsNotMap
          
//         } else {
//           this.data.view = undefined
  
//           this.views = ViewsNotDistrict
          
//         }
  
//       }
//   onSubmit(user) {
//     var controller = "financial_position1s"

//     if (user.view !== "Map View") {

//       console.log("errror");
      
//       this.visbile_chart= true;
//       this.visbile= false;
//       this.visbile_table= false;
//       // this.AgricultureService.pie();
//       if(user.view) { 

//         if (user.view == "Table") {
//           this.visbile_chart= false;
//           this.visbile_table= true;
//           this.spinner.show();
//         } else {
//           this.visbile_chart= true;
//           this.visbile_table= false;
//           this.spinner.show();
          
//         }

//         this.AgricultureService.barchart_bihar_vs_district_rainfall_price(user.years,user.districts,user.rain_fall_type,user.Comparison,controller,user.view,user.Price_Reference);
//         }
//     } 
//     else if(user.view == "Map View") {
//      const that = this;
//       // this.AgricultureService.barchart();
//       this.visbile_chart= false;
//       this.visbile= true;
//       this.visbile_table= false;
//       this.title =user.rain_fall_type;
//       // this.SvgService.test("echamparan");
//       var controller = "annual_state_domestic_product1s"
//       this.spinner.show();
//       setTimeout(function() {
//         //  that.SvgService.test("echamparan");
//             that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
//             var u = "wchamparan";
//             that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
//       }, 500);
//       // this.SvgService.svg();
      
//     }


//     // if (user.view == "Graph") {
//     //   this.visbile_chart= true;
//     //   this.visbile= false;
//     //   this.visbile_table= false;

//     //   // this.AgricultureService.pie();
//     //   if (user.districts == "All") {
//     //     this.AgricultureService.bar_chart_all(user.districts,user.years,user.rain_fall_type,controller);
//     //   } 
//     //  else if(user.Comparison == "Bihar vs District") { 
//     //   this.AgricultureService.barchart_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
//     //   }
//     //   else {
//     //     this.SvgService.barchart1(user.districts,user.years,user.rain_fall_type,controller);
//     //   }
//     // } 
//     // else if(user.view == "Trend Line") {
//     //   this.visbile_chart= true;
//     //   this.visbile= false;
//     //   this.visbile_table= false;

//     //   if (user.districts == "All") {
//     //     this.AgricultureService.trend_line_all(user.districts,user.years,user.rain_fall_type,user.view,controller);
        
//     //   } 
//     //   else if(user.Comparison == "Bihar vs District") { 
//     //     this.AgricultureService.trend_line_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
//     //     }
//     //   else {
//     //     this.SvgService.trend_line(user.districts,user.years,user.rain_fall_type,controller);
//     //   }
      
//     // } 
//     // else if(user.view == "Table") {
//     //   this.visbile_chart= false;
//     //   this.visbile_table= true;
//     //   this.visbile= false;
//     //   this.spinner.show();

//     //   this.SvgService.table(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
//     // }
//     // else if(user.view == "Map View") {
//     //  const that = this;
//     //   // this.AgricultureService.barchart();
//     //   this.visbile_chart= false;
//     //   this.visbile= true;
//     //   this.visbile_table= false;
//     //   this.title =user.rain_fall_type;
//     //   // this.SvgService.test("echamparan");
//     //   var controller = "agricultural_credit2s"
//     //   this.spinner.show();
//     //   setTimeout(function() {
//     //     //  that.SvgService.test("echamparan");
//     //         that.SvgService.svg(u,user.Comparison,user.rain_fall_type,user.years,user.districts,controller);
//     //         var u = "wchamparan";
//     //         that.SvgService.test(user.view,user.years,user.districts,user.rain_fall_type,user.Comparison,controller); 
//     //   }, 500);
//     //   // this.SvgService.svg();
      
//     // }
//     // else if(user.view == "Bubble") {
//     //   this.visbile_chart= true;
//     //   this.visbile= false;
//     //   this.visbile_table= false;

//     //   // this.AgricultureService.pie();
//     //   if (user.districts == "All") {
//     //     this.AgricultureService.Bubble_all(user.districts,user.years,user.rain_fall_type,controller,user.view);
//     //   } 
//     //  else if(user.Comparison == "Bihar vs District") { 
//     //   this.AgricultureService.bubble_bihar_vs_district(user.years,user.districts,user.rain_fall_type,user.Comparison,controller);
//     //   }
//     //   else {
//     //     this.SvgService.bubble(user.districts,user.years,user.rain_fall_type,controller,user.view);
//     //   }
      
//     // } 

//   }     
//   // test(a) {
//   //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
//   //   let svgDoc = map.contentDocument; // should be fine
//   //   let echamparan = svgDoc.getElementById(a);
//   //   echamparan.classList.add("mystyle");
//   //   console.log(echamparan); 
//   // }

//   myEvent(event) {
//     var n =  new TableExport(document.getElementsByTagName("table"));
//   }

//   ngOnInit() {

  
   
//     // var n =  new TableExport(document.getElementsByTagName("table"));
// // this.AgricultureService.testgoogle()


  
//   }
}
