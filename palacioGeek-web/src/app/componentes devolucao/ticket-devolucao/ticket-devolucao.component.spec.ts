import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDevolucaoComponent } from './ticket-devolucao.component';

describe('TicketDevolucaoComponent', () => {
  let component: TicketDevolucaoComponent;
  let fixture: ComponentFixture<TicketDevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDevolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
