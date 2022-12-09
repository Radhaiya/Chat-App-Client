import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route path='/chats' element={<Chatpage />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
