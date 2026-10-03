import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensListaComprasPage } from './itens-lista-compras.page';

describe('ItensListaComprasPage', () => {
  let component: ItensListaComprasPage;
  let fixture: ComponentFixture<ItensListaComprasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensListaComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
