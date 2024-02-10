import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesvanecidoPage } from './desvanecido.page';

describe('DesvanecidoPage', () => {
  let component: DesvanecidoPage;
  let fixture: ComponentFixture<DesvanecidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesvanecidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
