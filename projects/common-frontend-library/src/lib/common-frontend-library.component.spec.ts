import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFrontendLibraryComponent } from './common-frontend-library.component';

describe('CommonFrontendLibraryComponent', () => {
  let component: CommonFrontendLibraryComponent;
  let fixture: ComponentFixture<CommonFrontendLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFrontendLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFrontendLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
