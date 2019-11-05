const Mongosee = require("mongoose");

const RegistreSchema = Mongosee.Schema({
    carnet:String,
    shedule:String,
    isLate:Boolean
});

module.exports = Mongosee.model("Register", RegistreSchema);
