import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisenosPage } from './disenos.page';

describe('DisenosPage', () => {
  let component: DisenosPage;
  let fixture: ComponentFixture<DisenosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
