import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { CKEditorModule } from 'ckeditor4-angular';
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TexteditorModule } from 'ng-texteditor';


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
import { OfficeMaterialAddComponent } from './components/dashboard/office-material-add/office-material-add.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { StartComponent } from './components/dashboard/start/start.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SecurityCameraSystemAddComponent } from './components/dashboard/security-camera-system-add/security-camera-system-add.component';
import { VideoEntryphoneSystemAddComponent } from './components/dashboard/video-entryphone-system-add/video-entryphone-system-add.component';
import { OfficeMaterialUpdateComponent } from './components/dashboard/office-material-update/office-material-update.component';
import { SecurityCameraSystemUpdateComponent } from './components/dashboard/security-camera-system-update/security-camera-system-update.component';
import { VideoEntryphoneSystemUpdateComponent } from './components/dashboard/video-entryphone-system-update/video-entryphone-system-update.component';
import { VideoEntryphoneSystemDeleteComponent } from './components/dashboard/video-entryphone-system-delete/video-entryphone-system-delete.component';
import { SecurityCameraSystemDeleteComponent } from './components/dashboard/security-camera-system-delete/security-camera-system-delete.component';
import { OfficeMaterialDeleteComponent } from './components/dashboard/office-material-delete/office-material-delete.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { LoginGuard } from './guards/login.guard';
import { ModalModule } from './components/dashboard/_modal';






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
    VideoEntryphoneSystemDetailComponent,
    OfficeMaterialAddComponent,
    AccountComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
    UsersComponent,
    SettingsComponent,
    SharedComponent,
    HeaderComponent,
    SidebarComponent,
    SecurityCameraSystemAddComponent,
    VideoEntryphoneSystemAddComponent,
    OfficeMaterialUpdateComponent,
    SecurityCameraSystemUpdateComponent,
    VideoEntryphoneSystemUpdateComponent,
    VideoEntryphoneSystemDeleteComponent,
    SecurityCameraSystemDeleteComponent,
    OfficeMaterialDeleteComponent,
    ElectricityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
    AngularEditorModule,
    TexteditorModule,
    ModalModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
