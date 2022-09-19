import Header from 'components/Header';
import ProductFeature from 'features/product';
import TodoFeature from 'features/Todo/pages/ListPage';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CartFeature from './features/Cart';
import CounterFeature from './features/Counter';
import './script';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
      <div id="fb-root"></div>

      {/* <!-- Your Plugin chat code --> */}
      <div id="fb-customer-chat" class="fb-customerchat"></div>
    </div>
  );
}

export default App;
