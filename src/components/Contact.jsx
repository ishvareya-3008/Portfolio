import React from "react";

export default function Contact() {
  return (
    <section
      className="flex justify-center items-center bg-secondary px-5 py-32 text-white"
      id="contact"
    >
      <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-12 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold border-b-4 border-[#5490eb] mb-6 inline-block">
          Contact Me
        </h1>

        <p className="pb-6 text-lg">
          If you want to discuss more in detail, feel free to reach out!
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-bold">📧 Email: </span>
            <a
              href="mailto:ishvareyaishu@gmail.com"
              className="hover:text-blue-300 transition"
            >
              ishvareyaishu@gmail.com
            </a>
          </p>
          <p>
            <span className="font-bold">📞 Phone: </span>
            <a
              href="tel:+917092577401"
              className="hover:text-blue-300 transition"
            >
              +91 70925 77401
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
