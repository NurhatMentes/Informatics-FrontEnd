import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ComputerRepairComponent } from './components/computer-repair/computer-repair.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OfficeMaterialAddComponent } from './components/dashboard/office-material-add/office-material-add.component';
import { OfficeMaterialDeleteComponent } from './components/dashboard/office-material-delete/office-material-delete.component';
import { OfficeMaterialUpdateComponent } from './components/dashboard/office-material-update/office-material-update.component';
import { SecurityCameraSystemAddComponent } from './components/dashboard/security-camera-system-add/security-camera-system-add.component';
import { SecurityCameraSystemDeleteComponent } from './components/dashboard/security-camera-system-delete/security-camera-system-delete.component';
import { SecurityCameraSystemUpdateComponent } from './components/dashboard/security-camera-system-update/security-camera-system-update.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { StartComponent } from './components/dashboard/start/start.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { VideoEntryphoneSystemAddComponent } from './components/dashboard/video-entryphone-system-add/video-entryphone-system-add.component';
import { VideoEntryphoneSystemDeleteComponent } from './components/dashboard/video-entryphone-system-delete/video-entryphone-system-delete.component';
import { VideoEntryphoneSystemUpdateComponent } from './components/dashboard/video-entryphone-system-update/video-entryphone-system-update.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OfficeMaterialDetailComponent } from './components/office-material-detail/office-material-detail.component';
import { OfficeMaterialComponent } from './components/office-material/office-material.component';
import { SatelliteSystemComponent } from './components/satellite-system/satellite-system.component';
import { SecurityCameraSystemDetailComponent } from './components/security-camera-system-detail/security-camera-system-detail.component';
import { SecurityCameraSystemComponent } from './components/security-camera-system/security-camera-system.component';
import { TonerRefillComponent } from './components/toner-refill/toner-refill.component';
import { TvRepairComponent } from './components/tv-repair/tv-repair.component';
import { VideoEntryphoneSystemDetailComponent } from './components/video-entryphone-system-detail/video-entryphone-system-detail.component';
import { VideoEntryphoneSystemComponent } from './components/video-entryphone-system/video-entryphone-system.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'login', component: LoginComponent },
 // { path: 'register', component: RegisterComponent },
  
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [LoginGuard],
    children: [
      { path: '', component: StartComponent, canActivateChild: [LoginGuard], },
      { path: 'users', component: UsersComponent, canActivateChild: [LoginGuard], },
      { path: 'settings', component: SettingsComponent, canActivateChild: [LoginGuard],},
      { path: "office-material-add", component: OfficeMaterialAddComponent, canActivate: [LoginGuard] },
      { path: "office-material-update", component: OfficeMaterialUpdateComponent },
      { path: "office-material-delete", component: OfficeMaterialDeleteComponent },
      { path: "security-camera-add", component: SecurityCameraSystemAddComponent },
      { path: "security-camera-update", component: SecurityCameraSystemUpdateComponent },
      { path: "security-camera-delete", component: SecurityCameraSystemDeleteComponent },
      { path: "video-entryphone-add", component: VideoEntryphoneSystemAddComponent },
      { path: "video-entryphone-update", component: VideoEntryphoneSystemUpdateComponent },
      { path: "video-entryphone-delete", component: VideoEntryphoneSystemDeleteComponent },
    ]
  },
 
  { path: "officeMaterial", component: OfficeMaterialComponent },
  { path: "satelliteSystem", component: SatelliteSystemComponent },
  { path: "computerRepair", component: ComputerRepairComponent },
  { path: "tvRepair", component: TvRepairComponent },
  { path: "electricity", component: ElectricityComponent },
  { path: "securtiyCameraSystem", component: SecurityCameraSystemComponent },
  { path: "tonerRefill", component: TonerRefillComponent },
  { path: "videoEntryphoneSystem", component: VideoEntryphoneSystemComponent },
  { path: "office-material-detail", component: OfficeMaterialDetailComponent },
  { path: "officeMaterial/productDetail/:id", component: OfficeMaterialDetailComponent },
  { path: "securityCameraSystem/cameraDetail/:id", component: SecurityCameraSystemDetailComponent },
  { path: "videoEntryphoneSystem/productDetail/:id", component: VideoEntryphoneSystemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
