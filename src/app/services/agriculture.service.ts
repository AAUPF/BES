import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

declare var CanvasJS:any;
@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  constructor(private http: HttpClient) { }
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


  trend_line_bihar_vs_district(year,district,rain_fall_type,compare) {
    let url = `${this.apiRoot1}/rainfalls/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    // let url = `${this.apiRoot}`;
      console.log(url);
    this.http.get(url).
      subscribe(res => {
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
     ); 
  }


  barchart_bihar_vs_district(year,district,rain_fall_type,compare){
    // let url = `${this.apiRoot}`;
    let url = `${this.apiRoot1}/rainfalls/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    console.log(url);

    this.http.get(url).
      subscribe(res => {
        this.j = res;
        console.log(this.j);
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: rain_fall_type+" " +year
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


  trend_line_all(data,year,rain_fall_type,views) {
    let url = `${this.apiRoot1}/rainfalls/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;
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
  let url = `${this.apiRoot1}/rainfalls/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
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
}
