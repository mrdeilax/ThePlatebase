import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateShowComponent } from './plate-show.component';

describe('PlateShowComponent', () => {
  let component: PlateShowComponent;
  let fixture: ComponentFixture<PlateShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
