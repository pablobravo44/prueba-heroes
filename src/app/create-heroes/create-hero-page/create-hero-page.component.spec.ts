import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroPageComponent } from './create-hero-page.component';

describe('CreateHeroPageComponent', () => {
  let component: CreateHeroPageComponent;
  let fixture: ComponentFixture<CreateHeroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHeroPageComponent]
    });
    fixture = TestBed.createComponent(CreateHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
