# MRM React Test Project - Solution description

**Stack:**
axios, lodash, redux, redux-thunk, styled components, nodejs, express, mongodb, mongoose

**To start the application:**
1) Run npm install in **both** client and server directiories
2) Run npm start in server directory
3) After a while (when the server started) run npm start in client directory

That's it, enjoy!

# MRM React Test Project

MRM deals with many companies and handles a lot of product data.

Your job will be to build a very simple website using ReactJS that displays some product data.

In this repository you will find a JSON object in `products.js` with some product data. Each product will have the following fields:

```js
{
  "name": "XXXXX",
  "description": "XXXX",
  "category": "XXXX"
}
```

Use `create-react-app` (https://github.com/facebook/create-react-app) as a simple skeleton for your project - this gives you a locally up-and-running React app within seconds. Copy the `products.js` file into your project.

**Don't download/clone/fork this repo, just .zip and return folder that's created using `create-react-app` (without node_modules...)**

Create a website that uses the product data so users can:
1. See a list of all products,
2. Toggle between categories and see a list of products per category
3. Delete a product
4. Add a new product

**NOTE:** For steps 3 & 4 you don't actually have to modify the `products.js` file, it's enough to just use the data there as a starting point (e.g. you could use the data as the initial state in your main component and then just add/delete from the state)

**NOTE:** There should be no back-end for this application, it's purely front-end. Don't worry about persisting the data/changes on refresh.

Extra cool points:

* Good looking and intuitive UI
* Unit tests

This project is intended to be a creative exercise so the structure of the application and the UI/UX is left as a design decision for you. **Timebox yourself to just a few hours at most** - it's alright if you don't finish everything 100%! The main purpose of the project is to talk about it afterwards.

Have fun!
