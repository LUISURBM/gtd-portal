import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuelgasComponent } from './huelga.component';

describe('VisiterGraphComponent', () => {
  let component: HuelgasComponent;
  let fixture: ComponentFixture<HuelgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuelgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuelgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
