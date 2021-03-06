import Header from 'components/Header';
import ProductFeature from 'features/product';
import TodoFeature from 'features/Todo/pages/ListPage';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
