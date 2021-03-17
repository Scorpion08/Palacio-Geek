import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCupomComponent } from './gerar-cupom.component';

describe('GerarCupomComponent', () => {
  let component: GerarCupomComponent;
  let fixture: ComponentFixture<GerarCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarCupomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
