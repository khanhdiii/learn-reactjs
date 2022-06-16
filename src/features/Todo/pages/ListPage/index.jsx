import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList/index';
import queryString from 'query-string';
import {
  useLocation,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'drink',
      status: 'completed',
    },
    {
      id: 3,
      title: 'sleep',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    console.log(todo, idx);
    //toggle state

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const hanleShowAllClick = () => {
    // setFilterStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const hanleShowNewClick = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const hanleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === 'all' || filterStatus === todo.status
    );
  }, [todoList, filterStatus]);

  // console.log(renderTodoList);
  const handleTodoFormSubmit = (values) => {
    console.log('Form submit', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={hanleShowAllClick}>Show All</button>
        <button onClick={hanleShowNewClick}>Show New Click</button>
        <button onClick={hanleShowCompletedClick}>Show Completed Click</button>
      </div>
    </div>
  );
}

export default TodoFeature;
