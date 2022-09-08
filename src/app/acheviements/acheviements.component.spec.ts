import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheviementsComponent } from './acheviements.component';

describe('AcheviementsComponent', () => {
  let component: AcheviementsComponent;
  let fixture: ComponentFixture<AcheviementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheviementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcheviementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
