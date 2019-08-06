import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdtlsComponent } from './empdtls.component';

describe('EmpdtlsComponent', () => {
  let component: EmpdtlsComponent;
  let fixture: ComponentFixture<EmpdtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
