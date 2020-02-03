import { Component, Inject } from "@angular/core";
import { Observer } from "rxjs";
import { SharedObject, SHARED_OBJECT } from "./charedObject";
import { song } from "src/Model/song.model";
import { Album } from "src/Model/album.model";
import { Artist } from "src/Model/artist.model";
import { DataRepository } from "./daarepository";


@Component({
    selector:'mainpage',
    templateUrl:"MainPage.template.html"
})
export class MainPage{
    private songs:song[] = [];
    private albums:Album[] = [];
    private artists:Artist[]=[];
    private chosenAlbum?:string;
    private chosenArtist?:string ="";
    constructor( @Inject(SHARED_OBJECT) private observer:Observer<SharedObject>, private data:DataRepository){
        this.songs = this.data.getsongs();
        this.albums = this.data.getalbums();
        this.artists = this.data.getartists();
        
    }
    getartistname(id:number):Artist{
      return this.artists.find(art => art.id == id);
    }
    
      filterbyalbum(){
        this.chosenAlbum = document.getElementById("album").value;
        if(this.chosenAlbum !="")
          this.albums = this.data.getalbums().filter(alb => alb.name == this.chosenAlbum)
          else 
          this.albums = this.data.getalbums();
      }
      filterbyartist(){
        this.chosenArtist = document.getElementById("artist").value;
        if(this.chosenArtist !="")
        this.albums = this.data.getalbums().filter(alb => alb.artist_id == this.artists.find(art => art.name == this.chosenArtist).id);
        else 
        this.albums = this.data.getalbums();
      }
    playAlbum(id:number){
        let album = this.albums.find(alb => alb.id == id);
        let artist = this.artists.find(art => art.id == album.artist_id);
        this.observer.next( new SharedObject(album , artist) );
    }
}