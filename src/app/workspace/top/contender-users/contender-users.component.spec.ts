import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenderUsersComponent } from './contender-users.component';

describe('ContenderUsersComponent', () => {
  let component: ContenderUsersComponent;
  let fixture: ComponentFixture<ContenderUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenderUsersComponent]
    });
    fixture = TestBed.createComponent(ContenderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
