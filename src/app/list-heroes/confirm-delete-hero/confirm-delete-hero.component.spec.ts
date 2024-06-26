import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteHeroComponent } from './confirm-delete-hero.component';

describe('ConfirmDeleteHeroComponent', () => {
  let component: ConfirmDeleteHeroComponent;
  let fixture: ComponentFixture<ConfirmDeleteHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteHeroComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeleteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
