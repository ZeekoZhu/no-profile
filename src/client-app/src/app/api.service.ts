import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    async create(dto: CreateProfileDto): Promise<string> {
        return await this.http.post('/api/create', dto, { responseType: 'text'}).toPromise();
    }

    async get(id: string): Promise<string> {
        return await this.http.get('/api/' + id, { responseType: 'text' }).toPromise();
    }
}

export interface CreateProfileDto {
    content: string;
    expireDate: Date;
}
