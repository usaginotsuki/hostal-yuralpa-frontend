import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionSearchComponent } from './habitacion-search.component';

describe('HabitacionSearchComponent', () => {
  let component: HabitacionSearchComponent;
  let fixture: ComponentFixture<HabitacionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
