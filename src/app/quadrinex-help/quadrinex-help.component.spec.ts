import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrinexHelpComponent } from './quadrinex-help.component';

describe('QuadrinexHelpComponent', () => {
  let component: QuadrinexHelpComponent;
  let fixture: ComponentFixture<QuadrinexHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrinexHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadrinexHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
