import { useEffect, useState, createContext } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import axios from './axiosConfig';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from './Context/UserContext';
import NavB from './Components/Nav/NavB'
import Footer from './Components/Footer/Footer'
import Ask from './pages/Ask/Ask'
import Answer from './pages/Answer/Answer';

const AppState = createContext()

function App() {
  const [userData, setUserData] = useState({});


  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUserData(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }
  const logout = () => {
    setUserData({});
    localStorage.removeItem("token");
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <NavB logout={logout} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/ask-questions' element={<Ask/>} />
        <Route path="/answers/:questionid" element={<Answer />} />

      </Routes>
      <Footer/>
    </UserContext.Provider>
  )
}

export default App
