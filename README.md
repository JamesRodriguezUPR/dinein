# dinein

#### Notes (you may opt out of putting this in the src part of our project)
- Prefferably using linux or mac, you will need node(runnning node on a server), EJS(embeded javascript) express(search how to install theem on your corresponding system) for now.
- We will probably use MongoDB.
- I know the bare basics of html, css, javascript and reactjs. [tutorial i am following](https://www.freecodecamp.org/news/develop-deploy-first-fullstack-web-app/#developingyourfirstnodejswebapp)
------------------------------------
[EJS](https://ejs.co/#install)
You can also put serverside variables(be it single variables or arrays) thanks to templatting.

`npm intall --save-dev nodemon` to easy restart on change. INside package.json write a "script" attribute that has an object that has "devStart" property : "nodemon server.js" and to run: npm run devStart

#### Node
#### Express
#### EJS
`<%- include('../partials/header') %>` to add code from header file into another ejs file. 
Append "_" to start of files in the partials folder?

#### Partials
They are a way of reusing code in our ejs files, since it usually the case that a lot of info ets reused(like headers and footers).
#### DB
#### MogoDB
#### Public
Static files belong in public folder
#### Routes 
GET and POST
### GET
Displays data
### POST
Uploads data