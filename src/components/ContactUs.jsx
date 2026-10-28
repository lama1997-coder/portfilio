import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiCheck, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolio } from '../data/portfolio';
const emptyForm = { name: '', email: '', message: '' };

export default function ContactUs() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const submitting = useRef(false);
  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus('sending');
    try {
      await emailjs.send('service_t14c9ql', 'template_gg96ctv', form, 'HR1Fk8LcLvW56VzwS');
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  };
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">03 / LET’S MAKE SOMETHING GREAT</p>
          <h2 id="contact-title">Good things start<br />with a <span>hello.</span><span className="contact-star" aria-hidden="true">✳</span></h2>
          <p>Have an idea, a project, or an opportunity in mind?<br className="desktop-break" /> I’d love to hear about it.</p>
          <a className="contact-email" href={'mailto:' + portfolio.email}><FiMail aria-hidden="true" /><span>{portfolio.email}</span><FiArrowUpRight aria-hidden="true" /></a>
          <div className="contact-socials"><a href={portfolio.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" />GitHub <FiArrowUpRight aria-hidden="true" /></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" />LinkedIn <FiArrowUpRight aria-hidden="true" /></a></div>
          <div className="contact-availability"><span className="availability-dot" /> Open to full-time roles & freelance collaborations</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Lama" aria-busy={status === 'sending'}>
          <div className="form-row">
            <div className="field"><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" name="name" autoComplete="name" placeholder="What should I call you?" value={form.name} onChange={handleChange} required maxLength={120} disabled={status === 'sending'} /></div>
            <div className="field"><label htmlFor="contact-email">Your email <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required maxLength={254} disabled={status === 'sending'} /></div>
          </div>
          <div className="field"><label htmlFor="contact-message">What’s on your mind? <span>*</span></label><textarea id="contact-message" name="message" placeholder="A little about your project, idea, or opportunity…" rows={4} value={form.message} onChange={handleChange} required maxLength={5000} disabled={status === 'sending'} /></div>
          <div className="form-bottom"><span>Let’s turn a conversation into something.</span><button className="button button-lime" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : status === 'success' ? 'Message sent' : 'Send message'}{status === 'success' ? <FiCheck aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}</button></div>
          <div className={'form-status' + (status === 'error' ? ' is-error' : '')} role="status" aria-live="polite" aria-atomic="true">{status === 'success' && 'Thanks for reaching out! Your message has been sent.'}{status === 'error' && <>Your message couldn’t be sent. Please try again or <a href={'mailto:' + portfolio.email}>email me directly</a>.</>}</div>
        </form>
      </div>
    </section>
  );
}
