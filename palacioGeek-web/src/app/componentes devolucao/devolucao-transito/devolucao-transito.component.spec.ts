import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoTransitoComponent } from './devolucao-transito.component';

describe('DevolucaoTransitoComponent', () => {
  let component: DevolucaoTransitoComponent;
  let fixture: ComponentFixture<DevolucaoTransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucaoTransitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucaoTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
