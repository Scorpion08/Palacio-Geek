import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarFreteComponent } from './selecionar-frete.component';

describe('SelecionarFreteComponent', () => {
  let component: SelecionarFreteComponent;
  let fixture: ComponentFixture<SelecionarFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarFreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
