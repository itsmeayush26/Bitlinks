'use client';
import React, { useState } from 'react';

const contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Your message has been submitted.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="bg-gray-100 shadow-2xl rounded-xl p-8 w-full max-w-xl">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
                    Contact Us
                </h1>
                <p className="text-center text-gray-700 mb-8">
                    We'd love to hear from you. Please fill out the form below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                    >
                        Submit
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <h2 className='font-bold text-gray-800'>
                        Or email us at{' '}
                    </h2>
                    <a href="mailto:ayu.singhayush@gmail.com" className="text-blue-800 underline">
                        ayu.singhayush@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default contact;
