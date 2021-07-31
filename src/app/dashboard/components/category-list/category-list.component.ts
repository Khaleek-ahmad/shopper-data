import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../../Models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-category-list',
  providers: [],
  templateUrl: './category-list.component.html',
   styleUrls: ['./category-list.component.css']
  ,
  styles: [
    `
      :host ::ng-deep .p-cell-editing {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    `
  ]
})


export class CategoryListComponent implements OnInit {
  // @ViewChild('dt', { static: false }) private _dt: Table;
  // public cols: any[];
  public loading: boolean = false;
  // public categoryList: Category[];
  categoryList: any;
  clonedProducts: { [s: string]: any } = {};
  constructor(
    private CategoryService: CategoryService,
    private sanitizer: DomSanitizer,
    //private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.init();
    this.getCotegoryList();
  }
  init() {
    // this.cols = [
    //   { field: '_id', header: 'ID', index: 1 },
    //   { field: 'name', header: 'USER NAME', index: 2 },
    //   { field: 'image', header: 'IMAGE', index: 3 },
    //   { field: 'update', header: 'UPDATE', index: 4 },
    //   { field: 'delete', header: 'DELETE', index: 5 },
    // ];
  }

  // thumbnail: SafeResourceUrl;
  getCotegoryList() {

    this.CategoryService.getAll().subscribe((response: any) => {
     // debugger;
      this.categoryList = response.body["categories"];

    })
  }

  updateCategory(id:any, name:any): void {
    //this.message = '';

    this.CategoryService.update(id,name)
      .subscribe(
        response => {
          console.log(response);
          //this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  onRowEditInit(data: Category) {
   // debugger;
    this.clonedProducts[data._id] = { ...data };
  }
  onRowDeleteInit(data: Category) {
     debugger;
     this.clonedProducts[data._id] = { ...data };
   }

  onRowEditSave(data: Category) {  
    
    if (data._id.length > 0) { 
      debugger;
      // let dataModel=<Category>{};
      // dataModel._id=data._id;
      // dataModel.image=data.image;
      // dataModel.name=data.name;
      // dataModel.sequence=data.sequence;

      this.updateCategory(data._id, data)
      delete this.clonedProducts[data._id];
      //this.messageService.add({severity:'success', summary: 'Success', detail:'Category is updated'});
    }
    else {
      //this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    }
  }
  onRowEditCancel(index: number) {
    debugger;
    this.categoryList[index] = this.clonedProducts[this.categoryList[index]._id];
    delete this.clonedProducts[this.categoryList[index]._id];
  }


}


