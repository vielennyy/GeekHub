import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/user" element={<h1>User</h1>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
