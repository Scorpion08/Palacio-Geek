import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTrocaComponent } from './ticket-troca.component';

describe('TicketTrocaComponent', () => {
  let component: TicketTrocaComponent;
  let fixture: ComponentFixture<TicketTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTrocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
