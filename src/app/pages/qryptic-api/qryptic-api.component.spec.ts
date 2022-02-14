import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrypticApiComponent } from './qryptic-api.component';

describe('QrypticApiComponent', () => {
  let component: QrypticApiComponent;
  let fixture: ComponentFixture<QrypticApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrypticApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrypticApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
