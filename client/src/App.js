import './App.css';
import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminLandingPage from './pages/adminPage/AdminLandingPage';
import AdverticementManagerLandingPage from './pages/adverticementManagerPage/AdverticementManagerLandingPage';
import UserLandingPage from './pages/userPage/UserLandingPage';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import SignupPage from './pages/SignupPage';
import Profile from './pages/userPage/Profile';
import Notification from './pages/userPage/Notification';
import Settings from './pages/userPage/Settings';
import CreateBlog from './pages/userPage/CreateBlog';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true


function App() {
  return (
    <div className=" App">
      
        <BrowserRouter>
        <Toaster position='bottom-right' toastOptions={{ duration: 3000 }}></Toaster>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/adminhome' element={<AdminLandingPage/>}></Route>
          <Route path='/managerhome' element={<AdverticementManagerLandingPage/>}></Route>
          
          <Route path='/userhome' element={<UserLandingPage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/notifications' element={<Notification/>}></Route>
          <Route path='/createblog' element={<CreateBlog/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
