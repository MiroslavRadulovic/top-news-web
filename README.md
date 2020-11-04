## Top News README

 **Version 1.0.0**

---
### IMPORTANT!

For the sake of privacy and easier deployment to a production server, staging, etc., it is convenient to put some information into environment files. Before starting the project, it's required to create .env.local file which contains next:

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
