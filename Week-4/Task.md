
Week 4: Assignment
Create a basic Node.js server using Express framework, incorporating environment variables with dotenv, and automating server restarts with nodemon. Implement three simple endpoints to serve different data types.



Initialize a new Node.js project.
Install necessary packages:
Express (npm install express)
dotenv (npm install dotenv)
nodemon (npm install -D nodemon)
Create a .env file to store environment variables.
2. Creating Scripts:
Implement two scripts in package.json:
start: To start the server in production mode.
dev: To start the server in development mode using nodemon.
3. Endpoints:

Define three endpoints in your Express application:
Endpoint 1:
Path: /string or anything you want to use.
HTTP Method: GET
Response: Send back a simple string as the response.
Endpoint 2:
Path: /object or anything you want to use.
HTTP Method: GET
Response: Send back an object (e.g., {message: "Hello, world!"}).
Endpoint 3:
Path: /array or anything you want to use.
HTTP Method: GET
Response: Send back an array (e.g., ["apple", "banana", "orange"]).
4. Testing:
Test your server by making GET requests to each endpoint using your web browser.
