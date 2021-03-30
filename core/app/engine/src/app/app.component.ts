import {Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('mainOutlet', {read: ViewContainerRef})
  mainOutlet: ViewContainerRef | undefined;

  constructor() {
  }

  ngOnInit() {

  }
}
