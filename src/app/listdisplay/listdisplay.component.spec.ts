import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdisplayComponent } from './listdisplay.component';

describe('ListdisplayComponent', () => {
  let component: ListdisplayComponent;
  let fixture: ComponentFixture<ListdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
