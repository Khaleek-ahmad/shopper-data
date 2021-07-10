import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Category } from '../models/category.model';
import { CategoryList } from '../models/category-list.model';

const baseUrl = 'https://main-shopper-k2vermp6up0tkljs-gtw.qovery.io';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // getAll(page:number,perPage:number): Observable<CategoryList> {
  //   return this.http.get<CategoryList>(`baseUrl/?perPage=${perPage}&page=${page}`);
  // }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl+"/api/category", { params });
  }

  get(id: any): Observable<Category> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+ "/api/category", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
