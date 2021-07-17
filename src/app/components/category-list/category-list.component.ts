import { Component, OnInit } from '@angular/core';
import { CategoryList } from 'src/app/models/category-list.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

//  categories: CategoryList={} as  CategoryList;
  categories: Category[]=[]
  //tutorials: Tutorial[] = [];
  currentTutorial: Category = {};
  currentIndex = -1;
  title = '';

  page = 2;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.retrieveCategories();
    // this.categoryService.getAll(1,10).subscribe((response)=>{
    //   this.categories= response;
    // })
  }

  // ngOnInit(): void {
  //   this.retrieveTutorials();
  // }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`name`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`perPage`] = pageSize;
    }

    return params;
  }

  // retrieveTutorials(): void {
  //   const params = this.getRequestParams(this.title, this.page, this.pageSize);

  //   this.tutorialService.getAll(params)
  //   .subscribe(
  //     response => {
  //       const { tutorials, totalItems } = response;
  //       this.tutorials = tutorials;
  //       this.count = totalItems;
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  retrieveCategories(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.categoryService.getAll(params)
    .subscribe(
      response => {
        const { categories, totalItems } = response;
        this.categories = categories;
        this.count = totalItems;
        console.log(response);
        console.log("categories: ",categories)
      },
      error => {
        console.log(error);
      });
  }


  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveCategories();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveCategories();
  }

  

  searchTitle(): void {
    this.page = 1;
    this.retrieveCategories();
  }

  setActiveTutorial(tutorial: Category, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}
