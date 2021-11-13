import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'touba';
   constructor(){}
  ngOnInit(){
   this.MyJsFunc();
  }

  MyJsFunc(){
     $('.sidenav').sidenav();
     $('.slider').slider({
                indicators: false,
                height: 500,
                transition: 500,
                interval: 3000
              });
  }
}
