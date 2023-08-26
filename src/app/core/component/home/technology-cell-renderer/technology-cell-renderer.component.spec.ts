import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnologyCellRendererComponent} from './technology-cell-renderer.component';

describe('TechnologyCellRendererComponent', () => {
  let component: TechnologyCellRendererComponent;
  let fixture: ComponentFixture<TechnologyCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyCellRendererComponent]
    });
    fixture = TestBed.createComponent(TechnologyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
