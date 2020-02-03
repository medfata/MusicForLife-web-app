import {HttpClient} from "@angular/common/http"
import { song } from "./song.model"
import { Observable } from "rxjs"
import { Artist } from "./artist.model";
import { Album } from "./album.model";
import { Injectable, InjectionToken, inject } from "@angular/core";
import { url } from "inspector";


@Injectable()
export class restdata{
    constructor(private http:HttpClient){}
    
    getSongs():Observable<song[]>{
        return this.http.get<song[]>("http://localhost:3000/songs");
    }

    
    getArtist():Observable<Artist[]>{
        return this.http.get<Artist[]>("http://localhost:3000/artists");
    }

    
    getAlbums():Observable<Album[]>{
        return this.http.get<Album[]>("http://localhost:3000/albums");
    }

}