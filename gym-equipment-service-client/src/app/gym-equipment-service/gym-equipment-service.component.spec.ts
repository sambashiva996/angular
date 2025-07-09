import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymEquipmentServiceComponent } from './gym-equipment-service.component';

describe('GymEquipmentServiceComponent', () => {
  let component: GymEquipmentServiceComponent;
  let fixture: ComponentFixture<GymEquipmentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymEquipmentServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymEquipmentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
