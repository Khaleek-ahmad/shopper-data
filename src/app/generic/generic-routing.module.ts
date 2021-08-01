import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../services/auth/auth-gaurd-service';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
        // ,
        // canActivate:[AuthGuard]  
      },
      
    ]
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRoutingModule { }