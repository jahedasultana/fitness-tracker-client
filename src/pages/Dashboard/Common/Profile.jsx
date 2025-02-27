import { Helmet } from 'react-helmet-async';
import UpdateProfileModal from './UpdateProfileModal';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';

const Profile = () => {
    const { user, loading } = useAuth() || {};
    const [role, isLoading] = useRole();

    if (isLoading || loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 mx-auto bg-orange-400 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl">
                <img
                    alt="profile"
                    src="https://i.ibb.co/BC4fFcf/gradient-fitness-gym-twitch-banner-23-2150610034.jpg"
                    className="w-full mb-4 rounded-t-2xl h-64 object-cover"
                />
                <div className="flex flex-col items-center justify-center p-4 -mt-16">
                    <a href="#" className="relative block">
                        <img
                            alt="profile"
                            src={user?.photoURL}
                            className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
                        />
                    </a>

                    <p className="p-2 uppercase px-4 text-xs text-white font-bold rounded-full bg-[#133C55] mt-4">
                        {role}
                    </p>
                    <p className="mt-2 text-sm bg-[#133C55] font-medium text-white px-4 py-2 rounded-full">
                        User Id: {user?.uid}
                    </p>
                    <div className="w-full p-4 mt-4 bg-gray-50 rounded-b-2xl">
                        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
                            <p className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
                                Name
                                <span className="font-bold text-black">
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
                                Email
                                <span className="font-bold text-black">{user?.email}</span>
                            </p>
                            <p className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
                                Login Time
                                <span className="font-bold text-black">
                                    {user?.metadata?.lastSignInTime ? new Date(user?.metadata.lastSignInTime).toLocaleString() : 'N/A'}
                                </span>
                            </p>
                            <div className="flex items-center justify-center w-full sm:w-auto">
                                <UpdateProfileModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
