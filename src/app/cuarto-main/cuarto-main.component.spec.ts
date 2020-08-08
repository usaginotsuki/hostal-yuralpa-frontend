import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoMainComponent } from './cuarto-main.component';

describe('CuartoMainComponent', () => {
  let component: CuartoMainComponent;
  let fixture: ComponentFixture<CuartoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
