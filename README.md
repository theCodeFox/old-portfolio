# **CodeFox Portfolio**
My first coding portfolio.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***

## **Getting Started**
1. Fork from **`GitHub`**: https://github.com/theCodeFox/portfolio.git
2. `Clone into the directory that you will be working from`
3. Install all dependancies and dev-dependancies *(see Installing below)*
4. **`npm start`** - runs the app in the development mode *(Open [http://localhost:3000](http://localhost:3000) to view it in the browser, it will reload if you make edits)*
5. Play around and most importantly... **_have fun!_**

***NOTE**: though I have left `npm eject` in, **DO NOT USE** as is a one-way operation and will remove the single build dependency from this project*

### **Installing**

Once you have cloned the repo then cd into the directory. These instructions are based on the assumption you will already have node and npm installed.

From here:

**Install dependancies**

```
npm install
```

This should install everything you need from the package JSON. If in doubt just copy the example package.json below into your one and then run the code above in your terminal.

**Add browserslist to Package JSON**

```JSON
  {
      "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
  }
```

*Your Package JSON should look something like this:*

```JSON
{
  "name": "codefox-portfolio",
  "author": "theCodeFox",
  "repository": "https://github.com/theCodeFox/portfolio",
  "version": "2.1.0",
  "private": true,
  "dependencies": {
    "@reach/router": "1.3.4",
    "audit": "0.0.6",
    "fix": "0.0.6",
    "flickity": "2.2.1",
    "local-storage": "^2.0.0",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-image": "4.0.3",
    "react-player": "2.6.2",
    "react-scripts": "4.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

**Don't forget a gitignore file!**

```ruby
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage
/src/App.test.js

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

deploymentNotes.txt

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
