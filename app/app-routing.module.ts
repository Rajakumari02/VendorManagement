import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { TrainingRequestManagementComponent } from './training-request-management/training-request-management.component';
import { TrainerProfileManagementComponent } from './trainer-profile-management/trainer-profile-management.component';
import { TrainerHistoryComponent } from './trainer-history/trainer-history.component';
import { VendorPortalComponent } from './vendor-portal/vendor-portal.component';

const routes: Routes = [
  { path: '', redirectTo: '/ld/requests', pathMatch: 'full' },
  { path: 'ld/vendors', component: VendorManagementComponent },
  { path: 'ld/requests', component: TrainingRequestManagementComponent },
  { path: 'ld/profiles', component: TrainerProfileManagementComponent },
  { path: 'ld/history', component: TrainerHistoryComponent },
  { path: 'vendor/portal', component: VendorPortalComponent },
  // add vendor portal with param: vendor id
  { path: 'vendor/portal/:vendorId', component: VendorPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
