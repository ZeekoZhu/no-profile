import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ProfileService } from '../profile.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-read-profile',
    templateUrl: './read-profile.component.html',
    styleUrls: [ './read-profile.component.less' ],
})
export class ReadProfileComponent implements OnInit {

    profileGroup = this.fb.group({
        email: [ '' ],
        weChat: [ '' ],
        phone: [ '' ],
        notes: [ '' ],
    });

    loaded = false;
    failed = false;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private api: ApiService,
                private profileSvc: ProfileService) { }

    async ngOnInit() {
        this.profileGroup.disable({ onlySelf: false });
        const id = this.route.snapshot.paramMap.get('id');
        const password = this.route.snapshot.queryParamMap.get('p');
        await this.loadProfile(id, password);
    }

    async loadProfile(id: string, password: string) {
        try {
            const profile = await this.profileSvc.get(id, password).then(JSON.parse);
            this.profileGroup.patchValue(profile);
        } catch (e) {
            console.log(e);
            this.failed = true;
        }
        this.loaded = true;
    }

}
