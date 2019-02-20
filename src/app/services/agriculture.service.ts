import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { rendererTypeName } from '@angular/compiler';

declare var google:any;
declare var $:any
declare var $:any
declare var CanvasJS:any;
@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
   private apiRoot: string = "http://localhost:3000/static_pages/help";
  // private apiRoot1: string = "http://localhost:3000/rainfalls";
  // private apiRoot1: string = "http://bihar.aaupf.org//rainfalls";
  apiRoot1: string = environment.apiUrl;


  j:any;
  barchart(){
    let url = `${this.apiRoot}`;
    this.http.get(url).
      subscribe(res => {
        this.j = res;
        console.log(this.j);
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Basic Column Chart in Angular"
          },
          data: [{
            type: "column",
            dataPoints: 
            this.j
          }]
        });
        chart.render();
        }
     ); 
  }


  trend_line_bihar_vs_district(year,district,rain_fall_type,compare,controller) {

    let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&compare=`+compare +`&rain_fall_type=`+rain_fall_type+'&views=Trend Line';
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
      subscribe(res => {
  
        if (rain_fall_type == "All") {
          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: rain_fall_type
            },
            data: this.j
          });
  
          
          chart1.render();
          // alert("error")
  
        } else {
  
          this.j = res;
          console.log(res);
         let chart = new CanvasJS.Chart("chartContainer", {
           animationEnabled: true,
           exportEnabled: true,
           
           title: {
             text: rain_fall_type
           },
           data: [{
             type: "line",
             dataPoints: 
             this.j
           }]
         });
          chart.render();
  
        }
        }
     );
    // let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // // let url = `${this.apiRoot}`;
    //   console.log(url);
    // this.http.get(url).
    //   subscribe(res => {
    //     this.j = res;
    //      console.log(this.j[0]);
    //     let chart = new CanvasJS.Chart("chartContainer", {
    //       animationEnabled: true,
    //       exportEnabled: true,
    //       title: {
    //         text: rain_fall_type+" "+year
    //       },
    //       data: [{
    //         type: "line",
    //         dataPoints: 
    //        [{y:this.j[0].y, label: this.j[0].label, x:0}]
    //       },
    //       {
    //         type: "line",
    //         dataPoints: 
    //         [{y:this.j[1].y, label: this.j[1].label, x:1}]


    //         // [{label:this.j[1].label , y:this.j[1].y }]
    //       }
        
    //     ]
    //     });
    //     chart.render();
    //     }
    //  ); 
  }
testgoogle() {

let url = "http://localhost:3000//rainfalls/test?search=Bhagalpur&year=2016&rain_fall_type=Winter%20Rain&views=Table&compare=Bihar%20vs%20District"
this.http.get(url).
subscribe(res => { 

  google.charts.load('current', {'packages':['corechart','table']});
  google.charts.setOnLoadCallback(drawStuff1);

  function drawStuff1() {
    var data = new google.visualization.DataTable(
      res
     )
    var options = {
    width: "100%",
    legend: { position: 'none' },
    chart: {
      title: 'Chess opening moves',
      subtitle: 'popularity by percentage' },
    axes: {
      x: {
        0: { side: 'top', label: 'White to move'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
    };

    var chart = new google.visualization.Table(document.getElementById('chart_div'));
    // Convert the Classic options to Material options.
    chart.draw(data,options);
    };

    }
    );

}

 compareDataPointYAscend(dataPoint1, dataPoint2) {
  return dataPoint1.y - dataPoint2.y;
}
barchart_bihar_vs_district_rainfall(year,district,rain_fall_type,compare,controller,views){


  let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views;
  // let url = `${this.apiRoot}`;
    console.log(url);

    
    let str = rain_fall_type.replace( /_/g, " " );
    
  this.http.get(url).
    subscribe(res => {
      var newdata = res;
      this.spinner.hide();
      if (rain_fall_type == "All") {

        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
   
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });

          }  else {

         
            this.j = res;
            
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
            chart1.render();
            // alert("error")
          }

      }
      
      else if (year == "All") {
          if (views == "Table") {

            console.log("error");
            
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);
          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {
            
            this.j = res;
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
            chart1.render();
            // alert("error")
          }

      }
      else {


        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {

            this.j = res;
            console.log(res);
           let chart = new CanvasJS.Chart("chartContainer", this.j);
            chart.render();

          }

      }
      } ,
      err => {
        console.log("Error occured.")
        this.spinner.hide();
      }
   ); 
}







barchart_bihar_vs_district_rainfall_price(year,district,rain_fall_type,compare,controller,views,price){


  let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views+ `&price=`+price;
  // let url = `${this.apiRoot}`;
    console.log(url);


    let str = rain_fall_type.replace( /_/g, " " );
    
  this.http.get(url).
    subscribe(res => {
      var newdata = res;
      this.spinner.hide();
      if (rain_fall_type == "All") {

        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
          if (j) {
            $("#example-table").tabulator("destroy");
              
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
         
        
          // $("#example-table").tabulator("clearData");

          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
          

      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          }  else {

         
            this.j = res;
            
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
            chart1.render();

            
            // alert("error")
          }

      }
      
      else if (year == "All") {
          if (views == "Table") {
            
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            // $("#example-table").tabulator("destroy");
            $("#example-table").tabulator("setColumns", res["column"]);
            $("#example-table").tabulator("setData", res["data"]);
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);
          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          $("#download-xlsx").unbind('click').click(function(){
            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {
            
            this.j = res;
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
            chart1.render();
            // alert("error")
          }

      }
      else {


        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            // $("#example-table").tabulator("destroy");
            $("#example-table").tabulator("setColumns", res["column"]);
            $("#example-table").tabulator("setData", res["data"]);
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          // $("#example-table").tabulator("setColumns", res["column"]);
          
          // //set new data
          // $("#example-table").tabulator("setData", res["data"]);

          // $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){
            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {

            this.j = res;
            console.log(res);
           let chart = new CanvasJS.Chart("chartContainer", this.j);
            chart.render();

          }

      }
      } ,
      err => {
        console.log("Error occured.")
        this.spinner.hide();
      }
   ); 

   
}



six_column_data(year,district,rain_fall_type,compare,controller,views,district1){
  let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views+ `&district1=`+district1;
  // let url = `${this.apiRoot}`;
    console.log(url);
    let str = rain_fall_type.replace( /_/g, " " );
    
  this.http.get(url).
    subscribe(res => {
      var newdata = res;
      this.spinner.hide();
      if (rain_fall_type == "All") {

        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
   
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });

          }  else {
            this.j = res;
            
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
    
            chart1.render();
            // alert("error")
          }

      }
      
      else if (year == "All") {
          if (views == "Table") {

            console.log("error");
            
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);
          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {
            
            this.j = res;
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);

            
            chart1.render();
            // alert("error")
          }

      }
      else {


        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {


            this.j = res;
            console.log(res);
           let chart = new CanvasJS.Chart("chartContainer", this.j);
            chart.render();

          }

      }
      } ,
      err => {
        console.log("Error occured.")
        this.spinner.hide();
      }
   ); 
}




six_column_with_fule(year,district,rain_fall_type,compare,controller,views,fuel){
  let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views+ `&fuel=`+fuel;
  // let url = `${this.apiRoot}`;
    console.log(url);
    let str = rain_fall_type.replace( /_/g, " " );
    
  this.http.get(url).
    subscribe(res => {
      var newdata = res;
      this.spinner.hide();
      if (rain_fall_type == "All") {

        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
   
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });

          }  else {
            this.j = res;
            
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
    
            chart1.render();
            // alert("error")
          }

      }
      
      else if (year == "All") {
          if (views == "Table") {

            console.log("error");
            
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);
          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {
            
            this.j = res;
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);

            
            chart1.render();
            // alert("error")
          }

      }
      else {


        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {


            this.j = res;
            console.log(res);
           let chart = new CanvasJS.Chart("chartContainer", this.j);
            chart.render();

          }

      }
      } ,
      err => {
        console.log("Error occured.")
        this.spinner.hide();
      }
   ); 
}



chart(year,district,rain_fall_type,compare,controller,views,months){
  console.log(months);
  
  let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views+ `&month=`+ months;
  // let url = `${this.apiRoot}`;
    console.log(url);
    let str = rain_fall_type.replace( /_/g, " " );
    
  this.http.get(url).
    subscribe(res => {
      var newdata = res;
      this.spinner.hide();
      if (rain_fall_type == "All") {

        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
   
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          }  else {
            this.j = res;
            
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);
    
            chart1.render();
            // alert("error")
          }

      }
      
      else if (year == "All") {
          if (views == "Table") {

            console.log("error");
            
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);
          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");

          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {
            
            this.j = res;
            let chart1 = new CanvasJS.Chart("chartContainer", this.j);

            
            chart1.render();
            // alert("error")
          }

      }
      else {


        if (views == "Table") {
          var j = $( "#example-table" ).hasClass( "tabulator" )
          console.log(res["data"]);
           
          if (j) {
            $("#example-table").tabulator("destroy");
           
            
          }
          $("#example-table").tabulator({
            layout:"fitColumns"});
         
          //set new columns
          $("#example-table").tabulator("setColumns", res["column"]);
          
          //set new data
          $("#example-table").tabulator("setData", res["data"]);

          $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
          $("#download-xlsx").unbind('click').click(function(){

            $("#example-table").tabulator("download", "xlsx", "data.xlsx");
          });
      
          $("#download-csv").click(function(){
            $("#example-table").tabulator("download", "csv", "data.csv");
        });
        
        //trigger download of data.json file
        $("#download-json").click(function(){
            $("#example-table").tabulator("download", "json", "data.json");
        });

          } else {


            this.j = res;
            console.log(res);
           let chart = new CanvasJS.Chart("chartContainer", this.j);
            chart.render();

          }

      }
      } ,
      err => {
        console.log("Error occured.")
        this.spinner.hide();
      }
   ); 
}

  barchart_bihar_vs_district(year,district,rain_fall_type,compare,controller){
    let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // let url = `${this.apiRoot}`;
      console.log(url);
      console.log(year);
      
    this.http.get(url).
      subscribe(res => {

        this.spinner.hide();

        if (rain_fall_type == "All") {
          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: rain_fall_type
            },
            data: this.j
          });

          
          chart1.render();
          // alert("error")

        }
        
        else if (year == "All") {
          console.log("trigger");

          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: rain_fall_type
            },
            data: this.j
          });

          
          chart1.render();
          // alert("error")

        }
        else {

          this.j = res;
          console.log(res);
         let chart = new CanvasJS.Chart("chartContainer", {
           animationEnabled: true,
           exportEnabled: true,
      
           data: [{
             type: "column",
             dataPoints: 
             this.j
           }]
         });
          chart.render();

        }
        }
     ); 
  }



  bubble_bihar_vs_district(year,district,rain_fall_type,compare,controller){
  
    let url = `${this.apiRoot1}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
      subscribe(res => {

        if (rain_fall_type == "All") {
          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: rain_fall_type
            },
            data: this.j
          });

          
          chart1.render();
          // alert("error")

        } else {

          this.j = res;
          console.log(res);
         let chart = new CanvasJS.Chart("chartContainer", {
           animationEnabled: true,
           exportEnabled: true,
           title: {
             text: rain_fall_type
           },
           data: [{
             type: "scatter",
             dataPoints: 
             this.j
           }]
         });
          chart.render();

        }
        }
     ); 
  }


  trend_line_all(data,year,rain_fall_type,views,controller) {
    let url = `${this.apiRoot1}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
    subscribe(res => {
      this.j = res;
      var y = this.j
      function compareDataPointX(dataPoint1, dataPoint2) {
        return dataPoint1.y - dataPoint2.y;
       }
        var z = [
          {y: 1, label: "Khagaria"},
          {y: 2 ,label: "Khagaria"}
        ];
       if (rain_fall_type == "All") {
        var bar_data:any = y
      } else {
        var bar_data:any = [
          {        
          type: "line",
          dataPoints: y
          }     
        ]
      }
      var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: rain_fall_type 
      },
      data: bar_data
    });
    chart.options.data[0].dataPoints.sort(compareDataPointX);
    chart.render();
      }
   ); 
  }
bar_chart_all(data,year,rain_fall_type,controller){
  // let url = `${this.apiRoot}`;
  let url = `${this.apiRoot1}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
   console.log(url);
  this.http.get(url).
  subscribe(res => {
    this.j = res;
    var y = this.j
    function compareDataPointX(dataPoint1, dataPoint2) {
      return dataPoint1.y - dataPoint2.y;
     }
      var z = [
        {y: 1, label: "Khagaria"},
        {y: 2 ,label: "Khagaria"}
      ];
     if (rain_fall_type == "All") {
      var bar_data:any = y
    } else {
      var bar_data:any = [
        {        
        type: "column",
        dataPoints: y
        }     
      ]
    }
    var chart = new CanvasJS.Chart("chartContainer",
  {
    axisX:{
      interval:1,
      labelMaxWidth: 180,           
      labelAngle: -45
    },
    title:{
      text: rain_fall_type 
    },
    data: bar_data
  });
  chart.options.data[0].dataPoints.sort(compareDataPointX);
  chart.render();
    }
 ); 
}


Bubble_all(data,year,rain_fall_type,controller,views){
  // let url = `${this.apiRoot}`;
  let url = `${this.apiRoot1}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;
  console.log(url);
  this.http.get(url).
  subscribe(res => {
    this.j = res;
    var y = this.j
    function compareDataPointX(dataPoint1, dataPoint2) {
      return dataPoint1.y - dataPoint2.y;
     }
      var z = [
        {y: 1, label: "Khagaria"},
        {y: 2 ,label: "Khagaria"}
      ];
     if (rain_fall_type == "All") {
      var bar_data:any = y
    } else {
      var bar_data:any = [
        {        
        type: "scatter",
        dataPoints: y
        }     
      ]
    }
    var chart = new CanvasJS.Chart("chartContainer",
  {
    axisX:{
      interval:1,
      labelMaxWidth: 180,           
      labelAngle: -45
    },
    title:{
      text: rain_fall_type 
    },
    data: bar_data
  });
  chart.options.data[0].dataPoints.sort(compareDataPointX);
  chart.render();
    }
 ); 
}

  pie(){
    let url = `${this.apiRoot}`;
    this.http.get(url).
      subscribe(res => {
        this.j = res;
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Basic Column Chart in Angular"
          },
          data: [{
            type: "pie",
            dataPoints: 
            this.j
          }]
        });
        chart.render();
        }
    ); 
  }
}
