import { Route, Switch, Redirect } from 'react-router-dom';
import { NewsContextProvider } from './context/NewsContext';

import TopNews from './components/pages/TopNews/TopNews';
import Categories from './components/pages/Categories/Categories';
import NewsDetails from './components/common/NewsDetails/NewsDetails';
import NotFound from './components/common/NotFound/NotFound';

function App() {
  return (
    <NewsContextProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/news" />
        </Route>
        <Route exact path="/news" component={TopNews} />
        <Route path="/news/:id" component={NewsDetails} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:id" component={NewsDetails} />
        <Route component={NotFound} />
      </Switch>
    </NewsContextProvider>
  );
}

export default App;
