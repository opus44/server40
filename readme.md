### Project Description

This directory implements the first set of code for the Udemy Class** Node With React**

The project itself is a first time set up of and **Express Server
with basic, barebones function to send data to a client by listening to port requests.

  
## File Info
The class continues to build on the base set of code throughout the course.
Here is the outline 

index1.js - the basic **Express Server** up and running

----------

index2.js - deploying the **Express Server** using **Heroku** 

----------

index3.js - google **OAuth** features

- passport.js features:![](/img/passport-js-coverage.jpg)
- passport strategies (with emphasis on the strategy used for google<br>
**Passport** is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
[http://www.passportjs.org/](http://www.passportjs.org/)

- google developers links of interest:
[https://console.developers.google.com/](https://console.developers.google.com/)
[https://cloud.google.com/free/?hl=en_US&_ga=2.139977015.-540059860.1543883941](https://cloud.google.com/free/?hl=en_US&_ga=2.139977015.-540059860.1543883941)

- error: redirect_uri_mismatch
https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=254280876851-n1m7e97htnbndkpnthjdanqp9p7i0r6c.apps.googleusercontent.com

----------

index4.js - mongoose.js library - implementation of **MongoDB**

We began by **refactoring** the code to extract the google routes and services to separate files.
Then we took first steps into understanding and using mongoDB.

mlab.com - mongodb website

database - emaily-dev
dbuser	- JSBadmin
password - gPQr4Yx)ffK84(*MEaFH

	{
    "_id": "emaily-dev.JSBadmin",
    "user": "JSBadmin",
    "db": "emaily-dev",
    "roles": [
        {
            "role": "dbOwner",
            "db": "emaily-dev"
        }
    ]
}

**To connect using the mongo shell**:
mongo ds163630.mlab.com:63630/emaily-dev -u <dbuser> -p <dbpassword>

**To connect using a driver via the standard MongoDB URI**:
mongodb://dbuser:dbpassword@ds163630.mlab.com:63630/emaily-dev


----------
index5.js - 


----------

index.js - the latest version of this file set. This is where
we test the code and then archive it by appending numbers to the filename.