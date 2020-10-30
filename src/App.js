import { Route } from "react-router-dom";
import "./App.scss";

import Layout from "./components/hoc/layout/Layout";

import TopNews from "./components/pages/TopNews/TopNews";
import Categories from "./components/pages/Categories/Categories";

function App() {
  return (
    <Layout>
      <Route exact path="/news" component={TopNews} />
      <Route exact path="/categories" component={Categories} />
    </Layout>
  );
}

export default App;
