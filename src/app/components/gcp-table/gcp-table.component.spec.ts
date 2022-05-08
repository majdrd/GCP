import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpTableComponent } from './gcp-table.component';

describe('GcpTableComponent', () => {
  let component: GcpTableComponent;
  let fixture: ComponentFixture<GcpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
