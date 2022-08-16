import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCompComponent } from './hello-comp.component';

describe('HelloCompComponent', () => {
  let component: HelloCompComponent;
  let fixture: ComponentFixture<HelloCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
