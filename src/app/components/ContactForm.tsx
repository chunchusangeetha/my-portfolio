'use client';

import React, { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yjjl57f',        // Replace with your actual service ID
        'template_ye07rwk',       // Replace with your actual template ID
        e.currentTarget,
        'A4pYo85Ush2g6hgXP'       // Replace with your actual user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message, try again!');
        }
      );

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4">
      <label className="flex flex-col">
        <span className="mb-1 font-semibold text-black">Your Name</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold text-black">Your Email</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>


      <label className="flex flex-col">
        <span className="mb-1 font-semibold text-black">Your Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Type your message here"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
