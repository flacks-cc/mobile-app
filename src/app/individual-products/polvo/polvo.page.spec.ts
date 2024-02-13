import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolvoPage } from './polvo.page';

describe('PolvoPage', () => {
  let component: PolvoPage;
  let fixture: ComponentFixture<PolvoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PolvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
