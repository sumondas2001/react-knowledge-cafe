import PropTypes from 'prop-types';


const Bookemark = ({ bookeMarke }) => {
     // console.log(bookeMarke)
     const { title } = bookeMarke
     return (
          <div className='px-6 py-5 m-4 bg-slate-300 rounded-xl'>
               <h3 className='text-xl font-medium'>{title}</h3>
          </div>
     );
};

Bookemark.propTypes = {
     bookeMarke: PropTypes.object
}

export default Bookemark;