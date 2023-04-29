import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: 'create', component: CreateProfileComponent },
  { path: 'profile/:id', component: ReadProfileComponent },
  { path: '**', redirectTo: '/create' },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    ReadProfileComponent,
    ProfileFormComponent,
    ProfileViewComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }),
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClipboardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
