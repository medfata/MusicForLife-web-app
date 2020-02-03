import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { SharedObject, SHARED_OBJECT } from "./charedObject";
import { song } from "src/Model/song.model";

import { Album } from "src/Model/album.model";
import { Artist } from "src/Model/artist.model";
import { DataRepository } from "./daarepository";


@Component({
    selector:'sidepage',
    templateUrl:"SidePage.template.html"
})
export class sidepage{

    private songList:song[] =[];
   private artist:Artist;
    private album:Album;
    src:string ="";
    constructor(@Inject(SHARED_OBJECT) private observable:Observable<SharedObject>, private data : DataRepository){
        this.album = this.data.getalbums()[0];
       
        this.artist = this.data.getartists().find(art => art.id == this.album.artist_id);
        this.data.getsongs().filter(song => song.album_id == this.album.id).forEach(song => this.songList.push(song));
        
        this.src = this.data.getsongs()[0].filename;
        this.observable.subscribe(sharedObjct => {     
            this.album = new Album();
            this.artist =  new Artist();
            this.songList = [];
                Object.assign(this.album, sharedObjct.album);
                Object.assign(this.artist, sharedObjct.artist);

             Object.assign(this.songList,this.data.getsongs().filter(song => song.album_id == sharedObjct.album.id));
             
            
            } );
    }

  
     playsong(id:number){
        this.src = this.songList.find(song => song.id == id).filename;
        document.getElementById("audio").load();
        document.getElementById("audio").play();
     }

}