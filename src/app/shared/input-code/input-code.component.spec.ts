import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodeComponent } from './input-code.component';

describe('InputCodeComponent', () => {
  let component: InputCodeComponent;
  let fixture: ComponentFixture<InputCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCodeComponent]
    });
    fixture = TestBed.createComponent(InputCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
