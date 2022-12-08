import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPawComponent } from './my-paw.component';

describe('MyPawComponent', () => {
  let component: MyPawComponent;
  let fixture: ComponentFixture<MyPawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
