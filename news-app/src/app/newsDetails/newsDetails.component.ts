import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsDetails',
  templateUrl: './newsDetails.component.html',
  styleUrls: ['./newsDetails.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news:any;
  constructor() { }

  ngOnInit() {
  }

}
