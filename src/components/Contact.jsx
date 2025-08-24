import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_se4w84f",
        "template_r4elsgp",
        form.current,
        "sFmurYra7IrSz6epr"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 "
    >
      <div id="contact" className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-txt dark:text-primary-txt-light">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Please fill out the form below to discuss any work opportunities.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="eemail"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Submit
          </button>

         
        </form>
      </div>
    </section>
  );
};

export default Contact;
