import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Rahul Dhola</h1>
      <p className="text-xl mb-6">Frontend Developer | React Enthusiast | Chatbot Builder</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
        View Projects
      </a>
    </section>
  );
}
