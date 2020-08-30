import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoCardComponent } from './cuarto-card.component';

describe('CuartoCardComponent', () => {
  let component: CuartoCardComponent;
  let fixture: ComponentFixture<CuartoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
