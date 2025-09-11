"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com"; 
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .send(
        "service_a05hkyc",   // 👈 from EmailJS dashboard
        "template_6zl7g86",  // 👈 from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "eLfz-sUXOthVyqeyG"    // 👈 from EmailJS dashboard
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {submitStatus === "success" && (
        <p className="mt-4 text-green-600">✅ Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-red-600">❌ Failed to send message. Try again.</p>
      )}
    </div>
  );
};

export default Contact;
