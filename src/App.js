import { Route, Switch, Redirect } from 'react-router-dom';
import { NewsContextProvider } from './context/NewsContext';

import Layout from './components/hoc/layout/Layout';

import TopNews from './components/pages/TopNews/TopNews';
import Categories from './components/pages/Categories/Categories';
import NewsDetails from './components/common/NewsDetails/NewsDetails';

function App() {
  return (
    <NewsContextProvider>
      <Switch>
        <Layout>
          <Route exact path="/news" component={TopNews} />
          <Route path="/news/:id" component={NewsDetails} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/categories/:id" component={NewsDetails} />
          <Redirect to="/news" />
        </Layout>
      </Switch>
    </NewsContextProvider>
  );
}

export default App;
