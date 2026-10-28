import { FiArrowUpRight, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import workspace from '../assets/workspace.jpg';
import { portfolio } from '../data/portfolio';

const expertise = [
  { Icon: FiCode, title: 'Web development', description: 'Thoughtful interfaces with React. Scalable server-side applications with Node.js.' },
  { Icon: FiSmartphone, title: 'Mobile experiences', description: 'Cross-platform applications built with Flutter and React Native.' },
  { Icon: FiLayers, title: 'The full picture', description: 'Connecting the interface, the logic, and the details that make a product work.' },
];
export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img src={workspace} alt="A development workspace with code on a laptop beside a green plant" width="914" height="1100" loading="lazy" className="about-image" />
          <div className="image-label"><span className="availability-dot" /> A little curiosity. A lot of code.</div><span className="about-image-star" aria-hidden="true">✳</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">The developer<br />behind the details<span className="green-period">.</span></h2>
          <p className="about-intro">Hi, I’m Lama. A problem solver,<br />a curious mind, and a full-stack developer.</p>
          <p>I build for the web and mobile, bringing together thoughtful interfaces and reliable server-side logic. My work spans React, Node.js, Flutter, and React Native.</p>
          <p>I enjoy untangling complex problems, making things run better, and collaborating with people who care about what they create.</p>
          <a className="text-link" href={portfolio.linkedin} target="_blank" rel="noreferrer">A little more about me on LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="container expertise-grid">{expertise.map(({ Icon, title, description }, index) => (
        <div className="expertise-item" key={title}><div className="expertise-icon-row"><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p></div>
      ))}</div>
    </section>
  );
}
