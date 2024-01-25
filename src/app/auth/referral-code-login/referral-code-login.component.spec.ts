import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCodeLoginComponent } from './referral-code-login.component';

describe('ReferralCodeLoginComponent', () => {
  let component: ReferralCodeLoginComponent;
  let fixture: ComponentFixture<ReferralCodeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralCodeLoginComponent]
    });
    fixture = TestBed.createComponent(ReferralCodeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
