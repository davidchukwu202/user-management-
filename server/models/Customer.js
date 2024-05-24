const mongoose =require ('mongoose');

const Schema =mongoose.Schema;
const CustomerSchema =new Schema({
    firstName:{
        type: String,
        required :true
    },
    lastName:{
        type: String,
        required :true
    },
    tel:{
        type:string,
        required :true
    },
    email:{
        type:string,
        required :true
    },
    detials:{
        type:string,
        required :true
    },
    createdAt:{
        type: Date,
        required :Date.now
    },
    updateAt:{
        type: Date,
        required : Date.now
    },
})

module.export =mongoose.model('Customer',CustomerSchema);