import { Album } from "src/Model/album.model";
import { Injectable, InjectionToken } from "@angular/core";
import { Artist } from "src/Model/artist.model";

@Injectable()
export class SharedObject{
    constructor(public album?:Album, public artist?:Artist){}

}

export const SHARED_OBJECT = new InjectionToken("shared_object")