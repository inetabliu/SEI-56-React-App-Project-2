## Readme currently in progress... ![2%](https://progress-bar.dev/2)

# General Assembly SEI-Project-2
## Rick & Morty Character App - 48hours pair coded Hackaton
![ezgif com-gif-maker](https://user-images.githubusercontent.com/81913593/129573394-be858942-b359-4c8c-8b62-26bd6e0d5778.gif)

Check our deployed version https://rickandmorty-ga.netlify.app/

## Brief
* **Consume a public API**
* **Have several components**
* **The app can have a router** - with several "pages", this is up to you and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public (hosted on your public github, not GA github!)

## Overview 
Built a React app within 48 hours as part of a pair coded Reacathon we have decided to build a fun and cheerful Rick & Morty application that you would be able to view all 641 characters with their different properties and ability to generate a random character and ability to filter characters based on different features (Alive or Dead, Human or Alien, Male/Female/Unknown)
API we used can be found here -> [RICK & MORTY API DOCUMENTATION](https://rickandmortyapi.com/)



## Installation
+ Clone or download the repo
+ Open it in editor of your choice and run ``yarn`` command in your terminal to install all dependancies
+ Start server with ``yarn start``




# Technologies used
+ React.js
+ Axios
+ Bulma CSS Framework
+ SASS
+ CSS3
+ React Router DOM
+ VSCode Liveshare
+ Insomnia
+ Yarn
+ Version control tools (Git/Github)
+ Netlify (deployment)

## Challenges

+ Filtering characters by 3 different criteria has proven to be difficult, as we wer enot fully comnfortable with state management yet which lead us to unfinished filtering function in our project.
+ First time dealing with paginated API. Was a great challenge to overcome and adapt to the layout of our API at hand as we were able to only display 20 characters at a time, so we had to find a solution to our pagination problem
+ Clear planing and user stories, something that we didn't complete fully due to the short timeframe for the project. It has definitley made it harder to progress through the developmement process of our project without a clear planning structure of it.

## Wins
+ First pair coded project. Taken a great advantaged of working with someone else sharing experience and different coding styles, while trying to colaboratively problem solve and taking advantage of VSCode Liveshare.
+ We managed to find a free acesss API that had great documentation, which allowed us to gain valueable knowledge for our future full stack projects buildin gour own APIs.
+ Being able to get more comfotable with using React Hooks and using Use-Sound package to add a little fun touch to our user experience.
+ Using Bulma CSS framework for the first time in a project has been exremely rewaring experiece, seeing how easily you can add responsiveness and styling just with a few classes.


# Bugs 
+ Random character generator renders the character twice which causes it to change from one character to another. It doesn't occur all the time but it has definitely been an issue with how me managed the state of our randomly generater character.
+ Filter characters goes chain the filtering criteria propertly, we have spent a fair amount of time in getting the functionality working, but couldn't hack it in the end. 
+ We never got to making sure the navbar doesn't apear on the home page due to timing of the project.



