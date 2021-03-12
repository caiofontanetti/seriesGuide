import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAdminComponent } from './ex-admin.component';

describe('ExAdminComponent', () => {
  let component: ExAdminComponent;
  let fixture: ComponentFixture<ExAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
