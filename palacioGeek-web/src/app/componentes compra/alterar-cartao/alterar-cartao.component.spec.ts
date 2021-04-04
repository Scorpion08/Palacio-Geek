import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCartaoComponent } from './alterar-cartao.component';

describe('AlterarCartaoComponent', () => {
  let component: AlterarCartaoComponent;
  let fixture: ComponentFixture<AlterarCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
