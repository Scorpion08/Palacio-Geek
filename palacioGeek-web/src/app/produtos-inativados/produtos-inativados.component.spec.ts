import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosInativadosComponent } from './produtos-inativados.component';

describe('ProdutosInativadosComponent', () => {
  let component: ProdutosInativadosComponent;
  let fixture: ComponentFixture<ProdutosInativadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosInativadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosInativadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
