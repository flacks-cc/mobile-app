import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibraPage } from './fibra.page';

describe('FibraPage', () => {
  let component: FibraPage;
  let fixture: ComponentFixture<FibraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FibraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
