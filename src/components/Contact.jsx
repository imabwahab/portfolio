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
    <section id="contact" className="py-16 px-6 md:px-12 ">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-txt dark:text-primary-txt-light mb-2">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Please fill out the form below to discuss any work opportunities.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 p-8 md:p-12 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="flex-1 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="eemail"
              required
              className="flex-1 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-transform transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

  );
};

export default Contact;
