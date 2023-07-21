import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthProjectComponent } from './fifth-project.component';

describe('FifthProjectComponent', () => {
  let component: FifthProjectComponent;
  let fixture: ComponentFixture<FifthProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthProjectComponent]
    });
    fixture = TestBed.createComponent(FifthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
