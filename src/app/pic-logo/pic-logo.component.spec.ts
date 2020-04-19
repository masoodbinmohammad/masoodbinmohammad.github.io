import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicLogoComponent } from './pic-logo.component';

describe('PicLogoComponent', () => {
  let component: PicLogoComponent;
  let fixture: ComponentFixture<PicLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
