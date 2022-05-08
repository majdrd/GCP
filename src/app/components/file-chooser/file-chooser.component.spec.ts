import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileChooserComponent } from './file-chooser.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('FileChooserComponent', () => {
  let component: FileChooserComponent;
  let fixture: ComponentFixture<FileChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileChooserComponent],
      providers: [
        provideMockStore()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
