import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBorderComponent } from './red-border.component';

describe('RedBorderComponent', () => {
  let component: RedBorderComponent;
  let fixture: ComponentFixture<RedBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
