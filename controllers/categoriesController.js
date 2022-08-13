const CategoriesModel = require("../models/categoriesModel")
const UserModel = require("../models/userModel")


module.exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await CategoriesModel.find({}).exec()
        res.json(categories)
    } catch (err) {
        res.status(400).send("Error Occured while fetching data");
    }
}

module.exports.newCategory = async (req, res, next) => {
    try {
        const find = await CategoriesModel.find({ category_name: req.body.category_name })
        if (find.length != 0) {
            res.status(200).send("category already exist")
        } else {
            const newCategory = await CategoriesModel.create({
                category_name: req.body.category_name,
                num_of_products: req.body.num_of_products
            })

            if (newCategory)
                res.status(200).json({ success: true, newCategory })
        }
    } catch (err) {
        res.status(400).send("Error Occured while creating category");
    }
}
