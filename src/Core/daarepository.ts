

import { Injectable } from "@angular/core";
import { song } from "src/Model/song.model";
import { Artist } from "src/Model/artist.model";
import { Album } from "src/Model/album.model";
import { DataSource } from "src/Model/data";

@Injectable()
export class DataRepository{

    private songs:song[] = [];
    private artists:Artist[] = [];
    private albums:Album[] =[];

    constructor(private data:DataSource){
       this.songs = this.data.getdata().songs;
        Object.assign(this.artists, this.data.getdata().artists);
        this.albums = this.data.getdata().albums;
    }
    

    getsongs(){
        return this.songs;
    }
    getalbums(){
        return this.albums;
    }
    getartists(){
        return this.artists;
    }
}