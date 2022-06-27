// import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductApi from './api/productApi';
import './App.css';
import Header from './components/Header/index';
import AlbumFeature from './features/Album';
import CouterFeature from './features/Counter/index';
import TodoFeature from './features/Todo/pages/ListPage';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await ProductApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CouterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
