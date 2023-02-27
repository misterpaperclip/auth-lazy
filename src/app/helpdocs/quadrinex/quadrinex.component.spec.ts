import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrinexComponent } from './quadrinex.component';

describe('QuadrinexComponent', () => {
  let component: QuadrinexComponent;
  let fixture: ComponentFixture<QuadrinexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrinexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadrinexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
