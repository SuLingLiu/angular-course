import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedFormBuildComponent } from './reactived-form-build.component';

describe('ReactivedFormBuildComponent', () => {
  let component: ReactivedFormBuildComponent;
  let fixture: ComponentFixture<ReactivedFormBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedFormBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedFormBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
