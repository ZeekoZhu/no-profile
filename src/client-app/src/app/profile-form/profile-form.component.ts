import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: [ './profile-form.component.less' ],
})
export class ProfileFormComponent implements OnInit {

    @Input() profileGroup: UntypedFormGroup;

    constructor() { }

    ngOnInit(): void {
    }

}
