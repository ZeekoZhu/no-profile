import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Profile } from '../profile.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
    selector: 'app-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: [ './profile-view.component.less' ],
})
export class ProfileViewComponent implements OnInit {
    @Input()
    profile: Partial<Profile>;

    constructor(public clip: Clipboard, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
    }

    copy(value: string) {
        if (this.clip.copy(value)) {
            this.snackBar.open('已复制', null, { duration: 3000 });
        }
    }

}
