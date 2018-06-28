import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Districts } from '../data/districts';
import { iif } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoadingModule } from 'ngx-loading';
import { NgxSpinnerService } from 'ngx-spinner';
import{Functions} from '../data/func'
// var myValidator = new Functions();
// declare var CanvasJS:any;
 let f = new Functions()
declare var CanvasJS:any;
@Injectable({
  providedIn: 'root'
})
export class SvgService {
  public loading = false;
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
  // private apiRoot: string = "http://localhost:3000/static_pages/help";
  // private apiRoot1: string = "http://localhost:3000/rainfalls";
  private apiRoot1: string = "http://bihar.aaupf.org/rainfalls";
  apiRoot: string = environment.apiUrl;

  test(a,views,rain_fall_type,year,districts) {
    let url = `${this.apiRoot}/rainfalls/test?views=` + views +'&rain_fall_type='+rain_fall_type+'&year='+year;   
    // title;
    console.log(url);
    var title = rain_fall_type;
    this.http.get(url).
    subscribe(res => {
      this.j = res;
      f.testy(this,districts,rain_fall_type,views,year)      
       },
       err => {
         console.log("Error occured.")
         this.spinner.hide();
       }
       );
    // District.classList.add("mystyle");
    // console.log(url);
  }



  map_bihar_vs_districts(l,rain_fall_type,views,year) {
    let url = `${this.apiRoot}/rainfalls/test?views=` + views +'&rain_fall_type='+rain_fall_type+'&year='+year;  
    
    
    this.http.get(url).
    subscribe(res => {
      this.j = res;   
      f.map_b_vs_d(this,l,rain_fall_type,res)

       },
       err => {
         console.log("Error occured.")
         this.spinner.hide();
       }
       );

  }

  map_districts(l) {
    f.map_all(this,l)
 }

color_map(x,color) {
  // let x = svgDoc.querySelectorAll(dis);
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.add(color);
  }

}


 svg(z,views,rain_fall_type,year,districts) {
  const that = this;
  let a = document.getElementById("biharsvg")  as HTMLObjectElement;
      var svgDoc = a.contentDocument;
      var wchamparan = svgDoc.getElementById("wchamparan");
      let de = svgDoc.getElementsByClassName("fil0");
      var modal = document.getElementById('myModal');
      var wchamparan1 = svgDoc.getElementById("wchamparan").getAttribute("id");
      var span = document.getElementById("close");
      span.onclick = function() {
        modal.style.display = "none";
       }
    // de.onclick = function(){
    //   alert("ok");
    //   var id = de.getElementById(this);
    //    console.log(id);
    //  };

    var i;
    for (i = 0; i < de.length; i++) {
      var j = de[i].getAttribute("id");
      svgDoc.getElementById(j).onclick = function() {
          modal.style.display = "block";  
           var e = this.getAttribute("id")
          //  document.getElementById("demo").innerHTML = e;

            that.barmodal(e,year,rain_fall_type,views);
        }
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }  
  }
//   let a = document.getElementById("biharsvg")  as HTMLObjectElement;
//   a.addEventListener("load", () =>{
//        var svgDoc = a.contentDocument; 
//        var wchamparan = svgDoc.getElementById("wchamparan");
//        wchamparan.onclick = ()  =>{
//         this.bar()
//         console.log("hello");
//      }
// })
}
svg1() {
  const that = this;
  let a = document.getElementById("biharsvg")  as HTMLObjectElement;
      var svgDoc = a.contentDocument;
      var wchamparan = svgDoc.getElementById("wchamparan");
      wchamparan.onclick = function() {
        alert("hello");
      }
}
  bar(){
    console.log("Bar");
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
    chart.render();
  }
trend_line(data,year,rain_fall_type) {
  let url = `${this.apiRoot}/rainfalls/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
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
  table(year,district,rain_fall_type,compare){

    let url = `${this.apiRoot}/rainfalls/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
console.log(url);

    this.http.get(url).
    subscribe(res => {
      this.j = res;
       console.log(res);
       var chart = new CanvasJS.Chart("chartContainer", {
        data: [
        {
          type: "column",
          dataPoints: this.j
        }					
        ]
      });
      this.createTable(chart,rain_fall_type,year);
      this.spinner.hide();

      }
   ); 


  }
  barmodal(abc,year,rain_fall_type,views){

    if (abc == "echamparan") {
      var u = "E. Champaran"
    } else if(abc == "wchamparan") {
      var u = "W. Champaran"
    } else {
      u = abc
    }
    var url = `${this.apiRoot}/rainfalls/test?search=` + u + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
    this.http.get(url).
    subscribe(res => {
      this.j = res;
      let chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: abc + " " + rain_fall_type + " " + year
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


  //  let url = `${this.apiRoot1}/test?search=` + u + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+views;
  //  console.log(url);

  //  this.http.get(url).
  //    subscribe(res => {
  //      this.j = res;
  //      console.log(this.j);
  //      let chart = new CanvasJS.Chart("chartContainer1", {
  //        animationEnabled: true,
  //        exportEnabled: true,
  //        title: {
  //          text: rain_fall_type+" " +year
  //        },
  //        data: [{
  //          type: "column",
  //          dataPoints: 
  //          this.j
  //        }]
  //      });
  //      chart.render();
  //      }
  //   ); 

    // let chart = new CanvasJS.Chart("chartContainer1", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: abc
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: 71, label: "Apple" },
    //       { y: 55, label: "Mango" },
    //       { y: 50, label: "Orange" },
    //       { y: 65, label: "Banana" },
    //       { y: 95, label: "Pineapple" },
    //       { y: 68, label: "Pears" },
    //       { y: 28, label: "Grapes" },
    //       { y: 34, label: "Lychee" },
    //       { y: 14, label: "Jackfruit" }
    //     ]
    //   }]
    // });
    // chart.render();
  }
  j:any;
  barchart(data){
    let url = `${this.apiRoot}?search=` + data ;
    this.http.get(url).
      subscribe(res => {
        this.j = res;
        let chart = new CanvasJS.Chart("chartContainer1", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: data
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
  barchart1(data,year,rain_fall_type){
    let url = `${this.apiRoot}/rainfalls/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
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
    createTable(chart,rain_fall_type,year){
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
      cell1.innerHTML = "<b>Districts</b>"; 
      cell2.innerHTML = "<b>Value</b>"; 
      for(var i = 0; i < data.length; i++){
        for(var j = 0; j< data[i].dataPoints.length; j++){
          console.log(data[i].dataPoints[j]);
          // console.log(data[i].dataPoints[j].label);

          
          row = table.insertRow(1);
          cell1 = row.insertCell(0);
          cell2 = row.insertCell(1);
          // cell1.style.border = "1px solid #000"; 
          // cell2.style.border = "1px solid #000"; 
          cell1.innerHTML = data[i].dataPoints[j].label;
          cell2.innerHTML = data[i].dataPoints[j].y; 
        }
      }    
      // document.getElementById("chartContainer").innerHTML = "<h1>"+rain_fall_type+" "+year+"</h2>";
      document.getElementById("chartContainer").appendChild(table);
  }
}
