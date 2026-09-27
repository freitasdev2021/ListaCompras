import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaixaItemPage } from './baixa-item.page';

describe('BaixaItemPage', () => {
  let component: BaixaItemPage;
  let fixture: ComponentFixture<BaixaItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
