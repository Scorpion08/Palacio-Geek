import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaPendenteComponent } from './troca-pendente.component';

describe('TrocaPendenteComponent', () => {
  let component: TrocaPendenteComponent;
  let fixture: ComponentFixture<TrocaPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
