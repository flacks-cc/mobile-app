import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CremaBarbaPage } from './crema-barba.page';

describe('CremaBarbaPage', () => {
  let component: CremaBarbaPage;
  let fixture: ComponentFixture<CremaBarbaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CremaBarbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
