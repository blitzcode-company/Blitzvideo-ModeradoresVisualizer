import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesVideosComponent } from './reportes-videos.component';

describe('ReportesVideosComponent', () => {
  let component: ReportesVideosComponent;
  let fixture: ComponentFixture<ReportesVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
