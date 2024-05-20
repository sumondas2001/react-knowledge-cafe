import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handelAddToBookeMarkes, handelMakeAsRead }) => {
     const [blogs, setBlogs] = useState([]);
     useEffect(() => {
          fetch('blogs.json')
               .then(res => res.json())
               .then(data => setBlogs(data))
     }, [])
     return (
          <div className="md:w-2/3">
               <h1 className="text-2xl font-semibold text-center mb-4
               ">Blogs :{blogs.length}</h1>
               {
                    blogs.map((blog) => <Blog handelAddToBookeMarkes={handelAddToBookeMarkes}
                         key={blog.id}
                         blog={blog} handelMakeAsRead={handelMakeAsRead} >

                    </Blog>)
               }
          </div>
     );
};


Blogs.propTypes = {
     handelAddToBookeMarkes: PropTypes.func,
     handelMakeAsRead: PropTypes.func
}
export default Blogs;