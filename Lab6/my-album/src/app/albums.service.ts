import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './foralbums'

@Injectable({ providedIn: 'root' })
export class AlbumsService {

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }
    
}