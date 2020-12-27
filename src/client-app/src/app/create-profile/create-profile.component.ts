import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: [ './create-profile.component.scss' ],
})
export class CreateProfileComponent implements OnInit {
    profileGroup: FormGroup;
    passwordGroup: FormGroup;
    minDate: Date;
    maxDate: Date;
    editable = true;
    submitting = false;
    error = null;
    generatedId = '';
    @ViewChild('stepper') stepper: MatStepper;

    get link() {
        const url = new URL(location.toString());
        url.pathname = `/profile/${this.generatedId}`;
        url.search=`p=${encodeURIComponent(this.passwordGroup.get('password').value)}`;
        return url.toString();
    }

    get formInvalid() {
        return this.passwordGroup.invalid;
    }

    expireErrors() {
        const ctrl = this.passwordGroup.get('expireDate');
        if (ctrl.hasError('matDatepickerMin')) {
            return '日期必须大于今天';
        }
        if (ctrl.hasError('matDatepickerMax')) {
            return '日期不能超过一年';
        }
        return '这是必填项';
    }

    passwordErrors() {
        const ctrl = this.passwordGroup.get('password');
        if (ctrl.hasError('minlength') || ctrl.hasError('maxlength')) {
            return '长度需要在 4 - 12 之间';
        }
        return '这是必填项';
    }

    submit() {
        this.editable = false;
        this.submitting = true;
        const { expireDate, password } = this.passwordGroup.value;
        this.profileSvc.save(this.profileGroup.value, expireDate, password)
            .catch(err => {
                this.error = err;
                return '';
            }).then(x => {
            this.generatedId = x;
            setTimeout(() => {
                this.submitting = false;
                this.stepper.next();
            }, 200);
        });
    }

    constructor(private _fb: FormBuilder, private profileSvc: ProfileService, @Inject(PLATFORM_ID) private platform) {
        const now = new Date();
        this.minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        this.maxDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 365);
    }

    ngOnInit(): void {
        this.profileGroup = this._fb.group({
            email: [ '' ],
            phone: [ '' ],
            weChat: [ '' ],
            notes: [ '' ],
        });
        this.passwordGroup = this._fb.group({
            expireDate: [ this.minDate, [ Validators.required ] ],
            password: [ '', [ Validators.required, Validators.minLength(4), Validators.maxLength(12) ] ],
        });
    }

}
