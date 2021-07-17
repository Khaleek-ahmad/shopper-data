import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},  
  {path:'login',redirectTo:'',pathMatch:'full'},  
  {path:'generic',loadChildren:()=>import('./generic/generic.module').then(m=>m.GenericModule)},  
  {path:'**',component:NotFoundComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { } 
