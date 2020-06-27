import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateAddComponent } from './plate-add.component';

describe('PlateAddComponent', () => {
  let component: PlateAddComponent;
  let fixture: ComponentFixture<PlateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
