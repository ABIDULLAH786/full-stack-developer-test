const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: [true, "Please Enter Email"],
    },
    num_of_products: {
        type: String,
        required: [true, "Please Enter Email"],
    },
})





module.exports = mongoose.model("categories", CategorySchema)