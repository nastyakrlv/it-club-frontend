import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBlockComponent } from './radio-block.component';

describe('RadioBlockComponent', () => {
  let component: RadioBlockComponent;
  let fixture: ComponentFixture<RadioBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioBlockComponent]
    });
    fixture = TestBed.createComponent(RadioBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
