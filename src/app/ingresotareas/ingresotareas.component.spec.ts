import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresotareasComponent } from './ingresotareas.component';

describe('IngresotareasComponent', () => {
  let component: IngresotareasComponent;
  let fixture: ComponentFixture<IngresotareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresotareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresotareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
