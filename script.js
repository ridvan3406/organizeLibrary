class Media {
    constructor(title,type){
        this._type =type
        this._title=title;
        this._isCheckOut=false;
        this._ratings=[];
    }
    get title(){
        return this._title
    }
    get type(){
        return this._type
    }
    get isCheckOut(){
        return this._isCheckOut
    }
    get ratings(){
        return this._ratings
    }
    set isCheckOut(value){
        this._isCheckOut =value 
    }
    toggleCheckOutStatus(){
        if(this._isCheckOut===true){
            return this._isCheckOut=false
        }else{
            return this._isCheckOut=true
        }
    }
    getAverageRating(){
        return this._ratings.reduce((a,b)=>(a+b)) / this._ratings.length
    }
    addRating(number){
        if(number>0 &&number<=10){
            this._ratings.push(number)
        }else{
            alert('enter a number between 1-10')
        }
    }
}
// const test = new Media('blasejacket')
// test.addRating(9)
// test.addRating(3)
// console.log(test.getAverageRating())
// console.log(test)

class Book extends Media {
    constructor(title,type,author,pages){
        super(title,type)
        this._author=author;
        this._pages=pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(title,type,director,runTime){
        super(title,type)
        this._director=director;
        this._runTime=runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

const historyOfViolence = new Book (
    'History of Violence',
    'Drama',
    'Édouard Louis',
    224,
    
)

// historyOfViolence.isCheckOut=true;
// console.log(historyOfViolence.isCheckOut)
// console.log(historyOfViolence.toggleCheckOutStatus())
// historyOfViolence.addRating(3);
// historyOfViolence.addRating(5);
// historyOfViolence.addRating(7);

// historyOfViolence.getAverageRating();
// console.log(historyOfViolence.getAverageRating());
console.log(historyOfViolence)

const bloodSport = new Movie(
    'Blood Sport',
    'Thriller',
    'Jean-Claude Van Damme',
    122
)
bloodSport.addRating(9)
bloodSport.addRating(2)

console.log(bloodSport)
console.log(bloodSport.getAverageRating())
console.log(bloodSport.toggleCheckOutStatus())

class CD extends Media {
    constructor(title,type,artist,songs,duration){
        super(title,type)
        this._artist=artist;
        this._songs=songs;
        this._duration=duration;
        // this.songs =[];
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs
    }
    get duration(){
        return this._duration
    }
    addSong(songs){
        this.songs.push(songs)
    }
    shuffle(array){
        // for (let i = array.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [array[i], array[j]] = [array[j], array[i]];
        // }
        return songs.sort(()=>Math.random()-0.5);
    }
}
const duaa =new CD(
    'tij duaa',
    'indian',
    'SANAM',
    'cilgin,cok iyi,guzel',
    4.57
)
console.log(duaa)

class Catalog {
    constructor(mediaList){
        this._MyCatalog =[mediaList]
    }
    get mediaList(){
        return this._mediaList;
    }
    set mediaList(newMediaList){
        this._MyCatalog.push(newMediaList)
    }

    
}
const Test = new Catalog;
Test.mediaList = duaa;
Test.mediaList = historyOfViolence;
Test.mediaList = bloodSport;

console.log(Test)