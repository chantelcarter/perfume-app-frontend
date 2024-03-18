import {Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
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

  const createPerfume = (perfume) => {
    console.log(perfume)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/perfumeindex" element={<PerfumeIndex />} />
        {currentUser && (      
          <Route path="/myperfumes" element={<PerfumeProtectedIndex />} />
        )}
        <Route path="/perfumeshow/:id" element={<PerfumeShow />} />
        <Route path="/perfumenew" element={<PerfumeNew currentUser={currentUser} createPerfume={createPerfume} />} />
        <Route path="/perfumeedit/:id" element={<PerfumeEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App