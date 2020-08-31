import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoSearchComponent } from './cuarto-search.component';

describe('CuartoSearchComponent', () => {
  let component: CuartoSearchComponent;
  let fixture: ComponentFixture<CuartoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
