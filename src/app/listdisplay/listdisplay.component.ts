import { Component, OnInit } from '@angular/core';
import { Designation } from '../table/designation';
import { TabledataService } from '../tabledata.service';

@Component({
  selector: 'app-listdisplay',
  templateUrl: './listdisplay.component.html',
  styleUrls: ['./listdisplay.component.css']
})
export class ListdisplayComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit() {

  }


}
