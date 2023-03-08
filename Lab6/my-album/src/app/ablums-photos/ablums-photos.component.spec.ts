import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AblumsPhotosComponent } from './ablums-photos.component';

describe('AblumsPhotosComponent', () => {
  let component: AblumsPhotosComponent;
  let fixture: ComponentFixture<AblumsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AblumsPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AblumsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
