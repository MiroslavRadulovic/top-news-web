import { Route, Switch, Redirect } from "react-router-dom";
import { NewsContextProvider } from "./context/NewsContext";
import "./App.scss";

import Layout from "./components/hoc/layout/Layout";

import TopNews from "./components/pages/TopNews/TopNews";
import Categories from "./components/pages/Categories/Categories";

function App() {
  return (
    <NewsContextProvider>
      <Switch>
        <Layout>
          <Route path="/news" component={TopNews} />
          <Route path="/categories" component={Categories} />
          <Redirect to="/news" />
        </Layout>
      </Switch>
    </NewsContextProvider>
  );
}

export default App;
