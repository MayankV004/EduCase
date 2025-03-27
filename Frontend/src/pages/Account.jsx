import React from 'react';
import { Camera } from 'lucide-react';

function Account() {
  return (
    <div className="min-h-screen bg-white py-4 md:flex md:flex-col md:justify-center md:items-center">
        <h2 className="text-2xl mb-4 px-4">Account Settings</h2>
      <div className="max-w-md bg-gray-100 min-h-screen px-4 py-4">
        
        <div className=" relative flex items-center mb-3 ">
          <div className="relative mb-4 bg-red-400 rounded-full">
            <img 
              src="/Dummy.jpg" 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover "
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2">
              <Camera className="text-white" size={16} />
            </div>
          </div>
          
          <div className="absolute left-25 top-0">
            <h3 className="text-xl font-semibold">Marry Doe</h3>
            <p className="">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <div className="px-4">
          <p className="">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

        </div>
    
      </div>
    </div>
  );
}

export default Account;