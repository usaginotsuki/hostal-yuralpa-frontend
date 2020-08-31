import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionCardComponent } from './habitacion-card.component';

describe('HabitacionCardComponent', () => {
  let component: HabitacionCardComponent;
  let fixture: ComponentFixture<HabitacionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
