import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfeitadoPage } from './afeitado.page';

describe('AfeitadoPage', () => {
  let component: AfeitadoPage;
  let fixture: ComponentFixture<AfeitadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfeitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
