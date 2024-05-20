import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
     const { cover_img, title, author_img, reading_time, author, posted_date, hashtags } = blog
     console.log(blog)
     return (
          // main section 
          <main>
               <img className='w-3/5 rounded-xl' src={cover_img} alt="" />
               <div className='flex justify-between '>
                    <div className='flex  mt-6 mb-4 '>
                         <img src={author_img} alt="" />
                         <div className='ml-6'>
                              <h3 className='text-base font-bold'>{author}</h3>
                              <p className='font-semibold'>{posted_date}</p>
                         </div>
                    </div>
                    <div>
                         <span className='text-sm font-medium'>{reading_time}  min read</span>
                    </div>
               </div>
               <div className='mb-20'>
                    <h1 className='font-semibold text-4xl mb-2'>{title}</h1>
                    <p className='font-medium text-sm px-4 '>
                         {
                              hashtags.map((hash, inx) => <span key={inx} > <a className='px-1' href="">{hash}</a> </span>)
                         }
                    </p>
               </div>
          </main>
     );
};
Blog.propTypes = {
     blog: PropTypes.object.isRequired
}
export default Blog;