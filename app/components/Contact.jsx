import React, { useState } from "react";
import Contact_bg from "@/assets/contact-bg.jpg";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

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
    } catch (error) {
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

  // === Blob Animation Control ===
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const shapes = [
    "M109.6 -134.2C148.3 -122.8 190.2 -99.1 201.8 -65.1C213.4 -31.2 194.6 13 182.2 61.7C169.8 110.4 163.7 163.6 134.3 197.7C105 231.9 52.5 246.9 15.2 226C-22 205 -44.1 148 -91.6 119.8C-139.2 91.6 -212.3 92.1 -245 62.8C-277.7 33.4 -270.1 -26 -245.3 -72.7C-220.4 -119.4 -178.4 -153.6 -134.7 -163.3C-90.9 -173.1 -45.5 -158.6 -5 -151.7C35.5 -144.8 70.9 -145.6 109.6 -134.2",
    "M130.4 -158.2C169.1 -138.8 203.3 -110.3 208.3 -75.3C213.4 -40.4 189.4 1.1 170.8 49.6C152.1 98.2 138.8 153.8 104.4 190.2C70 226.5 15.6 243.7 -23.2 232.3C-62.1 221 -85.4 181.1 -122.7 150.8C-160.1 120.6 -211.6 100.2 -245.7 64.7C-279.9 29.2 -296.7 -21.4 -272.5 -66.3C-248.3 -111.2 -183.2 -150.3 -126.5 -167.2C-69.8 -184 -21.5 -178.7 30.6 -173.8C82.8 -169 138.7 -164.7 130.4 -158.2",
    "M115.4 -142.6C153.7 -125.8 196.8 -104.3 210.7 -70.6C224.5 -36.9 209.2 8.9 196.1 57.4C182.9 106 171.8 157.3 137.2 189.9C102.5 222.4 44.3 236.3 7.6 217.3C-29.1 198.2 -43.3 146.3 -87.9 116.6C-132.5 86.9 -207.4 79.4 -243.6 49.7C-279.8 20 -277.3 -31.8 -252.5 -76.1C-227.7 -120.4 -180.6 -157.1 -134.1 -166.6C-87.7 -176.2 -43.8 -158.6 -2.9 -150.4C38 -142.2 76.8 -143.1 115.4 -142.6",
    "M102.3 -130.5C142.4 -113.6 191.9 -101.8 206.3 -68.5C220.7 -35.2 199.9 19.6 179.2 70.3C158.5 121 137.9 167.5 103.6 195.5C69.3 223.5 21.2 233 -16.7 217.6C-54.7 202.2 -82.4 161.8 -116.5 132.3C-150.5 102.8 -190.9 84.2 -223.9 51.8C-256.8 19.4 -282.2 -26.9 -263.7 -68.3C-245.1 -109.7 -182.5 -146.3 -129.3 -156.2C-76.1 -166.1 -32.3 -149.3 8.5 -145.2C49.2 -141.2 87.2 -149.8 102.3 -130.5",
    "M90.4 -115.2C130.1 -99.1 177.3 -86.5 192.4 -57.2C207.5 -27.9 190.5 18 171.8 65.7C153.1 113.4 132.7 162.9 101.1 191.7C69.5 220.5 26.8 228.5 -10.9 219.3C-48.5 210.2 -81.1 183.9 -118.3 155.4C-155.5 126.9 -197.3 96.3 -223.6 57.8C-249.8 19.3 -260.4 -27.2 -241.3 -67.4C-222.1 -107.6 -173.2 -141.5 -128.5 -157.5C-83.8 -173.5 -43.4 -171.5 -2 -167.3C39.4 -163 78.8 -156.8 90.4 -115.2",
    "M96.7 -112.8C139.4 -106.1 189.7 -96.7 200.7 -65.3C211.8 -34 183.5 19.3 162.7 66.7C142 114.1 128.7 155.5 97.8 188.1C66.9 220.8 18.3 244.8 -16.5 231.1C-51.2 217.4 -72.2 166 -112.4 136.5C-152.6 107.1 -212 99.7 -243.1 68.8C-274.1 37.9 -276.8 -16.4 -256.2 -64.3C-235.5 -112.2 -191.6 -153.7 -145.1 -166.4C-98.5 -179.1 -49.3 -162.9 -5.7 -153.6C37.9 -144.3 75.7 -142.9 96.7 -112.8",
    "M122.5 -149.2C167.4 -126.9 217.9 -99.6 226.5 -61.8C235.1 -24 201.8 25.3 178.8 70.5C155.8 115.7 143.1 156.8 111.8 191.7C80.4 226.5 30.2 255.2 -8.9 246.4C-48 237.6 -76 191.3 -110.9 157.9C-145.8 124.5 -187.7 104.1 -216.1 69.7C-244.5 35.4 -259.5 -13 -246.8 -59.7C-234.1 -106.5 -193.6 -151.7 -145.5 -169.2C-97.4 -186.8 -48.7 -176.8 -1.4 -174.1C45.9 -171.5 91.7 -176.3 122.5 -149.2",
    "M125.4 -149.6C162.3 -137.7 204.3 -112.9 214.3 -78.4C224.3 -43.9 202.3 0.3 185.9 50.2C169.6 100.2 158.9 155.9 126.4 187.3C93.9 218.8 39.5 225.9 -3.3 224.3C-46 222.7 -77 212.5 -120.3 182.8C-163.6 153.2 -219.2 104 -246.6 52.7C-273.9 1.4 -273.1 -52.1 -247.5 -90.4C-221.8 -128.6 -171.3 -151.7 -126.5 -169.4C-81.6 -187.2 -40.8 -199.6 2.1 -200.4C45 -201.1 90 -190.4 125.4 -149.6",
    "M99.1 -135.6C138.8 -118.3 187.5 -101.3 206.2 -67.3C224.9 -33.3 213.7 17.8 192.7 66.8C171.8 115.8 141.1 162.8 102.4 193.7C63.7 224.6 17.1 239.3 -21.8 225.5C-60.8 211.8 -93.1 169.5 -124.9 138.1C-156.8 106.8 -188.1 86.3 -221.7 54.7C-255.4 23.2 -291.5 -19.4 -282.6 -59.8C-273.8 -100.2 -219.9 -138.3 -169.6 -152.7C-119.3 -167.1 -72.7 -157.8 -31.5 -154.8C9.6 -151.8 53.2 -155 99.1 -135.6",
    "M117.7 -152.3C153.9 -128.7 187.6 -101.2 202.9 -66.5C218.2 -31.9 215.1 10.1 195.6 55.2C176.1 100.3 140.3 148.6 101.1 179.7C61.9 210.7 19.3 224.5 -19.2 219.3C-57.6 214.1 -92 189.8 -131.3 159.8C-170.6 129.9 -214.7 94.2 -238.8 51.9C-262.9 9.7 -267.1 -39.1 -246.5 -84.6C-225.8 -130.2 -180.3 -172.5 -131.2 -182.6C-82 -192.7 -29.2 -170.7 16.2 -158.2C61.6 -145.6 99.5 -142.5 117.7 -152.3",
  ];

  const handleHoverStart = async () => {
    setHovered(true);
    for (let i = index; i < shapes.length; i++) {
      await controls.start({
        d: shapes[i],
        transition: { duration: 10, ease: "easeInOut" },
      });
      setIndex(i);
      if (!hovered) break;
    }
  };

  const handleHoverEnd = () => setHovered(false);

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-cover bg-center relative"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Form */}
        <div>
          {toast.show && (
            <div
              className={`mx-auto text-center mb-6 px-6 py-3 rounded-full text-white text-sm font-semibold w-fit transition-all duration-500 ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
            >
              {toast.text}
            </div>
          )}

          <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
          <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
          <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            I'd love to hear from you! If you have any questions, comments, or
            feedback please use the form below.
          </p>

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
              className="w-full border border-gray-600 bg-white/80 text-gray-900 rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-700 dark:bg-darktheme dark:text-white dark:border-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-white/80 text-gray-900 rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-700 dark:bg-darktheme dark:text-white dark:border-gray-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-white/80 text-gray-900 rounded-lg px-4 py-3 shadow-md resize-y focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-700 dark:bg-darktheme dark:text-white dark:border-gray-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-black text-white rounded-full border border-gray-500 flex items-center gap-2 transition duration-300 ${isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-gray-800"
                } dark:bg-white dark:text-black`}
            >
              {isSubmitting ? "Sending..." : "Submit now"}
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="w-4 invert dark:invert-0"
              />
            </button>
          </form>
        </div>


        {/* RIGHT: Blob */}
        
{/* RIGHT: Blob (visible on load, morphs only when hovered) */}
<div
  className="relative w-full h-[420px] flex items-center justify-center overflow-hidden"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-300 -250 600 600"
    className="absolute w-[440px] h-[440px] md:w-[520px] md:h-[520px]"
  >
    <motion.path
      fill="none"
      strokeWidth="2"
      className="svg-theme-stroke drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      initial={{
        d: "M109.6 -134.2C148.3 -122.8 190.2 -99.1 201.8 -65.1C213.4 -31.2 194.6 13 182.2 61.7C169.8 110.4 163.7 163.6 134.3 197.7C105 231.9 52.5 246.9 15.2 226C-22 205 -44.1 148 -91.6 119.8C-139.2 91.6 -212.3 92.1 -245 62.8C-277.7 33.4 -270.1 -26 -245.3 -72.7C-220.4 -119.4 -178.4 -153.6 -134.7 -163.3C-90.9 -173.1 -45.5 -158.6 -5 -151.7C35.5 -144.8 70.9 -145.6 109.6 -134.2",
      }}
      animate={
        hovered
          ? {
              d: [
                "M109.6 -134.2C148.3 -122.8 190.2 -99.1 201.8 -65.1C213.4 -31.2 194.6 13 182.2 61.7C169.8 110.4 163.7 163.6 134.3 197.7C105 231.9 52.5 246.9 15.2 226C-22 205 -44.1 148 -91.6 119.8C-139.2 91.6 -212.3 92.1 -245 62.8C-277.7 33.4 -270.1 -26 -245.3 -72.7C-220.4 -119.4 -178.4 -153.6 -134.7 -163.3C-90.9 -173.1 -45.5 -158.6 -5 -151.7C35.5 -144.8 70.9 -145.6 109.6 -134.2",
                "M130.4 -158.2C169.1 -138.8 203.3 -110.3 208.3 -75.3C213.4 -40.4 189.4 1.1 170.8 49.6C152.1 98.2 138.8 153.8 104.4 190.2C70 226.5 15.6 243.7 -23.2 232.3C-62.1 221 -85.4 181.1 -122.7 150.8C-160.1 120.6 -211.6 100.2 -245.7 64.7C-279.9 29.2 -296.7 -21.4 -272.5 -66.3C-248.3 -111.2 -183.2 -150.3 -126.5 -167.2C-69.8 -184 -21.5 -178.7 30.6 -173.8C82.8 -169 138.7 -164.7 130.4 -158.2",
                "M115.4 -142.6C153.7 -125.8 196.8 -104.3 210.7 -70.6C224.5 -36.9 209.2 8.9 196.1 57.4C182.9 106 171.8 157.3 137.2 189.9C102.5 222.4 44.3 236.3 7.6 217.3C-29.1 198.2 -43.3 146.3 -87.9 116.6C-132.5 86.9 -207.4 79.4 -243.6 49.7C-279.8 20 -277.3 -31.8 -252.5 -76.1C-227.7 -120.4 -180.6 -157.1 -134.1 -166.6C-87.7 -176.2 -43.8 -158.6 -2.9 -150.4C38 -142.2 76.8 -143.1 115.4 -142.6",
                "M102.3 -130.5C142.4 -113.6 191.9 -101.8 206.3 -68.5C220.7 -35.2 199.9 19.6 179.2 70.3C158.5 121 137.9 167.5 103.6 195.5C69.3 223.5 21.2 233 -16.7 217.6C-54.7 202.2 -82.4 161.8 -116.5 132.3C-150.5 102.8 -190.9 84.2 -223.9 51.8C-256.8 19.4 -282.2 -26.9 -263.7 -68.3C-245.1 -109.7 -182.5 -146.3 -129.3 -156.2C-76.1 -166.1 -32.3 -149.3 8.5 -145.2C49.2 -141.2 87.2 -149.8 102.3 -130.5",
              ],
            }
          : {
              d: "M109.6 -134.2C148.3 -122.8 190.2 -99.1 201.8 -65.1C213.4 -31.2 194.6 13 182.2 61.7C169.8 110.4 163.7 163.6 134.3 197.7C105 231.9 52.5 246.9 15.2 226C-22 205 -44.1 148 -91.6 119.8C-139.2 91.6 -212.3 92.1 -245 62.8C-277.7 33.4 -270.1 -26 -245.3 -72.7C-220.4 -119.4 -178.4 -153.6 -134.7 -163.3C-90.9 -173.1 -45.5 -158.6 -5 -151.7C35.5 -144.8 70.9 -145.6 109.6 -134.2",
            }
      }
      transition={{
        repeat: hovered ? Infinity : 0,
        repeatType: "mirror",
        duration: hovered ? 5 : 0,
        ease: "easeInOut",
      }}
    />
  </motion.svg>

  <h2 className="absolute text-4xl md:text-5xl font-Ovo z-10 pointer-events-none text-[color:var(--page-fg)]">
    Contact Me
  </h2>
</div>

      </div>
    </div>
  );
};

export default Contact;
