import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: [ './profile-form.component.less' ],
})
export class ProfileFormComponent implements OnInit {

    @Input() profileGroup: FormGroup;

    constructor() { }

    ngOnInit(): void {
    }

}
