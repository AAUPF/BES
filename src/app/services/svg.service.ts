import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Districts } from '../data/districts';
import { iif } from 'rxjs';
import { environment } from '../../environments/environment';
declare var CanvasJS:any;
@Injectable({
  providedIn: 'root'
})
export class SvgService {
  constructor(private http: HttpClient) { }
  // private apiRoot: string = "http://localhost:3000/static_pages/help";
  // private apiRoot1: string = "http://localhost:3000/rainfalls";
  private apiRoot1: string = "http://bihar.aaupf.org//rainfalls";
  apiRoot: string = environment.apiUrl;

  test(a,views,rain_fall_type,year) {
    let url = `${this.apiRoot}/rainfalls/test?views=` + views +'&rain_fall_type='+rain_fall_type+'&year='+year;    
  console.log(url);
    // title;
    var title = rain_fall_type;
    this.http.get(url).
    subscribe(res => {
      this.j = res;
       this.map_districts(this.j) 
       }
       );
    // District.classList.add("mystyle");
    // console.log(url);
  }

  map_districts(l) {
    let map = document.getElementById("biharsvg") as HTMLObjectElement;
    let svgDoc = map.contentDocument; // should be fine
    // let District = svgDoc.getElementById(a);
    var dis = ""
    var dis_y = ""
    var dis_w = ""
    var dis_z = ""
    // console.log(dis);
    for (var k in l){
      if (l.hasOwnProperty(k)) {
           if (l[k].below_min) {
            for (let index = 0; index < l[k].below_min.length; index++) {
              const element = l[k].below_min[index];
              //  console.log(element.label+ "Min");
             var string =  element.label.toLowerCase();
                if (index == l[k].below_min.length - 1) {
                  dis += "#"+string+"";
                } else {
                  dis += "#"+string+",";
                }
            }
             
           } 
           else if (l[k].min) {
            for (let index = 0; index < l[k].min.length; index++) {
              const element = l[k].min[index];
              

              if (element.label == "W. Champaran") {
                var string:any = "wchamparan";

              } else {
                var string:any =  element.label.toLowerCase();
              }

              if (index == l[k].min.length- 1) {
                dis_y += "#"+string+"";
              } else {
                dis_y += "#"+string+",";
              }
          
            }
          }

          else if (l[k].blow_max) {
            for (let index = 0; index < l[k].blow_max.length; index++) {
              const element = l[k].blow_max[index];

              if (element.label == "E. Champaran") {
                var string:any = "echamparan";

              } else {
                var string:any =  element.label.toLowerCase();
              }

              if (index == l[k].blow_max.length- 1) {
                dis_w += "#"+string+"";
              } else {
                dis_w += "#"+string+",";
              }
            }
          }

          else if (l[k].max) {
            for (let index = 0; index < l[k].max.length; index++) {
              const element = l[k].max[index];

              var string:any =  element.label.toLowerCase();
              if (index == l[k].max.length- 1) {
                dis_z += "#"+string+"";
              } else {
                dis_z += "#"+string+",";
              }
            }
          }
           
           else {
             
           }
      }
  }
  let de = svgDoc.querySelectorAll(".fil0");
  let x = svgDoc.querySelectorAll(dis);
  let y = svgDoc.querySelectorAll(dis_y);
  let w = svgDoc.querySelectorAll(dis_w);
  let z = svgDoc.querySelectorAll(dis_z);



  // var i;
  // for (i = 0; i < x.length; i++) {
  //     x[i].classList.add("mystyle");
  // }
  // console.log(dis);

  // console.log(dis_y + "Second");
  // console.log(dis_w) + "Third";
  // console.log(dis_z) + "Forth";

  var yellow:any
  var orange:any
  var green:any
  var red:any

  yellow = "Yellow"
  orange = "Orange"
  green = "Green"
  red = "Red"


  var i;
  // // for (i = 0; i < de.length; i++) {
  // //     x[i].classList.remove(yellow);
  // // }

  for (i = 0; i < de.length; i++) {
     console.log(de[i].classList.item(0)); 
    // console.log(i);
  
     de[i].classList.remove("Red","Yellow","Orange","Green");
  }

  this.color_map(x,yellow)
  this.color_map(y,orange)
  this.color_map(w,green)
  this.color_map(z,red)

  // this.color_map(y,color)


}


color_map(x,color) {

  // let x = svgDoc.querySelectorAll(dis);
  var i;


  for (i = 0; i < x.length; i++) {
      x[i].classList.add(color);
  }

}

 svg() {
  const that = this;
  console.log("Test");
  let a = document.getElementById("biharsvg")  as HTMLObjectElement;
      var svgDoc = a.contentDocument;
      var wchamparan = svgDoc.getElementById("wchamparan");
      var modal = document.getElementById('myModal');
      var wchamparan1 = svgDoc.getElementById("wchamparan").getAttribute("id");;
      var span = document.getElementById("close");
      span.onclick = function() {
        modal.style.display = "none";
       }
      wchamparan.onclick = function() {
      modal.style.display = "block";  
      that.barmodal(wchamparan1);
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
      }
   ); 


  }
  barmodal(abc){
     if (abc == "wchamparan") {
      this.barchart(abc)
     } else {
       alert("ahhh");
    }
    // let chart = new CanvasJS.Chart("chartContainer1", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Basic Column Chart in Angular"
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
