"use client";

import React, { FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjjl57f",
        "template_ye07rwk",
        e.currentTarget,
        "A4pYo85Ush2g6hgXP"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        () => {
          alert("Failed to send message, try again!");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={sendEmail} className="space-y-5">

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Write your message..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>

    </form>
  );
}