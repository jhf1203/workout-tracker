# workout-tracker

![](https://img.shields.io/badge/License-Apache-brightgreen)
      
## Table Of Contents
1.  [Description](#description)
2.  [Installation](#installation) 
3.  [Usage](#usage)
4.  [Collaborating](#collaborating)
5.  [Contact](#contact)
      
_________________________________
  
### Description
      
This is an application that allows the user to create a workout consisting of multiple exercises.  It also features an attractive UI that shows the user's exercise statistics over a seven day period.

This application is served on heroku and written in express.  The database used is MongoDB with the Mongoose package.
      
_________________________________
  
### Instructions
  
Link to deployment can be found [here.](https://morning-escarpment-21710.herokuapp.com/)

There is no installation required to use this application, as it is being hosted live on Heroku, you are free to access it as you please.
  
_________________________________
  
### Usage
  
Please enjoy a demonstration of this app's functionality.  

![image](./public/assets/demo-gif.gif)

#### Homepage:
- The landing page gives the user two options:  Continue their previous workout or begin a new workout.  You'll note the 24-bit character added onto the end of the url, this references the previous workout that was saved, and the data previously entered from it is featured on this landing page.  
- Both choosing to continue an existing workout and adding a new one will route you to the exercise menu, what will change depending on the button clicked will be that workout ID if you chose to perform a new workout.

#### Exercise Menu:
- Using the dropdown menus and input fields, enter the data that you would like to record for your workout.  Only the workout name and type are required, and the parameters change depending on the type of workout (Cardio vs. Resistance).
- The "Add Exercise" button will add this particular workout into your exercise routine, so you can structure your workout by day and activity.  The "Complete" option will record it into your exercise data that is displayed on the Dashboard page.

#### Dashboard:
- This page visualizes you recent workout history.  A line graph and pie chart display the time you've spent working out in the last seven days, a bar graph illustrates how much weight you've lifted by day, and a doughnut chart represents the distance you've spent traveling with your cardio workouts.

  
_________________________________
  
### Collaborating
  
Got an idea?  A bug to report?  Or even a thought on how the application could run more efficiently?  Log it [here](https://github.com/jhf1203/workout-tracker/issues) as an issue, and we'll talk about it!
  
_________________________________
  
### Contact Me
  
#### Jim Faulkner
- [E-mail](mailto:jhf1203@gmail.com)
- [Github](jhf1203)
  
_________________________________
  
### License
  
This application is [licensed](https://www.apache.org/licenses/LICENSE-2.0) under the Apache License 2.0

