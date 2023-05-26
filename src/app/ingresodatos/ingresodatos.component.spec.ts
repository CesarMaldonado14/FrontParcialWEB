import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresodatosComponent } from './ingresodatos.component';

describe('IngresodatosComponent', () => {
  let component: IngresodatosComponent;
  let fixture: ComponentFixture<IngresodatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresodatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
