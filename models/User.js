const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    googleDisplayName: String
});

console.log('setting up mongoose model');
mongoose.model('users', userSchema);
