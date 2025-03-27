import React from 'react'

function CreateAccount() {
  return (
    <div className="relative min-h-screen bg-white py-4 px-4 flex flex-col md:justify-center md:items-center">
      <div className="w-full max-w-md flex-grow md:px-4">
        <h2 className="block w-40 text-2xl md:text-xl font-semibold mb-6">Create your PopX account</h2>
        
        <form className="space-y-4 text-xs">
          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Full Name*</legend>
            <input 
              type="text"
              name="fullName"
              placeholder="Enter fullname"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>

          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Phone number*</legend>
            <input 
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>

          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Email address*</legend>
            <input 
              type="email"
              name="emailAddress"
              placeholder="Enter email address"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>

          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Password*</legend>
            <input 
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>

          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Company name</legend>
            <input 
              type="text"
              name="companyName"
              placeholder="Enter company name"
              className="w-full outline-none text-gray-700"
            />
          </fieldset>

          <div className="mt-4">
            <p className="text-sm mb-2">Are you an Agency?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="agency"
                  className="mr-2 accent-[#642AF5]"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="agency"
                  className="mr-2 accent-[#642AF5] "
                />
                No
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-2 w-full max-w-md md:text-sm md:p-4">
        <button 
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default CreateAccount;