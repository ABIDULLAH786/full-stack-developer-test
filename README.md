

# Full stack developer test for Bluewinds

This test is for a career position at BlueWinds and will test your back-end skills.

## Purpose
The intended purpose is to test your backend skills, ranging from System design, and API development.


## Design tasks

1. Create an Express project [Express](https://expressjs.com/).
2. Create simple end-points in which a user can register and login
3. Use MongoDb as backend database put a .env file from which you will load the database path

## API tasks

1. You need to create an end-pooint called 'load_categories'
2. You need to integrate this [API](https://demo2.meals4u.net/fe/api.test.php), so whenever I hit the end-point it will return me the result from this api.
3. The end-point should be auth protected, so it can't be accessed publicly 

## Tools and technologies

1. Express
2. Mongoose
3. JWT auth (Recommened) 
4. MongoDb

## How to submit?
1. Fork this repository
2. Do your tasks
3. Commit your changes
4. Push them
5. Add "How to run instruction" in the area below

## How to run?
Before starting this section i want to in list the required software to use and run this code on your local machine

    1) git cli to clone repository
    2) mongodb to to store your data while using this app
    3) any text editor to open or modify the code

**Note:** i have uploaded .env file also so you have not to worry about `database_url` and jwt `secrate_key` and its `expire_time`.

- To run the server just clone this repository and got to the cloned repository there run command `npm i`. The npm i command will download all dependencies.
    
        npm i

- After this your are all set to start the server for that you have to run the command `npm start`. The command will start server and in console you will see the below line: 
      
        npm start

        // if you changed the port then that port will be printed
        Server is listening to port 4545
        server is connected on localhost



## Deadline
Please complete it within 3 days of assignment. 

## Popular resources
1. [Express](https://expressjs.com/en/starter/installing.html)
2. [Mongoose](https://www.npmjs.com/package/mongoose) (Hint: this can make your life really easier and will give you additional points)

