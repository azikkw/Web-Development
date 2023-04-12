import { Component, OnInit } from '@angular/core';
import { Album } from '../foralbums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  newAlbum: Album;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe( (albums) => {
      this.albums = albums;
    })
  }

  createAlbum() {
    this.albumsService.createAlbum(this.newAlbum).subscribe( (album) => {
        this.albums.push(album);
        this.newAlbum = {} as Album;
    });
  }

  removeAlbum(id: number) {
    this.albumsService.removeAlbum(id).subscribe( () => {
      this.albums = this.albums.filter( (album) => album.id != id);
    })
  }

}