import { Injectable } from '@angular/core';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {

    constructor(private api: ApiService) {}

    save(profile: object, expireDate: Date, password: string) {
        const encrypted = AES.encrypt(JSON.stringify(profile), password);
        const data = { content: encrypted.toString(), expireDate };
        return this.api.create(data);
    }

    async get(id: string, password: string): Promise<string> {
        const encrypted = await this.api.get(id);
        return AES.decrypt(encrypted, password).toString(Utf8);
    }
}

export interface Profile {
    email: string;
    phone: string;
    weChat: string;
    notes: string;
}
