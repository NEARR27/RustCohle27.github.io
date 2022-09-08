import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguagessComponent } from './lenguagess.component';

describe('LenguagessComponent', () => {
  let component: LenguagessComponent;
  let fixture: ComponentFixture<LenguagessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguagessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
