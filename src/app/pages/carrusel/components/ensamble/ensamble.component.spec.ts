import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsambleComponent } from './ensamble.component';

describe('EnsambleComponent', () => {
  let component: EnsambleComponent;
  let fixture: ComponentFixture<EnsambleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsambleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
