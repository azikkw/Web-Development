import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, AlbumPhotos } from './foralbums'

@Injectable({ providedIn: 'root' })
export class AlbumsService {

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }
    
    createAlbum(album: Album): Observable<Album>{
        return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
    }

    removeAlbum(id: number): Observable<Album[]> {
        return this.http.delete<Album[]>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }

    updateTitle(id: number, album: Album): Observable<Album> {
        return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, album)
    }
    
    getAlbumPhotos(id: number): Observable<AlbumPhotos[]>{
        return this.http.get<AlbumPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    }
    
}