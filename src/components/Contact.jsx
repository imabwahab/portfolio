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
      className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col gap-6">
          <span className="section-label">Contact</span>
          <div>
            <h2 className="serif-display text-4xl font-bold text-white sm:text-5xl">
              {contactData.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-text-soft">
              {contactData.description}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-warm">
              Connect with me
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contactData.socials.map((social) => {
                const Icon = socialIcons[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-stroke bg-panel-soft px-4 py-4 transition hover:border-accent/30 hover:bg-panel"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-strong">
                        <Icon />
                      </div>
                      <div>
                        <p className="font-medium text-white">{social.name}</p>
                        <p className="text-sm text-text-soft">View profile</p>
                      </div>
                    </div>
                    <FiArrowUpRight className="text-text-soft" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6 sm:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-stroke bg-panel-soft px-4 py-3 text-white outline-none transition placeholder:text-text-soft focus:border-accent/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Email
                </span>
                <input
                  type="email"
                  name="eemail"
                  required
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-stroke bg-panel-soft px-4 py-3 text-white outline-none transition placeholder:text-text-soft focus:border-accent/40"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white">
                Message
              </span>
              <textarea
                name="message"
                rows="7"
                required
                placeholder="Tell me about the product, role, or problem you need help solving."
                className="w-full rounded-[1.5rem] border border-stroke bg-panel-soft px-4 py-3 text-white outline-none transition placeholder:text-text-soft focus:border-accent/40"
              />
            </label>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-max items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
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
