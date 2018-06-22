import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'app-svgcomponent',
  templateUrl: './svgcomponent.component.html',
  styleUrls: ['./svgcomponent.component.css']
})
export class SvgcomponentComponent implements OnInit {
  title ="";
  constructor(private SvgService: SvgService) { }

  ngOnInit() {

  }

}
