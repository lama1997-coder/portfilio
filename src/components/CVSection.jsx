import { FiArrowUpRight, FiDownload, FiFileText } from 'react-icons/fi';
import { portfolio } from '../data/portfolio';
export default function CVSection() {
  return (
    <section className="container resume-section" id="cv" aria-labelledby="resume-title">
      <div className="resume-icon"><FiFileText aria-hidden="true" /></div>
      <div className="resume-copy"><p className="eyebrow">THE EXPERIENCE BEHIND THE WORK</p><h2 id="resume-title">Want the full story?</h2><p>Take a closer look at my experience, skills, and professional journey.</p></div>
      <div className="resume-actions"><a className="button button-outline" href={portfolio.resume} download="Lama-Yousif-Resume.pdf">Download my CV <FiDownload aria-hidden="true" /></a><a className="resume-preview" href={portfolio.resume} target="_blank" rel="noreferrer">Preview PDF <FiArrowUpRight aria-hidden="true" /></a></div>
    </section>
  );
}
