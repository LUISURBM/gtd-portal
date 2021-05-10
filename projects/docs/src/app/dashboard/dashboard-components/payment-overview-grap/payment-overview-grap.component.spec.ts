import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOverviewGrapComponent } from './payment-overview-grap.component';

describe('PaymentOverviewGrapComponent', () => {
  let component: PaymentOverviewGrapComponent;
  let fixture: ComponentFixture<PaymentOverviewGrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentOverviewGrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOverviewGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
