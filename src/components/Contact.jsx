import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { contactData } from "../data/contact.js";

const socialIcons = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  X: FiTwitter,
  Facebook: FiFacebook,
  Instagram: FiInstagram,
};

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        contactData.form.serviceId,
        contactData.form.templateId,
        formRef.current,
        contactData.form.publicKey,
      );

      formRef.current?.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-card border-t border-stroke-strong pt-20 lg:pt-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <span className="section-label">Contact</span>
          <div>
            <h2 className="serif-display text-3xl font-semibold text-text-main sm:text-4xl">
              {contactData.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-text-soft">
              {contactData.description}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {contactData.socials.map((social) => {
              const Icon = socialIcons[social.name];

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="surface surface-hover flex items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-base text-text-faint" />
                    <span className="text-sm font-medium text-text-main">
                      {social.name}
                    </span>
                  </div>
                  <FiArrowUpRight className="text-text-faint" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="surface p-6 sm:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-main">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-stroke bg-panel-soft px-4 py-3 text-sm text-text-main outline-none transition placeholder:text-text-faint focus:border-accent/60"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-main">
                  Email
                </span>
                <input
                  type="email"
                  name="eemail"
                  required
                  placeholder="Your email"
                  className="w-full rounded-lg border border-stroke bg-panel-soft px-4 py-3 text-sm text-text-main outline-none transition placeholder:text-text-faint focus:border-accent/60"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text-main">
                Message
              </span>
              <textarea
                name="message"
                rows="7"
                required
                placeholder="Tell me about the product, role, or problem you need help solving."
                className="w-full rounded-lg border border-stroke bg-panel-soft px-4 py-3 text-sm text-text-main outline-none transition placeholder:text-text-faint focus:border-accent/60"
              />
            </label>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-max disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <p className="max-w-md text-sm leading-7 text-text-soft">
                {status === "success"
                  ? "Your message was sent successfully."
                  : null}
                {status === "error"
                  ? "The form could not be sent. Please try again."
                  : null}
                {status === "idle"
                  ? "Open to frontend, backend, and full-stack product work where execution quality matters."
                  : null}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
