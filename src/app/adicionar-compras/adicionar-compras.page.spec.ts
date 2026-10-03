import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarComprasPage } from './adicionar-compras.page';

describe('AdicionarComprasPage', () => {
  let component: AdicionarComprasPage;
  let fixture: ComponentFixture<AdicionarComprasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
