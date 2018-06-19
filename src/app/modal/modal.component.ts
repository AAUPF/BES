import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { AgricultureService } from '../agriculture.service';

declare var CanvasJS:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private AgricultureService: AgricultureService,private SvgService: SvgService) { }

  ngOnInit() {
    
    
  }

}
