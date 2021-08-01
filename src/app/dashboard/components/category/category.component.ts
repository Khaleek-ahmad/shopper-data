import { Component, OnInit } from '@angular/core';

// https://primefaces.org/primeng/showcase/#/table/lazy
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {

  loading:boolean=false;
  isShowCreateCategory: boolean = false;
  constructor() { }
  ngOnInit() {

  }
  addNewCategory() {
    this.isShowCreateCategory = true;
    //this.sendReceiveData.saveOnShowCreatePartner(true);
  }
  onVisibledChange(value:any) {
    this.isShowCreateCategory = value;
    // this.sendReceiveData.saveOnShowCreatePartner(value);
  }

  onClose(value:any) {
    this.isShowCreateCategory = value;
  }

}
