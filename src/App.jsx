import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/Header/Header'

function App() {
  const [bookeMarkes, setBookeMarkes] = useState([]);

  const handelAddToBookeMarkes = (blog) => {
    const newBookMarkes = [...bookeMarkes, blog]
    setBookeMarkes(newBookMarkes)
  }


  return (
    <div className=''>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto gap-6'>
        <Blogs handelAddToBookeMarkes={handelAddToBookeMarkes}></Blogs>
        <Bookmarkes bookeMarkes={bookeMarkes}></Bookmarkes>
      </div>
    </div>
  )
}

export default App
