import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosCadastradosComponent } from './enderecos-cadastrados.component';

describe('EnderecosCadastradosComponent', () => {
  let component: EnderecosCadastradosComponent;
  let fixture: ComponentFixture<EnderecosCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecosCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
