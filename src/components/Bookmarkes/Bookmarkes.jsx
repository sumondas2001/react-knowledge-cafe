import PropTypes from 'prop-types';
import Bookemark from '../Bookmarke/Bookemark';

const Bookmarkes = ({ bookeMarkes, readingTime }) => {
     // console.log(bookeMarkes)


     return (
          <div className="md:w-1/3 border mt-12 bg-slate-300 border-red-500 rounded-lg px-6 ">
               <div>
                    <h3 className='tex-4xl font-bold text-center mb-5 mt-4 bg-red-400 p-5 rounded-xl '>Spent time on read : {readingTime} Min read</h3>
               </div>
               <h1 className="tex-4xl font-bold text-center mt-4 bg-slate-500 p-5 rounded-xl ">Bookmarkes Blogs:{bookeMarkes.length}</h1>
               {
                    bookeMarkes.map((bookeMarke, inx) => <Bookemark key={inx} bookeMarke={bookeMarke}></Bookemark>)

               }

          </div>
     );
};

Bookmarkes.propTypes = {
     bookeMarkes: PropTypes.array,
     readingTime: PropTypes.number
}

export default Bookmarkes;