import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalhaTrocaComponent } from './falha-troca.component';

describe('FalhaTrocaComponent', () => {
  let component: FalhaTrocaComponent;
  let fixture: ComponentFixture<FalhaTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalhaTrocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalhaTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
