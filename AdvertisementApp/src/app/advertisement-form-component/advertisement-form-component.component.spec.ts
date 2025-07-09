import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementFormComponentComponent } from './advertisement-form-component.component';

describe('AdvertisementFormComponentComponent', () => {
  let component: AdvertisementFormComponentComponent;
  let fixture: ComponentFixture<AdvertisementFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
