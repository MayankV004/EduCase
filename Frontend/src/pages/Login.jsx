import React from "react";

function Login() {
    
  return (
    <div className="min-h-screen flex bg-gray-100 ">
      <div className="w-full max-w-md p-8">
        <h2 className="block w-50 text-2xl font-bold mb-3">Signin to your PopX account</h2>
        <p className="block w-3/4 text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form  className="space-y-4">
          <fieldset className="border border-[#CBCBCB]  rounded-md px-3 py-2 focus-within:border-[#6C25FF] transition-colors">
            <legend className="text-[#6C25FF] text-xs font-semibold">Email Address</legend>
            <input 
              type="email" 
              placeholder="Enter email address"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>
          
          <fieldset className="border border-[#CBCBCB] rounded-md px-3 py-1 focus-within:border-[#6C25FF] transition-colors">
            <legend className="text-[#6C25FF] text-xs font-semibold ">Password</legend>
            <input 
              type="password" 
              placeholder="Enter password"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>
          
          <button 
            type="submit" 
            className="w-full bg-[#6C25FF] text-white py-2 rounded-md hover:bg-gray-500 transition-colors mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
