import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesVideoResueltoComponent } from './reportes-video-resuelto.component';

describe('ReportesVideoResueltoComponent', () => {
  let component: ReportesVideoResueltoComponent;
  let fixture: ComponentFixture<ReportesVideoResueltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesVideoResueltoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesVideoResueltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
