const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({

    id: {
        type: Number,
        required : true
    },
    imgName: {
        type : String,
        required: true
    },
    content : {
        type : String,
        required : true
    },
    year:{
        type: Number,
        required : true
    },
    launches:{
        type: Array,
        required : true
    }
}, {timestamp: true});

let Agencies = mongoose.model('Agencies', blogSchema);

module.exports = Agencies;


