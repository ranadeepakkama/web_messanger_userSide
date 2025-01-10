import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register';
import LoginPage from './components/LoginPage';

const App = () => (
  <Routes>
    <Route path='/login' element = {<LoginPage/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
)

export default App