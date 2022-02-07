import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


//CUSTOM COMPONENTS
import { LongTableComponent } from './layout-test/components/long-table/long-table.component';
import { LayoutComponent } from './layout-test/layout/layout.component';
import { SidebarComponent } from './layout-test/components/navigation/sidebar/sidebar.component';
import { TopbarComponent } from './layout-test/components/navigation/topbar/topbar.component';
import { TestContentComponent } from './layout-test/components/test-content/test-content.component';
import { LogoSidebarComponent } from './layout-test/components/navigation/logo-sidebar/logo-sidebar.component';




@NgModule({
  declarations: [
    AppComponent,

    LongTableComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    TestContentComponent,
    LogoSidebarComponent

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
