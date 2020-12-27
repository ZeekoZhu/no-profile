import { Injectable } from '@angular/core';
import AES from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';
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

    async get(id: string, password: string) {
        const encrypted = await this.api.get(id);
        return AES.decrypt(encrypted, password).toString(Utf8);
    }
}
