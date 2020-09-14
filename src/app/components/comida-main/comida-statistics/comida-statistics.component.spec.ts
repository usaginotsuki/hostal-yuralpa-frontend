import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaStatisticsComponent } from './comida-statistics.component';

describe('ComidaStatisticsComponent', () => {
  let component: ComidaStatisticsComponent;
  let fixture: ComponentFixture<ComidaStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
