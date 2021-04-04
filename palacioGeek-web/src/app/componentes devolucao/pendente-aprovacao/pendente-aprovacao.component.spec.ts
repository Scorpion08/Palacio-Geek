import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenteAprovacaoComponent } from './pendente-aprovacao.component';

describe('PendenteAprovacaoComponent', () => {
  let component: PendenteAprovacaoComponent;
  let fixture: ComponentFixture<PendenteAprovacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendenteAprovacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendenteAprovacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
