import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from 'src/app/search/search.component'; 
import { AlbumComponent } from 'src/album/album.component';
import {ArtistComponent} from './artist/artist.component';

const routes: Routes = [
  {path:'',component: SearchComponent},
  {path:'album/:id', component: AlbumComponent },
  {path: 'artist/:id' , component: ArtistComponent },
  {path:'about',component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
