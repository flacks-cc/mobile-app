import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalsamoBarbaPage } from './balsamo-barba.page';

describe('BalsamoBarbaPage', () => {
  let component: BalsamoBarbaPage;
  let fixture: ComponentFixture<BalsamoBarbaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalsamoBarbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
