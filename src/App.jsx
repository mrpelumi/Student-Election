import './App.css'
import {Routes, Route} from 'react-router-dom';
import SignUp from './routes/signup/signup.component';
import Login from './routes/login/login.component';
import Vote from './routes/vote/vote.component';
import SuccessPage from './routes/success-page/success-page.component';


const App = () => {

  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/vote' element={<Vote />} />
      <Route path='/success' element={<SuccessPage />} />
    </Routes>
  )
}

export default App
