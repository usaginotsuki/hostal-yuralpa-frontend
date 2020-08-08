import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionListComponent } from './habitacion-list.component';

describe('HabitacionListComponent', () => {
  let component: HabitacionListComponent;
  let fixture: ComponentFixture<HabitacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
