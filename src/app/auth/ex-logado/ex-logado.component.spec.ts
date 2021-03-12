import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExLogadoComponent } from './ex-logado.component';

describe('ExLogadoComponent', () => {
  let component: ExLogadoComponent;
  let fixture: ComponentFixture<ExLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
