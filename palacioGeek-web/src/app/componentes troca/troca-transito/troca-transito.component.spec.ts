import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaTransitoComponent } from './troca-transito.component';

describe('TrocaTransitoComponent', () => {
  let component: TrocaTransitoComponent;
  let fixture: ComponentFixture<TrocaTransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaTransitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
