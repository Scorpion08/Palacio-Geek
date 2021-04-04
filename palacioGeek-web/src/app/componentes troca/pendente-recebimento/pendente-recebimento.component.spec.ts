import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenteRecebimentoComponent } from './pendente-recebimento.component';

describe('PendenteRecebimentoComponent', () => {
  let component: PendenteRecebimentoComponent;
  let fixture: ComponentFixture<PendenteRecebimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendenteRecebimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendenteRecebimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
