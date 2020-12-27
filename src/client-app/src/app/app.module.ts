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
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileFormComponent } from './profile-form/profile-form.component';

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
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
