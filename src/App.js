import {Routes, Route, useNavigate } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Faq from "./pages/Faq"
import PerfumeIndex from "./pages/PerfumeIndex"
import PerfumeShow from "./pages/PerfumeShow"
import PerfumeProtectedIndex from "./pages/PerfumeProtectedIndex"
import PerfumeNew from "./pages/PerfumeNew"
import PerfumeEdit from "./pages/PerfumeEdit"
import NotFound from "./pages/NotFound"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [perfumes, setPerfumes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if(loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readPerfume()
  }, [])

  const readPerfume = () => {
    fetch("http://localhost:3000/perfumes")
      .then((response) => response.json())
      .then((data) => setPerfumes(data))
      .catch((errors) => console.log("Perfume read errors:", errors))
  }

  const createPerfume = (perfume) => {
    fetch("http://localhost:3000/perfumes", {
      body: JSON.stringify(perfume),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readPerfume())
      .catch((errors) => console.log("Perfume create errors:", errors))
  }

  const updatePerfume = (perfume, id) => {
    fetch(`http://localhost:3000/perfumes/${id}`, {
      body: JSON.stringify(perfume),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then(() => readPerfume())
      .catch((errors) => console.log("Perfume update errors:", errors))
  }

  const deletePerfume = (id) => {
    fetch(`http://localhost:3000/perfumes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readPerfume())
      .catch((errors) => console.log("Perfume delete errors:", errors))
  }

  const signUp = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("Sign up errors: ",error))
  }

  const signIn = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("Sign in errors: ",error))
  }

  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      }).then(() => {
        navigate("/")
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home perfumes={perfumes} />} />
        <Route path="/signin" element={<SignIn signIn={signIn}/>} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/perfumeindex" element={<PerfumeIndex perfumes={perfumes} />} />
        {currentUser && (      
          <Route path="/myperfumes" element={<PerfumeProtectedIndex perfumes={perfumes} currentUser={currentUser} deletePerfume={deletePerfume} />} />
        )}
        <Route path="/perfumeshow/:id" element={<PerfumeShow perfumes={perfumes} />} />
        <Route path="/perfumenew" element={<PerfumeNew currentUser={currentUser} createPerfume={createPerfume} />} />
        <Route path="/perfumeedit/:id" element={<PerfumeEdit perfumes={perfumes} updatePerfume={updatePerfume} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App