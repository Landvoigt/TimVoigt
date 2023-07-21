import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthProjectComponent } from './forth-project.component';

describe('ForthProjectComponent', () => {
  let component: ForthProjectComponent;
  let fixture: ComponentFixture<ForthProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForthProjectComponent]
    });
    fixture = TestBed.createComponent(ForthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
