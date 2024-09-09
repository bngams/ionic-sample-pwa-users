import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shoud say hello with pseudo', () => {
    // TODO: repeated code (put in before each / describe var ? )
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const pseudo = 'Boris';
    const wantedResult = 'Hello Boris';
    const result = app.hello(pseudo);
    expect(result).toEqual(wantedResult);
  });

  // INFO: testing internal logic
  it('shoud have a welcome title after init', () => {
    // TODO: repeated code (put in before each / describe var ? )
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const wantedResult = 'Welcome';
    expect(app.title).toEqual(wantedResult);
  });

  // INFO: testing HTML (view) logic => can be done with E2E testing
  it('shoud display a welcome title in h1 tag', () => {
    // TODO: repeated code (put in before each / describe var ? )
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const html: HTMLElement = fixture.nativeElement;
    const title = html.querySelector('h1')?.innerText;
    expect(title).toEqual(app.title);
  });

});
