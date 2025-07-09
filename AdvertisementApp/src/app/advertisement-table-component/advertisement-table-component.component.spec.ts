import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementTableComponentComponent } from './advertisement-table-component.component';

describe('AdvertisementTableComponentComponent', () => {
  let component: AdvertisementTableComponentComponent;
  let fixture: ComponentFixture<AdvertisementTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementTableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
