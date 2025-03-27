import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    agency: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'radio') {
      setFormData(prevState => ({
        ...prevState,
        agency: value
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Prepare data for submission
    const submitData = {
      name: formData.fullName,
      email: formData.emailAddress,
      password: formData.password,
      phone: formData.phoneNumber,
      companyName: formData.companyName,
      isAgency: formData.agency === 'Yes'
    };

    try {
      const response = await axios.post('/api/users/register', submitData);

      // Save token and user info to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));

      // Redirect to account page
      navigate('/account');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="relative min-h-screen bg-white py-4 px-4 flex flex-col md:justify-center md:items-center">
      <div className="w-full max-w-md flex-grow md:px-4">
        <h2 className="block w-40 text-2xl md:text-xl font-semibold mb-6">Create your PopX account</h2>
        
        {error && (
          <div className="text-red-500 text-xs mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <fieldset className="border border-purple-300 rounded-md px-3 py-2">
            <legend className="text-[#6C25FF] text-xs font-semibold">Full Name*</legend>
            <input 
              type="text"
              name="fullName"
              placeholder="Enter fullname"
              value={formData.fullName}
              onChange={handleInputChange}
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
              value={formData.phoneNumber}
              onChange={handleInputChange}
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
              value={formData.emailAddress}
              onChange={handleInputChange}
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
              value={formData.password}
              onChange={handleInputChange}
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
              value={formData.companyName}
              onChange={handleInputChange}
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
                  value="Yes"
                  checked={formData.agency === 'Yes'}
                  onChange={handleInputChange}
                  className="mr-2 accent-[#642AF5]"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === 'No'}
                  onChange={handleInputChange}
                  className="mr-2 accent-[#642AF5]"
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
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default CreateAccount;