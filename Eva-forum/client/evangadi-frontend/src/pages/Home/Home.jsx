import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import axios from '../../axiosConfig';
import Quest from '../Ask/Quest'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../../Components/Layout/Layout';

function Home() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const token = localStorage.getItem("token");

    const loadQuestions = async () => {
        try {
        const response = await axios.get("/questions/all-questions", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        setQuestions(response?.data);
        } catch (error) {
        console.error(error.response);
        }
    };

    useEffect(() => {
        if (!token || !userData) {
        toast.warning("please login")
        navigate("/login");
        } else {
        loadQuestions();
        }
    }, [userData, navigate]);
  return (
    <>
      <ToastContainer />
      <div className="home-header">
        <button
          className="home-question ask-question-btn"
          onClick={() => navigate("/ask-questions")}
        >
          Ask Question
        </button>
        <h1>Welcome: <span>{userData?.username}</span></h1>
      </div>
      <div className="home-details">
        <h1>Questions</h1>
      </div>
      <div>
        {questions.map((question, i) => (
          <Quest question={question} key={i} />
        ))}
      </div>
    </>
  )
}

export default Home