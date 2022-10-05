const express = require('express')
const app = new express()
const users = require("./users"); 

const url = require('url');


/**
 * To allow accessing body data
 */
app.use(express.json())

/**
 * This is routes for users
 */
const UserRouter = require("./routes/userRoutes")
app.use("/users", UserRouter);

/**
 * This is routes for categories
 */
app.use(require("./routes/categoriesRoutes"));
app.get("/test", (req, res) => {

    const queryObject = url.parse(req.url, true).query;
    const { name } = queryObject
    const filter = users.filter((item, index) => {
        return item.name.toLowerCase() == name.toString().toLowerCase();
    })
    res.json({
        status:200,
        message: "Server is running",
        queryObject,
        name: name,
        filterResult: filter,
        users
    })
})

module.exports = app;