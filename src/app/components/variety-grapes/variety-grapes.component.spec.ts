import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyGrapesComponent } from './variety-grapes.component';

describe('VarietyGrapesComponent', () => {
  let component: VarietyGrapesComponent;
  let fixture: ComponentFixture<VarietyGrapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarietyGrapesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarietyGrapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
