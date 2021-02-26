import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesCadastradosComponent } from './cartoes-cadastrados.component';

describe('CartoesCadastradosComponent', () => {
  let component: CartoesCadastradosComponent;
  let fixture: ComponentFixture<CartoesCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoesCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoesCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
