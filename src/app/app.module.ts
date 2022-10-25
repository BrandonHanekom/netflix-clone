import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NetflixHeaderComponent } from './netflix-header/netflix-header.component';
import { NetflixBannerComponent } from './netflix-banner/netflix-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NetflixHeaderComponent,
    NetflixBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


