const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {type:String, required:true, max:10},
  age: {type:Number, required:true},
  contact: {type:Number, required:true}
});

module.exports = mongoose.model('User', UserSchema);
