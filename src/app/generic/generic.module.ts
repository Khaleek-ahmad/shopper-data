import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GenericRoutingModule } from './generic-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    GenericRoutingModule
  ],
  exports:[NavbarComponent,SidebarComponent],
  providers: [
    ]
})
export class GenericModule { }
