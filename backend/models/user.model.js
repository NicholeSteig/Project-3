var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var userSchema = new Schema ({
    username: {
        type: String, 
        required: true,
        unique: true, 
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        allownull: false
    }
}, {
    timestamps: true, 
}); 

var User = mongoose.model("User" , userSchema); 

module.export = User; 