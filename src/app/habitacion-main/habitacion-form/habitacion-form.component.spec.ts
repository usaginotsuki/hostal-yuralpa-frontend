import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionFormComponent } from './habitacion-form.component';

describe('HabitacionFormComponent', () => {
  let component: HabitacionFormComponent;
  let fixture: ComponentFixture<HabitacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
