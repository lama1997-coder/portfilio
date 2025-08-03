import emailjs from 'emailjs-com';
import { useState } from 'react';
import DefulttText from "./DefaultText";

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_t14c9ql',        // Replace with your Service ID
      'template_gg96ctv',       // Replace with your Template ID
      form,
      'HR1Fk8LcLvW56VzwS'         // Replace with your Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="max-w-xl mx-auto mt-16 px-4">
      <DefulttText title="Contact Me" className="text-[#12F7D6] text-title mb-2" />
      <DefulttText title="I'd love to hear from you. Let's work together!" />

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 bg-[#1F1F1F] text-white rounded border border-gray-600"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 bg-[#1F1F1F] text-white rounded border border-gray-600"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 bg-[#1F1F1F] text-white rounded border border-gray-600"
        />
        <button
          type="submit"
          className="bg-[#12F7D6] text-black font-semibold py-2 px-6 rounded hover:bg-[#0ccabf]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
