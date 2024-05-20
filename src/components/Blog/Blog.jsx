import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handelAddToBookeMarkes, handelMakeAsRead }) => {
     const { id, cover_img, title, author_img, reading_time, author, posted_date, hashtags } = blog;
     // console.log(blog)
     return (
          // main section 
          <main className=''>
               <img className='w-full rounded-xl' src={cover_img} alt="" />
               <div className='flex justify-between '>
                    <div className='flex  mt-6 mb-4 '>
                         <img src={author_img} alt="" />
                         <div className='ml-6'>
                              <h3 className='text-base font-bold'>{author}</h3>
                              <p className='font-semibold'>{posted_date}</p>
                         </div>
                    </div>
                    <div className=' mt-3 '>
                         <span className='text-sm font-medium mr-4 '>{reading_time} min read</span>
                         <button onClick={() => handelAddToBookeMarkes(blog)} className='text-xl '>
                              <IoBookmarksOutline />
                         </button>
                    </div>
               </div>
               <div className='mb-20'>
                    <h1 className='font-semibold text-4xl mb-2'>{title}</h1>
                    <p className='font-medium text-sm'>
                         {
                              hashtags.map((hash, inx) => <span key={inx} > <a className='px-1' href="">{hash}</a> </span>)
                         }
                    </p>
                    {/* Mark as read button */}
                    <button onClick={() => handelMakeAsRead(reading_time, id)}
                         className='underline underline-offset-1 text-teal-600 mt-5 text-sm font-semibold'
                    >Mark As Read Time
                    </button>
               </div>
          </main>
     );
};
Blog.propTypes = {
     blog: PropTypes.object.isRequired,
     handelAddToBookeMarkes: PropTypes.func,
     handelMakeAsRead: PropTypes.func

}
export default Blog;