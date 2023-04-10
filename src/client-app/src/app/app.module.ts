import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

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
    initialNavigation: 'enabled'
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
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
