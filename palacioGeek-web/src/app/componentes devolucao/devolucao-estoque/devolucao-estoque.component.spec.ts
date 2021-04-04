import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoEstoqueComponent } from './devolucao-estoque.component';

describe('DevolucaoEstoqueComponent', () => {
  let component: DevolucaoEstoqueComponent;
  let fixture: ComponentFixture<DevolucaoEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucaoEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucaoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
