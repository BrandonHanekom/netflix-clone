import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixBannerComponent } from './netflix-banner.component';

describe('NetflixBannerComponent', () => {
  let component: NetflixBannerComponent;
  let fixture: ComponentFixture<NetflixBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
