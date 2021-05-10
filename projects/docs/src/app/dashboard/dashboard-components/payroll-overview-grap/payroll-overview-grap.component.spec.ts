import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollOverviewGrapComponent } from './payroll-overview-grap.component';

describe('PayrollOverviewGrapComponent', () => {
  let component: PayrollOverviewGrapComponent;
  let fixture: ComponentFixture<PayrollOverviewGrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollOverviewGrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollOverviewGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
