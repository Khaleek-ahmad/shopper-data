import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { NgxLoadingModule } from 'ngx-loading';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { DialogueModelModule } from '../dialogue-model/dialogue-model.module';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    DashboardComponent, 
    AddCategoryComponent, 
    ProductComponent, 
    OrderComponent, 
    CategoryComponent, 
    CategoryListComponent,
    AddTutorialComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule,
    TableModule,
    DialogueModelModule,
    PaginatorModule,
    HttpClientModule,
    CalendarModule,  
    ToastModule,
    NgxLoadingModule

  ],
  providers: [
  
  ]
})
export class DashboardModule { }
