import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoItemPage } from './novo-item.page';

describe('NovoItemPage', () => {
  let component: NovoItemPage;
  let fixture: ComponentFixture<NovoItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
