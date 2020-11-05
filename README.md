## Top News README

 **Version 1.0.0**

 This is an application that show news articles using [NewsAPI](https://newsapi.org/) for retrieving data. Application is divided in two sections, top news(where all news are shown) and categories(news are sort and listed by category). There is also a functionality for changing the country that news are from, as well as a functionality for searching for a specific article in top news section.

---
### IMPORTANT!

For the sake of privacy and easier deployment to a production server, staging, etc., it is convenient to put some information into environment files. Before starting the project, it's required to create .env file which contains next:

```bash
REACT_APP_NEWS_API_KEY="<apiKey>"
REACT_APP_API_HOST="https://newsapi.org/v2/"
```
___

After creating .env file, steps to start the project are next:

```bash
npm install
npm start
```

List of npm packages:

* antd
* axios
* classnames
* node-sass
* react-elastic-carousel
* styled-components
* react-router-dom
* enzyme

Folder structure:

*  src
    * assets
    * components
        * common
        * hoc
        * pages
    * context
    * lib
