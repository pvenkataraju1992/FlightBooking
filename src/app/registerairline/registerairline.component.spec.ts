import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterairlineComponent } from './registerairline.component';

describe('RegisterairlineComponent', () => {
  let component: RegisterairlineComponent;
  let fixture: ComponentFixture<RegisterairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
