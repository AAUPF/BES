import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TableExport } from '../../../node_modules/tableexport';
import{Functions} from '../data/func'
import { NgxSpinnerService } from 'ngx-spinner';

// var myValidator = new Functions();
declare var $:any;
 let f = new Functions()
declare var google:any;

declare var CanvasJS:any;
@Injectable({
  providedIn: 'root'
})
export class Land {
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
   private apiRoot: string = "http://localhost:3000/static_pages/help";
  // private apiRoot1: string = "http://localhost:3000/lands";
  // private apiRoot1: string = "http://bihar.aaupf.org//lands";
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


  barchart1(data,year,rain_fall_type,compare){
    let url = `${this.apiRoot1}/lands/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
      subscribe(res => {

        if (rain_fall_type == "All") {
          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            axisX:{
                labelMaxWidth: 180,           
                labelAngle: -45
              },
        
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
           axisX:{
            labelMaxWidth: 180,           
            labelAngle: -45
          },
           title: {
             text: rain_fall_type
           },
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
  trend_line(data,year,rain_fall_type,compare) {
  
    let url = `${this.apiRoot1}/lands/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
      subscribe(res => {
  
        if (rain_fall_type == "All") {
          this.j = res;
          let chart1 = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            axisX:{
                labelMaxWidth: 180,           
                labelAngle: -45
              },
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
           axisX:{
            labelMaxWidth: 180,           
            labelAngle: -45
          },
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
  }
  trend_line_bihar_vs_district(year,district,rain_fall_type,compare) {
    let url = `${this.apiRoot1}/lands/test?search=` + district + `&year=`+year+ `&compare=`+compare +`&rain_fall_type=`+rain_fall_type+'&views=Trend Line';
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
              text: rain_fall_type+" "+year
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
             text: rain_fall_type+" "+year
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
 
  }
testgoogle() {

    let url = "http://localhost:3000//lands/test?search=Bhagalpur&year=2016&rain_fall_type=Winter%20Rain&views=Table&compare=Bihar%20vs%20District"
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

  barchart_bihar_vs_district(year,district,rain_fall_type,compare){
    let url = `${this.apiRoot1}/lands/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
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
              text: rain_fall_type+" "+year
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
             text: rain_fall_type+" "+year
           },
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


  trend_line_all(data,year,rain_fall_type,views) {
    let url = `${this.apiRoot1}/lands/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;
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
        text: rain_fall_type + " " +year
      },
      data: bar_data
    });
    chart.options.data[0].dataPoints.sort(compareDataPointX);
    chart.render();
      }
   ); 
  }
bar_chart_all(data,year,rain_fall_type){
  // let url = `${this.apiRoot}`;
  let url = `${this.apiRoot1}/lands/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
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
      text: rain_fall_type + " " +year
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

  table(year,district,rain_fall_type,compare){

    let url = `${this.apiRoot1}/lands/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    console.log(url);

    this.http.get(url).
    subscribe(res => {
      this.j = res;
      //  console.log(res);
       var chart = new CanvasJS.Chart("chartContainer", {
        data: [
        {
          type: "column",
          dataPoints: this.j
        }					
        ]
      });

      if (rain_fall_type == "All") {
        this.createTableall(this.j,rain_fall_type,year);

        this.spinner.hide();
      } else {
        this.createTable(chart,rain_fall_type,year);
        this.spinner.hide();
      }
      

      }
   ); 
  }


  createTable(chart,rain_fall_type,year){
    $('#myId').remove();
     var table = document.createElement("TABLE")  as HTMLTableElement;    
     var row,header,cell1, cell2;
     var data = chart.options.data;
     // table.style.border = "1px solid #000"; 
     header = table.createTHead();
     row = header.insertRow(0);
     table.setAttribute("id", "myId");    
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
     // cell1.style.border = "1px solid #000"; 
     // cell2.style.border = "1px solid #000"; 
     cell1.innerHTML = "<strong>Districts</strong>"; 
     cell2.innerHTML = "<b>"+rain_fall_type+"_Value</b>"; 
     for(var i = 0; i < data.length; i++){
       for(var j = 0; j< data[i].dataPoints.length; j++){
         // console.log(data[i].dataPoints[j]);
         // console.log(data[i].dataPoints[j].label);
         row = table.insertRow(1);
         cell1 = row.insertCell(0);
         cell2 = row.insertCell(1);
         // cell1.style.border = "1px solid #000"; 
         // cell2.style.border = "1px solid #000"; 
         cell1.innerHTML = "<strong>"+data[i].dataPoints[j].label+"</strong>";
         cell2.innerHTML = data[i].dataPoints[j].y; 
       }
     }    
     // document.getElementById("chartContainer").innerHTML = "<h1>"+rain_fall_type+" "+year+"</h2>";

     document.getElementById("chartContainer1").appendChild(table);
 this.export()
   
}


createTableall(chart,rain_fall_type,year){
 $('#myId').remove();
 var table = document.createElement("TABLE")  as HTMLTableElement;    
 var row,header,cell1, cell2;
 var data = chart;
 console.log(data);
 
 // table.style.border = "1px solid #000"; 
 header = table.createTHead();
 row = header.insertRow(0);
 table.setAttribute("id", "myId");    
 cell1 = row.insertCell(0);
 cell2 = row.insertCell(1);
 // cell1.style.border = "1px solid #000"; 
 // cell2.style.border = "1px solid #000"; 
 cell1.innerHTML = "<strong>Districts</strong>"; 
 cell2.innerHTML = "<strong>"+rain_fall_type+"_Value"; 
 for (let index = 0; index < data.length; index++) {
   var element = data[index];
   console.log(element);
   for (let index = 0; index < element.dataPoints.length; index++) {
     var g = element.dataPoints[index];
     console.log(g);
       row = table.insertRow(1);
       cell1 = row.insertCell(0);
       cell2 = row.insertCell(1);
       // cell1.style.border = "1px solid #000"; 
       // cell2.style.border = "1px solid #000"; 
       cell1.innerHTML = "<strong>"+g.label+"</strong>";
       cell2.innerHTML = g.y; 
   }
   
 }
 // for(var i = 0; i < data.length; i++){
 //   for(var j = 0; j< data[i].dataPoints.length; j++){
 //     // console.log(data[i].dataPoints[j]);
 //     // console.log(data[i].dataPoints[j].label);

 //     for (let index = 0; index < data[i].dataPoints[j].dataPoints.length; index++) {
 //       const element = data[i].dataPoints[j].dataPoints[index];
 //       console.log(element);

 //       row = table.insertRow(1);
 //       cell1 = row.insertCell(0);
 //       cell2 = row.insertCell(1);
 //       // cell1.style.border = "1px solid #000"; 
 //       // cell2.style.border = "1px solid #000"; 
 //       cell1.innerHTML = element.label;
 //       cell2.innerHTML = element.y; 
 //     }
 
 //   }
 // }    
 // document.getElementById("chartContainer").innerHTML = "<h1>"+rain_fall_type+" "+year+"</h2>";
 document.getElementById("chartContainer1").appendChild(table);
 this.export()

}

table1(){

  var table = document.getElementById("myId")  as HTMLTableElement;
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";

}

export(){

  var tableId = 'myId';
  var ExportButtons = document.getElementById(tableId);
  var instance = new TableExport(ExportButtons, {
    formats: ['xls', 'csv'],
    exportButtons: false
  });
  var exportDataXLS = instance.getExportData()[tableId]['xls'];
  var exportDataCSV = instance.getExportData()[tableId]['csv'];

  var XLSbutton = document.getElementById('click');
  XLSbutton.addEventListener('click', function (e) {
    
    instance.export2file(exportDataXLS.data, exportDataXLS.mimeType, exportDataXLS.filename, exportDataXLS.fileExtension);
  });
}


}
