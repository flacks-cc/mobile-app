import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShampooPage } from './shampoo.page';

describe('ShampooPage', () => {
  let component: ShampooPage;
  let fixture: ComponentFixture<ShampooPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShampooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
