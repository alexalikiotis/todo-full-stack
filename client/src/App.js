import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

import store from './store/configureStore';

store.dispatch({ type: 'todos/LOAD_TODOS' });

const App = () => (
  <Provider store={store}>
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
  </Provider>
);

export default App;