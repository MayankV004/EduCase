import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-hot-toast"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success("Login Successful")
      navigate('/account');
    } catch (error) {
      toast.error("Login failed")
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 ">
      <div className="w-full max-w-md p-8">
        <h2 className="block w-50 text-2xl font-bold mb-3">Signin to your PopX account</h2>
        <p className="block w-3/4 text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        {error && (
          <div className="text-red-500 text-xs mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={onSubmit} className="space-y-4">
          <fieldset className="border border-[#CBCBCB] rounded-md px-3 py-2 focus-within:border-[#6C25FF] transition-colors">
            <legend className="text-[#6C25FF] text-xs font-semibold">Email Address</legend>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter email address"
              className="w-full outline-none text-gray-700"
              required
            />
          </fieldset>
          
          <fieldset className="border border-[#CBCBCB] rounded-md px-3 py-1 focus-within:border-[#6C25FF] transition-colors">
            <legend className="text-[#6C25FF] text-xs font-semibold ">Password</legend>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={onChange}
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