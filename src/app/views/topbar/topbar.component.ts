import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.sidenav').sidnav
  }
  
 
}
