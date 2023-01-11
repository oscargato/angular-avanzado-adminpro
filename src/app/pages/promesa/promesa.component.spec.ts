import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromesaComponent } from './promesa.component';

describe('PromesaComponent', () => {
  let component: PromesaComponent;
  let fixture: ComponentFixture<PromesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
