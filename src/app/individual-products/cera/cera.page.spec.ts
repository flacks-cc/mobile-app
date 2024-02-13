import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CeraPage } from './cera.page';

describe('CeraPage', () => {
  let component: CeraPage;
  let fixture: ComponentFixture<CeraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
