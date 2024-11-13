import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComentariosComponent } from './reportes-comentarios.component';

describe('ReportesComentariosComponent', () => {
  let component: ReportesComentariosComponent;
  let fixture: ComponentFixture<ReportesComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
