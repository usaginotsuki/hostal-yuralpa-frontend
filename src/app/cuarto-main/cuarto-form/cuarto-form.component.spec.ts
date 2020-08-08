import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoFormComponent } from './cuarto-form.component';

describe('CuartoFormComponent', () => {
  let component: CuartoFormComponent;
  let fixture: ComponentFixture<CuartoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
