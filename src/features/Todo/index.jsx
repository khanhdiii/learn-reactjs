import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from 'features/product/pages/DetailPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
a
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
