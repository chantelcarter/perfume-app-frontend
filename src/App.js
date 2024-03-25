import {Routes, Route, useNavigate } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Faq from "./pages/Faq"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import PerfumeIndex from "./pages/PerfumeIndex"
import PerfumeShow from "./pages/PerfumeShow"
import PerfumeProtectedIndex from "./pages/PerfumeProtectedIndex"
import PerfumeNew from "./pages/PerfumeNew"
import PerfumeEdit from "./pages/PerfumeEdit"
import NotFound from "./pages/NotFound"
import mockUsers from './mockUsers'
import mockPerfumes from './mockPerfumes'

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [perfumes, setPerfumes] = useState(mockPerfumes)
  const navigate = useNavigate()

  const createPerfume = (perfume) => {
    console.log(perfume)
  }

  const updatePerfume = (perfume, id) => {
    console.log(perfume)
    console.log(id)
  }

  const deletePerfume = (id) => {
    console.log(id)
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
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signIn={signIn}/>} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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