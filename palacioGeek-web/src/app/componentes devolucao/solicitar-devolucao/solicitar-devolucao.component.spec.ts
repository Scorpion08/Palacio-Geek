import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDevolucaoComponent } from './solicitar-devolucao.component';

describe('SolicitarDevolucaoComponent', () => {
  let component: SolicitarDevolucaoComponent;
  let fixture: ComponentFixture<SolicitarDevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarDevolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
