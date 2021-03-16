import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoConfirmadoComponent } from './pagamento-confirmado.component';

describe('PagamentoConfirmadoComponent', () => {
  let component: PagamentoConfirmadoComponent;
  let fixture: ComponentFixture<PagamentoConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoConfirmadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
