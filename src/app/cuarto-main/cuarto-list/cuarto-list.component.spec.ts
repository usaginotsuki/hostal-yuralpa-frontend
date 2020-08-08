import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoListComponent } from './cuarto-list.component';

describe('CuartoListComponent', () => {
  let component: CuartoListComponent;
  let fixture: ComponentFixture<CuartoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
