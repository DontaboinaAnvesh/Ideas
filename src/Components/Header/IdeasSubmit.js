import React, { useState } from 'react';
import './IdeasSubmit.css';
import { useIdeas } from '../../contexts/IdeasContext';

const IdeasSubmit = () => {
  const { addIdea } = useIdeas();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    phone: '',
    type: 'Food Business',
    file: null,
    name: '',
    address: '',
    state: '',
    city: '',
    area: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Add idea to context
    addIdea({
      title: formData.title,
      phone: formData.phone,
      name: formData.name,
      address: formData.address,
      state: formData.state,
      city: formData.city,
      area: formData.area,
    });

    // Set submitted state to trigger animation
    setIsSubmitted(true);

    // Reset the form after submission
    setFormData({
      title: '',
      description: '',
      phone: '',
      type: 'Food Business',
      file: null,
      name: '',
      address: '',
      state: '',
      city: '',
      area: '',
    });

    // Remove the animation class after animation ends
    setTimeout(() => setIsSubmitted(false), 600); // 600ms matches the duration of the animation
  };

  return (
    <div className="fullscreen-container">
      <div className="max-w-xl animate-slideInFromBottom">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4 animate-fadeIn">Submit Your Ideas</h1>
       
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 animate-fadeIn">
          {/* Form Fields */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 mb-1">Idea Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 mb-1">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg resize-none h-24"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 mb-1">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="type" className="text-gray-700 mb-1">Type of Idea:</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="Food Business">Food Business</option>
              <option value="Software">Software</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

        

          <div className="flex flex-col">
            <label htmlFor="state" className="text-gray-700 mb-1">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-gray-700 mb-1">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="area" className="text-gray-700 mb-1">Area:</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="file" className="text-gray-700 mb-1">Attach File (Optional):</label>
            <p className="text-gray-600 text-sm mb-6 animate-fadeIn">
              1. Share your idea clearly in the documentation.<br />
              2. Provide a detailed description of your idea.<br />
              3. Select the appropriate type for your idea (e.g., Food Business, Software, etc.).<br />
              4. Attach any relevant documents or images.
            </p>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition ${isSubmitted ? 'animate-celebration' : ''}`}
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdeasSubmit;
