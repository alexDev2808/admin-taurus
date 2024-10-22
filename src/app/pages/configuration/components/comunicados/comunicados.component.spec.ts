import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicadosComponent } from './comunicados.component';

describe('ComunicadosComponent', () => {
  let component: ComunicadosComponent;
  let fixture: ComponentFixture<ComunicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
