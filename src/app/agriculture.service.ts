import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
declare var CanvasJS:any;

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  constructor(private http: HttpClient) { }
  private apiRoot: string = "http://localhost:3000/static_pages/help";
  private apiRoot1: string = "http://localhost:3000/rainfalls";
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
