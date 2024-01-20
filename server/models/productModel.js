const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// product model
const productSchema = new Schema(
    {
        name: {type: String, required: true},
        quantity: {type: Number, required: true, min: 0, required: true},
        limit: {type: Number, min: 1, required: true},
        timesOrdered: {type: Number, min: 0, required: true},
        nutritionInfo: {type: Schema.Types.Mixed },
        picture: {
        data: Buffer,
        contentType: String,
    },
    }, { timestamps: true}           
)
module.exports = mongoose.model("Product", productSchema)
