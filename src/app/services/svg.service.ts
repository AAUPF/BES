import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Districts } from '../data/districts';
import { iif } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoadingModule } from 'ngx-loading';
import { NgxSpinnerService } from 'ngx-spinner';
import{Functions} from '../data/func'
import { TableExport } from '../../../node_modules/tableexport';

// var myValidator = new Functions();
declare var $:any;
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
  test(views,year,districts,rain_fall_type,Comparison,controller) {
    // let url = `${this.apiRoot}/`+controller+`/test?views=` + views +'&rain_fall_type='+rain_fall_type+'&year='+year;
    let url = `${this.apiRoot}/`+controller+`/test?search=` + districts + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;
    // title;
    console.log(url);
    var title = rain_fall_type;
    this.http.get(url).
    subscribe(res => {
      this.j = res;

if (res[7]) {
  console.log(res[7]["data"]["min"]["min"]);


    $( ".dark-green1" ).empty();
    $( ".mid-green1" ).empty();
    $( ".light-green1" ).empty();
    $( ".lighter-yellow1" ).empty();
    $( ".yellow1" ).empty();
    $( ".orange1" ).empty();
    $( ".red1" ).empty();

      $( ".dark-green1" ).append(`<span class=\"dot dark-green\"></span>Above ${res[7]["data"]["above_extreme"]["max"]} `  );
      $( ".mid-green1" ).append(`<span class=\"dot mid-green\"></span>${res[7]["data"]["extreme"]["min"]} to ${res[7]["data"]["extreme"]["max"]} `  );
      $( ".light-green1" ).append(`<span class=\"dot light-green\"></span>${res[7]["data"]["above_max"]["min"]} to ${res[7]["data"]["above_max"]["max"]} `  );
      $( ".lighter-yellow1" ).append(`<span class=\"dot lighter-yellow\"></span>${res[7]["data"]["max"]["min"]} to ${res[7]["data"]["max"]["max"]} `  );
      $( ".yellow1" ).append(`<span class=\"dot yellow\"></span>${res[7]["data"]["blow_max"]["min"]} to ${res[7]["data"]["blow_max"]["max"]} `  );
      $( ".orange1" ).append(`<span class=\"dot orange\"></span>${res[7]["data"]["min"]["min"]} to ${res[7]["data"]["min"]["max"]} `  );
      $( ".red1" ).append(`<span class=\"dot red\"></span> ${res[7]["data"]["below_min"]["min"]} to ${res[7]["data"]["below_min"]["max"]} `  );
} 
      f.testy(this,districts,rain_fall_type,views,year,Comparison,res,controller)      
       },
       err => {
         console.log("Error occured.")
         this.spinner.hide();
       }
       );
    // District.classList.add("mystyle");
    // console.log(url);
  }
  map_bihar_vs_districts(l,rain_fall_type,views,year,controller) {
    let url = `${this.apiRoot}/`+controller+`/test?views=` + views +'&rain_fall_type='+rain_fall_type+'&year='+year;  
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

  map_districts(l,rain_fall_type,year) {
    f.map_all(this,l,rain_fall_type,year)
 }

color_map(x,color) {
  // let x = svgDoc.querySelectorAll(dis);

  console.log(x);
  
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.add(color);
  }

}
 svg(z,views,rain_fall_type,year,districts,controller) {
  const that = this;
  let a = document.getElementById("biharsvg")  as HTMLObjectElement;
      var svgDoc = a.contentDocument;
      // var wchamparan = svgDoc.getElementById("wchamparan");
      let de = svgDoc.getElementsByClassName("fil0");
      var modal = document.getElementById('myModal');
      // var wchamparan1 = svgDoc.getElementById("wchamparan").getAttribute("id");
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

            that.barmodal(e,year,rain_fall_type,views,controller);
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
trend_line(data,year,rain_fall_type,controller) {
  // let url = `${this.apiRoot}/rainfalls/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
  // // let url = `${this.apiRoot}`;
  //   console.log(url);
  // this.http.get(url).
  //   subscribe(res => {
  //     this.j = res;
  //      console.log(res);
  //     let chart = new CanvasJS.Chart("chartContainer", {
  //       animationEnabled: true,
  //       exportEnabled: true,
  //       title: {
  //         text: rain_fall_type+" "+year
  //       },
  //       data: [{
  //         type: "line",
  //         dataPoints: 
  //         this.j
  //       }]
  //     });
  //     chart.render();
  //     }
  //  ); 
  let url = `${this.apiRoot}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+'&views=Trend Line';
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
  table(year,district,rain_fall_type,compare,controller){

    let url = `${this.apiRoot}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare;
    console.log(url);

    this.http.get(url).
    subscribe(res => {
      this.j = res;
      //  console.log(res);
      this.spinner.hide();

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
  barmodal(abc,year,rain_fall_type,views,controller){

    if (abc == "echamparan") {
      var u = "E. Champaran"
    } else if(abc == "wchamparan") {
      var u = "W. Champaran"
    } else {
      u = abc
    }
    var url = `${this.apiRoot}/`+controller+`/test?search=` + u + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=column`;
    console.log(url);
    
    this.http.get(url).
    subscribe(res => {
      this.j = res;
      let chart = new CanvasJS.Chart("chartContainer1", this.j);
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
  barchart1(data,year,rain_fall_type,controller){
    let url = `${this.apiRoot}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type;
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


  bubble(data,year,rain_fall_type,controller,views){
    let url = `${this.apiRoot}/`+controller+`/test?search=` + data + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&views=`+views;

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
             text: rain_fall_type+" "+year
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

  var tableId = 'example-table';
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



newtable(year,district,rain_fall_type,compare,controller,views) {

  let url = `${this.apiRoot}/`+controller+`/test?search=` + district + `&year=`+year+ `&rain_fall_type=`+rain_fall_type+ `&compare=`+compare+ `&views=`+views;

  console.log(url);
  
  this.http.get(url).
  subscribe(res => {
    this.j = res;
    this.spinner.hide();

    if (views == "Table") {
      var k = $( "#example-table" ).hasClass( "tabulator" )
      console.log(res["data"]);
       
      if (k) {
        $("#example-table").tabulator("destroy");
       
        // $("#example-table").tabulator('clearData');
      }
      $("#example-table").tabulator({
        layout:"fitColumns"});
        
      //set new columns
      $("#example-table").tabulator("setColumns", res["column"]);
      
      //set new data
      $("#example-table").tabulator("setData", res["data"]);
      $(".tabulator-header-filter input").attr("placeholder","Filter Column...");
      
  }
  

  }); 
  $("#download-xlsx").click(function(){
    $("#example-table").tabulator("download", "xlsx", "data.xlsx");
  });
  
  $("#download-csv").click(function(){
    $("#example-table").tabulator("download", "csv", "data.csv");
  });
  
  //trigger download of data.json file
  $("#download-json").click(function(){
    $("#example-table").tabulator("download", "json", "data.json");
  });
 
}


}


