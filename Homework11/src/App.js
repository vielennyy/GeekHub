import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AllTodos } from './components/allTodos';
import { Layout } from './components/layout';
import { Todo } from './components/todo';
import { User } from './components/user';
import { Users } from './components/users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<AllTodos/>}/>
          {/* <Route path="/user" element={<Users/>}/> */}
          <Route path="user/:id" element={<User/>}/>
          <Route path="user/:id/todo/:id" element={<Todo/>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
