const mongoose = require('mongoose');




const Movie = mongoose.Schema;



const moviesSchema = new Movie({

    name: String,
    video: String,
    icon: String,
    thumbnail: String,
    genre:String,
    duration: {
        hour: Number,
        min: Number
    },
    rate: [Object],
   
    info: String,
    photo: [String],



    comments: [{
        id: Number,
        date: String,
        user: [Object],
        time: String,
        comment: String,
        rate: [Object],

        replys: [{
            id: Number,
            date: String,
            time: String,
            user: [Object],
            reply: String,

        }],
    }]

});

const movie = mongoose.model('movies', moviesSchema);



module.exports = movie;





