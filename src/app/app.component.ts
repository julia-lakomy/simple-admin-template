import { Component, OnInit } from '@angular/core';
import { config } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'simple-admin-template';
  config: any;

  ngOnInit() {
    this.config = config;
  }
}
