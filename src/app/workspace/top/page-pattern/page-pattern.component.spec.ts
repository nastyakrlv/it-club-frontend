import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePatternComponent } from './page-pattern.component';

describe('PagePatternComponent', () => {
  let component: PagePatternComponent;
  let fixture: ComponentFixture<PagePatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePatternComponent]
    });
    fixture = TestBed.createComponent(PagePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
