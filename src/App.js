import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Main from "./pages/Main/Main";

import './App.css';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout/>}> 
      <Route path="" element={<Main/>}/>
        
      </Route>       
    </Routes>  
  );
}

export default App;
