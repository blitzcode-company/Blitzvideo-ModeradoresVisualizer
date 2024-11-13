import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComentarioResueltoComponent } from './reportes-comentario-resuelto.component';

describe('ReportesComentarioResueltoComponent', () => {
  let component: ReportesComentarioResueltoComponent;
  let fixture: ComponentFixture<ReportesComentarioResueltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesComentarioResueltoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesComentarioResueltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
