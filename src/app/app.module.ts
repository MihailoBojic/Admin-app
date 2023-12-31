import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActivityOfferComponent } from './activity-offer/activity-offer.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityLocationComponent } from './activity-location/activity-location.component';
import { ActivityInterestRatingComponent } from './activity-interest-rating/activity-interest-rating.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    SidebarComponent,
    GalleryComponent,
    ActivityOfferComponent,
    TimeslotComponent,
    ActivityLocationComponent,
    ActivityInterestRatingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserAnimationsModule,
    FormsModule,
    RouterOutlet,

    ImageCropperModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
