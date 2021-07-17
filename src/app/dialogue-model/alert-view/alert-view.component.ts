import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class AlertViewComponent implements OnInit, AfterViewInit {
  @Input() closable = true;
  @Input() visible: boolean;
  //@Input() setwidth;
  @Output() onVisibleChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @ViewChild(TaskShellDetailComponent) managerTaskShell:TaskShellDetailComponent;
  // @Output('onMax') onMax;
  //mystyle;

  //max: boolean;

  constructor() {
    this.visible = true;
   // this.onMax = new EventEmitter<boolean>(false);
  }

  ngOnInit() {
    // this.managerService.taskSelected.subscribe(x=>{
    //   this.onMax.emit({max:true,width:600});     
    // })
  }
  ngOnChanges() {
  
    // if (this.setwidth !== undefined)
    //   this.mystyle = { 'max-width': this.setwidth };
    // else
    //   this.mystyle = { 'max-width': '550px' };
    
  }
  close() {
    // this.visible = false;
    // this.max = false;
    // this.onVisibleChanged.emit(this.visible);

  }
  maximize() {

    //this.max = true;
    //this.onMax.emit(true);
    //this.onMax.emit({ max: true, width: this.myIdentifier.nativeElement.offsetWidth });
  }
  minimize() {
    //this.max = false;
    //this.onMax.emit(false);
    //this.onMax.emit({ max: true, width: this.myIdentifier.nativeElement.offsetWidth });
  }

  ngAfterViewInit() {

    // if (this.myIdentifier) {
    //   console.log("this.myIdentifier.nativeElement.offsetWidth : ", this.myIdentifier.nativeElement.offsetWidth);
    //   //     this.onMax.emit({max:this.max,width:this.myIdentifier.nativeElement.offsetWidth});
    // }
  }

  //@ViewChild('myIdentifier', { static: false })
 // myIdentifier: ElementRef;

}