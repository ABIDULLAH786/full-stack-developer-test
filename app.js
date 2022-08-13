const express = require('express')
const app = new express()

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


module.exports = app;