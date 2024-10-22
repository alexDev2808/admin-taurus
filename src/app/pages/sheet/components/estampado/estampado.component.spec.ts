import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampadoComponent } from './estampado.component';

describe('EstampadoComponent', () => {
  let component: EstampadoComponent;
  let fixture: ComponentFixture<EstampadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstampadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstampadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
