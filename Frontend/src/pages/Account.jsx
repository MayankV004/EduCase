import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';

import {toast} from 'react-hot-toast'
import AccountSkeleton from '../components/AccountSkeleton';

function Account() {
   const [user, setUser] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
         setUser(storedUser);
      } else {
         navigate('/login');
      }
   }, [navigate]);

   const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success("Logout successfull")
      navigate('/');
   };

   if (!user) return <AccountSkeleton/>;

   return (
      <div className="min-h-screen bg-white py-4 md:flex md:flex-col md:justify-center md:items-center">
         <div className="absolute top-4 right-4">
            <button
               onClick={handleLogout}
               className="bg-red-500 text-white px-4 py-2 rounded"
            >
               Logout
            </button>
         </div>
         <h2 className="text-2xl mb-4 px-4">Account Settings</h2>
         <div className="max-w-md bg-gray-100 min-h-screen px-4 py-4">
            <div className="relative flex items-center mb-3">
               <div className="relative mb-4 rounded-full">
                  
                  <label htmlFor="profileImageUpload" className="cursor-pointer">
                     <img
                        src={"/Dummy.jpg"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                     />
                     <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2">
                        <Camera className="text-white" size={16} />
                     </div>
                  </label>
               </div>

               <div className="absolute left-25 top-0">
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p>{user.email}</p>
               </div>
            </div>

            <div className="px-4">
               <p>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
               </p>
            </div>
         </div>
      </div>
   );
}

export default Account;