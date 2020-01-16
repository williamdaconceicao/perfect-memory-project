import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenlistComponent } from './seenlist.component';

describe('WishlistComponent', () => {
  let component: SeenlistComponent;
  let fixture: ComponentFixture<SeenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
