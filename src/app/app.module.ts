import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerRepairComponent } from './components/computer-repair/computer-repair.component';
import { OfficeMaterialComponent } from './components/office-material/office-material.component';
import { SatelliteSystemComponent } from './components/satellite-system/satellite-system.component';
import { SecurityCameraSystemComponent } from './components/security-camera-system/security-camera-system.component';
import { TonerRefillComponent } from './components/toner-refill/toner-refill.component';
import { TvRepairComponent } from './components/tv-repair/tv-repair.component';
import { VideoEntryphoneSystemComponent } from './components/video-entryphone-system/video-entryphone-system.component';
import { HomeComponent } from './components/home/home.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfficeMaterialDetailComponent } from './components/office-material-detail/office-material-detail.component';
import { SecurityCameraSystemDetailComponent } from './components/security-camera-system-detail/security-camera-system-detail.component';
import { VideoEntryphoneSystemDetailComponent } from './components/video-entryphone-system-detail/video-entryphone-system-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerRepairComponent,
    OfficeMaterialComponent,
    SatelliteSystemComponent,
    SecurityCameraSystemComponent,
    TonerRefillComponent,
    TvRepairComponent,
    VideoEntryphoneSystemComponent,
    HomeComponent,
    NaviComponent,
    FooterComponent,
    OfficeMaterialDetailComponent,
    SecurityCameraSystemDetailComponent,
    VideoEntryphoneSystemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
