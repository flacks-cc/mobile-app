import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascarillaPage } from './mascarilla.page';

describe('MascarillaPage', () => {
  let component: MascarillaPage;
  let fixture: ComponentFixture<MascarillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascarillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
