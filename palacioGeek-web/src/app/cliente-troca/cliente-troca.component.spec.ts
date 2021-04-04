import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTrocaComponent } from './cliente-troca.component';

describe('ClienteTrocaComponent', () => {
  let component: ClienteTrocaComponent;
  let fixture: ComponentFixture<ClienteTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteTrocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
