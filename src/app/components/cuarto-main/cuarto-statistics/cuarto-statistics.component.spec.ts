import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoStatisticsComponent } from './cuarto-statistics.component';

describe('CuartoStatisticsComponent', () => {
  let component: CuartoStatisticsComponent;
  let fixture: ComponentFixture<CuartoStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
