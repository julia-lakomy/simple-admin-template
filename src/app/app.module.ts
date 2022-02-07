import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

//layouts elements
import { ModernLayoutComponent } from './layout/modern-layout/modern-layout.component';

//components
import { TestComponentComponent } from './test-component/test-component.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { TopbarComponent } from './navigation/topbar/topbar.component';
import { LongTableComponent } from './long-table/long-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ModernLayoutComponent,
    TestComponentComponent,
    SidebarComponent,
    TopbarComponent,
    LongTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
