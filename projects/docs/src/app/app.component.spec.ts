import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InMemDataService } from './srv/in-mem-data-service';
import { InMemService } from './srv/in-mem-service';
import { AppStateService } from './srv/app-state.service';
import { StyleManagerService } from './srv/style-manager.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        InMemService,
        InMemDataService,
        AppStateService,
        StyleManagerService,],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'docs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('docs');
  });

  it('should use theme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').getAttribute('class')).toContain(
      'fpi-skin-black'
    );
  });

});
