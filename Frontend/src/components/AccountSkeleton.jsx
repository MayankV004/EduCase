import React from 'react';
import { Camera } from 'lucide-react';

function AccountSkeleton() {
  return (
    <div className="min-h-screen bg-white py-4 md:flex md:flex-col md:justify-center md:items-center">
      <div className="absolute top-4 right-4">
        <div className="bg-gray-200 animate-pulse h-10 w-24 rounded"></div>
      </div>
      
      <h2 className="text-2xl mb-4 px-4 bg-gray-200 animate-pulse h-8 w-48"></h2>
      
      <div className="max-w-md bg-gray-100 min-h-screen px-4 py-4">
        <div className="relative flex items-center mb-3">
          <div className="relative mb-4 rounded-full">
            <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse relative">
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2">
                <Camera className="text-white" size={16} />
              </div>
            </div>
          </div>
          
          <div className="absolute left-25 top-0 ml-24">
            <div className="h-6 w-48 bg-gray-200 animate-pulse mb-2"></div>
            <div className="h-4 w-36 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        
        <div className="px-4 mt-4">
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default AccountSkeleton;