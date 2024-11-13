import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesUsuarioResueltoComponent } from './reportes-usuario-resuelto.component';

describe('ReportesUsuarioResueltoComponent', () => {
  let component: ReportesUsuarioResueltoComponent;
  let fixture: ComponentFixture<ReportesUsuarioResueltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesUsuarioResueltoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesUsuarioResueltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
