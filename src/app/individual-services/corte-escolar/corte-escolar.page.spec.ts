import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorteEscolarPage } from './corte-escolar.page';

describe('CorteEscolarPage', () => {
  let component: CorteEscolarPage;
  let fixture: ComponentFixture<CorteEscolarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorteEscolarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
