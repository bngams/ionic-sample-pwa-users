import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  title = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Welcome';
  }

  hello(pseudo: string): string {
    return `Hello ${pseudo}`;
  }
}
