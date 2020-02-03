module.exports = function(){
    var data = {
        songs :[{id:1,album_id:1,filename:"assets/songs/1.mp3", categorie:"pope"},
                {id:2,album_id:1,filename:"assets/songs/2.mp3", categorie:"pope"},

                {id:3,album_id:2,filename:"assets/songs/3.mp3", categorie:"pope"},
                {id:4,album_id:2,filename:"assets/songs/4.mp3", categorie:"pope"},
            
                {id:5,album_id:3,filename:"assets/songs/5.mp3", categorie:"pope"},
                {id:6,album_id:3,filename:"assets/songs/6.mp3", categorie:"pope"},
            
                {id:7,album_id:4,filename:"assets/songs/7.mp3", categorie:"pope"},
                {id:8,album_id:4,filename:"assets/songs/8.mp3", categorie:"pope"}],

        artists:[{id:1,name:"artist1",image:"assets/images/artists/1.jpg"},
                {id:2,name:"artist2",image:"assets/images/artists/2.jpg"},
                {id:3,name:"artist3",image:"assets/images/artists/3.jpg"},
                {id:4,name:"artist4",image:"assets/images/artists/4.jpg"}],

        albums:[{id:1,artist_id:1,name:"album1",image:"assets/images/albums/1.jpe"},
                {id:2,artist_id:2,name:"album2",image:"assets/images/albums/2.jpg"},
                {id:1,artist_id:3,name:"album3",image:"assets/images/albums/3.jpg"},
                {id:1,artist_id:4,name:"album4",image:"assets/images/albums/4.jpe"}
            ],

        users:[{id:11, username:"mohamed", password:"med@123fata"}]
    }

    return data;
}
