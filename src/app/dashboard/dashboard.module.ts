import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    AddCategoryComponent, 
    ProductComponent, 
    OrderComponent, 
    CategoryComponent, 
    CategoryListComponent  
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule,
    FormsModule,
    


  ],
  providers: [
  
  ]
})
export class DashboardModule { }
