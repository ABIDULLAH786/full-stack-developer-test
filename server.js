const app = require('./app.js')
const dotenv = require('dotenv')
const connectDatabse = require('./config/connection')
//setting up config file 

dotenv.config({ path: "./config/.env" })
//connecting to db 
connectDatabse();

const port = process.env.PORT || 3333
const server = app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})
