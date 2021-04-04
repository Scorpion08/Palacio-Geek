import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTransitoComponent } from './pedidos-transito.component';

describe('PedidosTransitoComponent', () => {
  let component: PedidosTransitoComponent;
  let fixture: ComponentFixture<PedidosTransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosTransitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
