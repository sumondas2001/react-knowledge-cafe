import PropTypes from 'prop-types';
import Bookemark from '../Bookmarke/Bookemark';

const Bookmarkes = ({ bookeMarkes }) => {
     // console.log(bookeMarkes)


     return (
          <div className="md:w-1/3 border border-red-500  ">
               <h1 className="tex-4xl font-bold text-center mt-4 bg-slate-500 p-5 rounded-xl ">Bookmarkes Blogs:{bookeMarkes.length}</h1>
               {
                    bookeMarkes.map((bookeMarke) => <Bookemark key={bookeMarke.id} bookeMarke={bookeMarke}></Bookemark>)

               }

          </div>
     );
};

Bookmarkes.propTypes = {
     bookeMarkes: PropTypes.array
}

export default Bookmarkes;