import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/Header/Header'

function App() {
  const [bookeMarkes, setBookeMarkes] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handelAddToBookeMarkes = (blog) => {
    const newBookMarkes = [...bookeMarkes, blog]
    setBookeMarkes(newBookMarkes)
  };
  const handelMakeAsRead = (time, id) => {
    // const newReadingTime = readingTime + time;
    setReadingTime(readingTime + time)
    // console.log(typeof time)
    // remove the read blog from bookmark
    const remaingBookMarke = bookeMarkes.filter(bookmark => bookmark.id !== id)
    setBookeMarkes(remaingBookMarke)
  }



  return (
    <div className=''>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto gap-6'>
        <Blogs
          handelAddToBookeMarkes={handelAddToBookeMarkes}
          handelMakeAsRead={handelMakeAsRead} >
        </Blogs>
        <Bookmarkes bookeMarkes={bookeMarkes} readingTime={readingTime}></Bookmarkes>
      </div>
    </div>
  )
}

export default App
