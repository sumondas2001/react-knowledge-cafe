import profile from '../../assets/img/profile.png'

const Header = () => {
     return (
          <div className='flex justify-between p-4 items-center mx-4 border-b-4'>
               <h1 className='font-bold text-3xl text-red-400'>Knowledge Cafe</h1>
               <img src={profile} alt="" />
          </div>
     );
};

export default Header;