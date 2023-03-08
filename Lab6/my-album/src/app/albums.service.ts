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

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }

    removeAlbum(id: number): Observable<Album[]> {
        return this.http.delete<Album[]>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }

    updateTitle(id: number, album: Album): Observable<Album> {
        return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, album)
    }
}