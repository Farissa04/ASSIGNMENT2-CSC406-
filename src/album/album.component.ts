import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SpotifyService } from 'src/app/spotify.service';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string = null;
  album = null;
  tracksInfo = null;
  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    this.getAlbumId();
    this.getAlbum();
  }

  getAlbumId() {
    this.id = this.route.snapshot.params.id;
  }

  /*Untuk view album bile search by id(tracks)*/
  getAlbum() {
    this.spotifyService.searchAlbumById(this.id)
      .pipe(
        flatMap(res => {
          this.album = res;
          return this.spotifyService.searchAlbumByIdTracks(this.id)
        }),
      )
      .subscribe(res => {
        this.tracksInfo = res;
      });
  }
    /*bila tekan view in spotify, automatically open new tab/window*/
    viewInSpotify(url: string) {
      window.open(url);
    }

}
