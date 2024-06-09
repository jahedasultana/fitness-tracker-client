import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import UpdateProfileModal from './UpdateProfileModal';

const Profile = () => {
  const { user, loading } = useAuth();
  const [role] = useRole();
  const [showModal, setShowModal] = useState(false);

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = (updatedUser) => {
    // Handle the update logic here, e.g., make an API call to update the user profile.
    console.log('Updated User:', updatedUser);
    setShowModal(false);
  };

  if (loading) {
    return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-11/12 md:w-4/5 lg:w-3/5'>
        <img
          alt='profile cover'
          src='https://i.ibb.co/BC4fFcf/gradient-fitness-gym-twitch-banner-23-2150610034.jpg'
          className='w-full mb-4 rounded-t-lg h-36 object-cover'
        />
        <div className='flex flex-col items-center justify-center -mt-20'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-violet-600 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-sm lg:text-xl font-medium text-gray-800'>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-4 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 space-y-4'>
              <div className='w-full md:w-1/3 flex flex-col'>
                <span className='text-gray-500'>Name</span>
                <span className='font-bold text-black'>{user?.displayName}</span>
              </div>
              <div className='w-full md:w-1/3 flex flex-col'>
                <span className='text-gray-500'>Email</span>
                <span className='font-bold text-black'>{user?.email}</span>
              </div>
              <div className='w-full md:w-1/3 flex flex-col'>
                <span className='text-gray-500'>Last Login</span>
                <span className='font-bold text-black'>
                  {user?.metadata?.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleString()
                    : 'N/A'}
                </span>
              </div>
              <div className='w-full flex justify-center mt-4'>
                <button
                  onClick={handleUpdateClick}
                  className='bg-[#2d8cda] px-6 py-2 rounded-lg text-white cursor-pointer hover:bg-[#18505c]'
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpdateProfileModal
        show={showModal}
        onClose={handleCloseModal}
        user={user}
        onSave={handleSave}
      />
    </div>
  );
};

export default Profile;
