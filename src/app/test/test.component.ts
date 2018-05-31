import { Component, OnInit } from '@angular/core';
declare var CanvasJS:any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var chart = new CanvasJS.Chart("chartContainer", {
      title:{
        text: "My First Chart in CanvasJS"              
      },
      data: [              
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "apple",  y: 10  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
        ]
      }
      ]
    });
    chart.render();
  }

}
