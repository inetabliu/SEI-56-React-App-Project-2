## Readme currently in progress... ![80%](https://progress-bar.dev/80)

# General Assembly SEI-Project-2
## Rick & Morty Character App - 48hours pair coded Hackathon
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
+ Open it in editor of your choice and run ``yarn`` command in your terminal to install all dependencies
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


## Process 

We had only 48 hours to produce our MVP so had to pick a Public API that worked in our favour. We found a great Rick and Morty cartoon API that consisted of great documentation and most importantly included some imagery, as it was something we were after.
We decided to use VSCode Liveshare for this project so we can collaboratively work on the same code base together. We wanted to keep our application simple with just a few "pages" so we could focus on it looking well polished and the features are working as intended.

We moved to the stage in testing our API and making a ``get`` request to display data about our characters. The second we know we can access certain endpoints on the API.

```javascript 
useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
      setNextPage([data.info.next])
    }
    getData()
  }, [])
```


Handling pagination and loading the next 20 characters everytime ``show more`` button is pressed. We required state for managing all the character data requests as well as the next page of characters. Which required us making another ``get`` request and adding the next 20 characters to our original character state array. Example bellow

```javascript
//State for pagination handling & setting characters
  const [character, setCharacter] = useState([])
  const [nextPage, setNextPage] = useState('')
  
const handlePageChange = async () => {
    try {
      const { data } = await axios.get(nextPage)
      const newCharacters = character.concat(data.results)
      setCharacter(newCharacters)
      setNextPage(data.info.next)
    } catch (err) {
      console.log(err)
    }
  }

```

## Challenges

+ Filtering characters by 3 different criteria has proven to be difficult, as we were not fully comfortable with state management yet which led us to an unfinished filtering function in our project.
+ First time dealing with paginated API. Was a great challenge to overcome and adapt to the layout of our API at hand as we were able to only display 20 characters at a time, so we had to find a solution to our pagination problem
+ Clear planning and user stories, something that we didn't complete fully due to the short timeframe for the project. It has definitely made it harder to progress through the development process of our project without a clear planning structure of it.

## Wins
+ First pair coded project. I took great advantage of working with someone else sharing experience and different coding styles, while trying to collaboratively problem solve and taking advantage of VSCode Liveshare.
+ We managed to find a free access API that had great documentation, which allowed us to gain valuable knowledge for our future full stack projects building our own APIs.
+ Being able to get more comfortable with using React Hooks and using Use-Sound package to add a little fun touch to our user experience.
+ Using Bulma CSS framework for the first time in a project has been an extremely rewarding experience, seeing how easily you can add responsiveness and styling just with a few classes.


## Bugs 
+ Random character generator renders the character twice which causes it to change from one character to another. It doesn't occur all the time but it has definitely been an issue with how I managed the state of our randomly generated character.
+ Filter characters go chain the filtering criteria properly, we have spent a fair amount of time in getting the functionality working, but couldn't hack it in the end. 
+ We never got to make sure the navbar doesn't appear on the home page due to the timing of the project.

## Key learnings 
+ First React App. First time familiarising myself with React Hooks and state management in React App. Definitely looking forward to using React more in my different projects.
+ Using Axios. Solidifying my understanding of HTTP requests and using axios in this project definitely has been a major learning experience. Understanding how asynchronous functions work and how promises are handled.

