import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaMainComponent } from './comida-main.component';

describe('ComidaMainComponent', () => {
  let component: ComidaMainComponent;
  let fixture: ComponentFixture<ComidaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
