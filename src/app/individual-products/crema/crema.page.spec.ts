import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CremaPage } from './crema.page';

describe('CremaPage', () => {
  let component: CremaPage;
  let fixture: ComponentFixture<CremaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CremaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
