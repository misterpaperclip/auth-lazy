import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHomepageComponent } from './ui-homepage.component';

describe('UiHomepageComponent', () => {
  let component: UiHomepageComponent;
  let fixture: ComponentFixture<UiHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
