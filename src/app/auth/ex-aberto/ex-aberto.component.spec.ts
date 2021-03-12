import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAbertoComponent } from './ex-aberto.component';

describe('ExAbertoComponent', () => {
  let component: ExAbertoComponent;
  let fixture: ComponentFixture<ExAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExAbertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
