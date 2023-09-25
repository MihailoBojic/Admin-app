import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActivityOfferComponent } from './activity-offer/activity-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    SidebarComponent,
    GalleryComponent,
    ActivityOfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageCropperModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
