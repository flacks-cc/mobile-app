import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PomadaBarbaPage } from './pomada-barba.page';

describe('PomadaBarbaPage', () => {
  let component: PomadaBarbaPage;
  let fixture: ComponentFixture<PomadaBarbaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PomadaBarbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
