import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Profile } from '../profile.service';

@Component({
    selector: 'app-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: [ './profile-view.component.less' ],
})
export class ProfileViewComponent implements OnInit {
    @Input()
    profile: Partial<Profile>;

    constructor(public clip: Clipboard) { }

    ngOnInit(): void {
    }

    copy(value: string) {
        this.clip.copy(value);
    }

}
