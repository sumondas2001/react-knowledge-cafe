import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarke from './components/Bookmarke/Bookmarke'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarke></Bookmarke>
      </div>
    </>
  )
}

export default App
