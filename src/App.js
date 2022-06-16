// import './App.css';
import React, { useEffect } from 'react';
import {
  NavLink,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import ProductApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo/pages/ListPage';
import CouterFeature from './features/Counter/index';

function App() {
  useEffect(() => {
    const fetachProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await ProductApi.getAll(params);
      console.log(productList);
    };
    fetachProducts();
  }, []);
  return (
    <div className="App">
      Home Page
      {/* <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/albums">Albums</Link></p> */}
      <p>
        <NavLink to="/todos">Todo</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        {/* <Redirect from="/todos" to="/" exact /> */}
        <Route path="/" component={CouterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      Footer
    </div>
  );
}

export default App;
