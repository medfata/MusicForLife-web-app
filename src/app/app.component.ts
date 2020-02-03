import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { song } from 'src/Model/song.model';
import { restdata } from 'src/Model/RestDataRepo';
import { HttpClient } from '@angular/common/http';

import { Album } from 'src/Model/album.model';
import { Artist } from 'src/Model/artist.model';
import { SharedObject } from 'src/Core/charedObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

}
