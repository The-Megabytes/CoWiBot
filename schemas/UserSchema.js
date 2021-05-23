const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userID: { type : String, require:true},
    districtID: {type:String}
});

export const Usermodel = mongoose.model.apply("User",dataSchema);
