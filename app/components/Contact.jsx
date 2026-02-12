'use client';

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c12c4823-f06c-45ae-bce2-7aaec2a0254a",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setToast({
          show: true,
          text: "Form Submitted Successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          show: true,
          text: "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch {
      setToast({
        show: true,
        text: "Something went wrong. Try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ show: false, text: "", type: "" }), 4000);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT: FORM */}
        <div>
          {toast.show && (
            <div
              className={`mx-auto mb-6 px-6 py-3 rounded-full text-white text-sm font-semibold w-fit
                ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
              `}
            >
              {toast.text}
            </div>
          )}

          <h2 className="text-center text-5xl mx-auto mt-5 mb-12 font-Ovo">Let's Talk</h2>


          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col items-center gap-6 font-Ovo"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-white/80 text-gray-900
                         rounded-lg px-4 py-3 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-gray-700
                         placeholder-gray-700
                         dark:bg-darktheme dark:text-white dark:border-gray-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-white/80 text-gray-900
                         rounded-lg px-4 py-3 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-gray-700
                         placeholder-gray-700
                         dark:bg-darktheme dark:text-white dark:border-gray-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-white/80 text-gray-900
                         rounded-lg px-4 py-3 shadow-md resize-y
                         focus:outline-none focus:ring-2 focus:ring-gray-700
                         placeholder-gray-700
                         dark:bg-darktheme dark:text-white dark:border-gray-500"
            />

            {/* ✅ SUBMIT BUTTON — MATCHES ALL OTHER BUTTONS */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
    w-max flex items-center justify-center gap-2
    text-700
    border border-[0.5px] border-700
    rounded-full py-3 px-10
    mx-auto
    hover:bg-[#fcf4ff]
    hover:shadow-lg hover:shadow-black
    hover:-translate-y-1
    duration-500
    disabled:opacity-60 disabled:cursor-not-allowed
  "
            >
              {isSubmitting ? 'Sending...' : 'Submit now'}
              <Image
                src={assets.right_arrow_bold}
                alt="arrow"
                className="w-4"
              />
            </button>




          </form>
        </div>

        {/* RIGHT: CLEAN MINIMAL BOX */}
        <div className="relative">
          <div
            className="border border-gray-400/60 dark:border-gray-500/40
                       rounded-3xl p-14
                       text-[color:var(--page-fg)]
                       backdrop-blur-md"
          >
            <h2 className="text-5xl font-Ovo mb-6 leading-tight">
              Contact <br />
              <span className="inline-block mt-2">Us</span>
            </h2>

            <p className="text-base opacity-80 font-Ovo max-w-md">
              It is very important for us to keep in touch with you,
              so we are always ready to answer any question that
              interests you. Shoot!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
