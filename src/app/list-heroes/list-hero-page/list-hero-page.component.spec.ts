import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ListHeroPageComponent } from './list-hero-page.component';

describe('ListHeroPageComponent', () => {
  let component: ListHeroPageComponent;
  let fixture: ComponentFixture<ListHeroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeroPageComponent]
    });
    fixture = TestBed.createComponent(ListHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadInitialData on init', () => {
    const loadSpy = spyOn(component, 'loadInitialData');
    component.ngOnInit();
    expect(loadSpy).toHaveBeenCalled();
  });
});
