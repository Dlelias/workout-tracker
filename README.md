# Workout-Tracker
application is deployed on Heroku: https://lit-bastion-91079.herokuapp.com/
# <Your-Project-Title>

## Description

The Workout Tracker application is used to view, create, and track daily workouts. The users re able to log multiple exercises in one workout per day . All exercises type, sets, resp, and duration of the exercise is recorded and tracked on this application. For example if a user is doing a cardio exercise, they can track the distance the user has completed.

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

First you must clone the Github repository https://github.com/Dlelias/workout-tracker.

Second you must install npm packages 
npm install

Thrid create a Mongo DB, if you are running the application locally update MONGODB_URI eith the connection string to the environment variables

Lastly run seed on MongoDB by using the command run npm seed 

Once the setup is complete you can use the application by using the command npm start

## Usage
Once the application is installed the user will be prompt with two options: to continue last workout or New workout .

Then the user will be prompt to add an exercise and select the exercise type. Example: cardio.

Afterwards the user will complete te details of the exercise selected . When completed the user will select complete or add exercise, should they wish to continue to another exercise type. 

Finally the user will be able to access their stats by selecting Dashboard located in the nav bar . 
    ```demo
    ![demo](demo/workout.gif)
    ```

## License
This project uses the MIT license.
## Features


