import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArregloBarbaPage } from './arreglo-barba.page';

describe('ArregloBarbaPage', () => {
  let component: ArregloBarbaPage;
  let fixture: ComponentFixture<ArregloBarbaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArregloBarbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
