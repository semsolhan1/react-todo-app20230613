
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import TodoTemplate from './component/todo/TodoTemplate';
import Join from './component/user/Join';
import Login from './component/user/Login';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={ <TodoTemplate /> } />
        <Route path='/Login' element={ <Login /> } />
        <Route path='/Join' element={ <Join /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
