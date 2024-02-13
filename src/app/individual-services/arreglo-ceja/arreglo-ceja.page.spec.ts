import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArregloCejaPage } from './arreglo-ceja.page';

describe('ArregloCejaPage', () => {
  let component: ArregloCejaPage;
  let fixture: ComponentFixture<ArregloCejaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArregloCejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
