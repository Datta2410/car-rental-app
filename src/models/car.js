const mongoose = require('mongoose')

const url = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    url:{ type:String },
})
const carSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    carName: { type: String, required:true },
    status: { type:String, required: true, default:"Available" },
    type: { type:String, required: true },
    odometer: { type:Number, required: true },
    urls: [url]
})

module.exports = mongoose.model('Car', carSchema) 