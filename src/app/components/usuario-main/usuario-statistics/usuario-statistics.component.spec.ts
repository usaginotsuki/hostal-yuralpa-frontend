import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioStatisticsComponent } from './usuario-statistics.component';

describe('UsuarioStatisticsComponent', () => {
  let component: UsuarioStatisticsComponent;
  let fixture: ComponentFixture<UsuarioStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
