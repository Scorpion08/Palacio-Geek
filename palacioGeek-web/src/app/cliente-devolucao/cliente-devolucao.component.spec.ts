import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDevolucaoComponent } from './cliente-devolucao.component';

describe('ClienteDevolucaoComponent', () => {
  let component: ClienteDevolucaoComponent;
  let fixture: ComponentFixture<ClienteDevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDevolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
