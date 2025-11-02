import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import your components here
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { TrainingRequestManagementComponent } from './training-request-management/training-request-management.component';
import { TrainerProfileManagementComponent } from './trainer-profile-management/trainer-profile-management.component';
import { TrainerHistoryComponent } from './trainer-history/trainer-history.component';
import { VendorPortalComponent } from './vendor-portal/vendor-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorManagementComponent,
    TrainingRequestManagementComponent,
    TrainerProfileManagementComponent,
    TrainerHistoryComponent,
    VendorPortalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // Material modules
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
