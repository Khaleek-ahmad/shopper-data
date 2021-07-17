import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  //isCloseVisible:boolean =false;
  constructor(private router:Router) { }

  ngOnInit() {
    $(".content-wrapper").css("height", $(window).height() - 110);
  } 

  ngAfterViewInit(){
    $(".content-wrapper").css("height", $(window).height() - 110);
  }
  ngDoCheck(){
    $(".content-wrapper").css("height", $(window).height() - 110);
  }
  // ngOnChanges(){
  //   $(".content-wrapper").css("height", $(window).height() - 90);
  // }
   @HostListener('window:resize', ['$event'])
      onResize(event) {
      $(".content-wrapper").css("height", $(window).height() - 110);
   }
}
