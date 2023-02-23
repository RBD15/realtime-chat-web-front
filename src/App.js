import './App.css';
import React from 'react';
import { ChatRouter } from './Routes/ChatRouter';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthRouter } from './Routes/AuthRouter';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route element={<AuthRouter/>}>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
          </Route>
          <Route element={<ChatRouter/>}>
            <Route exact path='/chat' element={<Chat/>}/>
          </Route>
          <Route exact path='*' element={<NotFound/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
