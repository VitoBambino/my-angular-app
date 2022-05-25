import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularzeComponent } from './formularze.component';

describe('FormularzeComponent', () => {
  let component: FormularzeComponent;
  let fixture: ComponentFixture<FormularzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
