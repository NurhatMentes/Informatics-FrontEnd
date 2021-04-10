import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerRepairComponent } from './components/computer-repair/computer-repair.component';
import { HomeComponent } from './components/home/home.component';
import { OfficeMaterialDetailComponent } from './components/office-material-detail/office-material-detail.component';
import { OfficeMaterialComponent } from './components/office-material/office-material.component';
import { SatelliteSystemComponent } from './components/satellite-system/satellite-system.component';
import { SecurityCameraSystemDetailComponent } from './components/security-camera-system-detail/security-camera-system-detail.component';
import { SecurityCameraSystemComponent } from './components/security-camera-system/security-camera-system.component';
import { TonerRefillComponent } from './components/toner-refill/toner-refill.component';
import { TvRepairComponent } from './components/tv-repair/tv-repair.component';
import { VideoEntryphoneSystemDetailComponent } from './components/video-entryphone-system-detail/video-entryphone-system-detail.component';
import { VideoEntryphoneSystemComponent } from './components/video-entryphone-system/video-entryphone-system.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "officeMaterial", component: OfficeMaterialComponent },
  { path: "satelliteSystem", component: SatelliteSystemComponent },
  { path: "computerRepair", component: ComputerRepairComponent },
  { path: "tvRepair", component: TvRepairComponent },
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
