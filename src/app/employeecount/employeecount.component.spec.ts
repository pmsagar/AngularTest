import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecountComponent } from './employeecount.component';

describe('EmployeecountComponent', () => {
  let component: EmployeecountComponent;
  let fixture: ComponentFixture<EmployeecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
