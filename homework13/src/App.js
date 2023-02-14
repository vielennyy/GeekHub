import { Route, Routes } from 'react-router-dom';
import { NewPage } from './components/NewPage';
import { NewsList } from './components/NewsList';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewsList/>}/>

        <Route path="new" element={<NewPage/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
