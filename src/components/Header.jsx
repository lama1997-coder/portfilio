import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCode, FiMapPin } from 'react-icons/fi';
import { SiFlutter, SiNodedotjs, SiReact } from 'react-icons/si';

function DeveloperArtwork() {
  return (
    <div className="developer-art" aria-hidden="true">
      <div className="art-grid" />
      <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      <div className="art-topline"><span className="art-dot" /> IDEAS INTO EXPERIENCES <span>01 — ∞</span></div>
      <span className="art-asterisk">✳</span>
      <div className="code-window">
        <div className="window-toolbar">
          <div className="window-dots"><i /><i /><i /></div><span>something-great.jsx</span><FiCode />
        </div>
        <div className="code-body">
          <div className="code-line"><span className="line-number">01</span><span className="code-comment">{'// A little logic. A lot of possibility.'}</span></div>
          <div className="code-line"><span className="line-number">02</span><span><b>const</b> Developer = () <b>⇒</b> {'{'}</span></div>
          <div className="code-line"><span className="line-number">03</span><span className="code-indent"><b>return</b> (</span></div>
          <div className="code-line"><span className="line-number">04</span><span className="code-indent-double">&lt;<em>Experience</em></span></div>
          <div className="code-line"><span className="line-number">05</span><span className="code-indent-triple">idea=<strong>"something meaningful"</strong></span></div>
          <div className="code-line"><span className="line-number">06</span><span className="code-indent-triple">builtWith={'{'}<strong>care</strong>{'}'}</span></div>
          <div className="code-line"><span className="line-number">07</span><span className="code-indent-double">/&gt;</span></div>
          <div className="code-line"><span className="line-number">08</span><span className="code-indent">);</span></div>
          <div className="code-line"><span className="line-number">09</span><span>{'}'};</span></div>
        </div>
        <div className="window-status"><span><i /> All systems creative</span><span>UTF-8 <span className="status-divider">|</span> React</span></div>
      </div>
      <div className="floating-stack"><SiReact /><span>React</span><i /><SiFlutter /><span>Flutter</span><i /><SiNodedotjs /></div>
      <div className="art-stamp"><FiCode /><span>MADE WITH<br /><strong>thought & code.</strong></span></div>
      <div className="art-bottomline"><span>WEB · MOBILE · EVERYTHING BETWEEN</span><span className="art-plus">+</span></div>
    </div>
  );
}

export default function Header() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-line" /> FULL-STACK DEVELOPER</p>
        <h1 id="hero-title">Thoughtful code.<br />Meaningful<br /><span className="heading-accent">experiences.</span><span className="heading-spark" aria-hidden="true">✳</span></h1>
        <p className="hero-description">Hi, I’m <strong>Lama.</strong> I turn ideas into intuitive web and mobile experiences — built with purpose, from front to back.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore my work <FiArrowDown aria-hidden="true" /></a>
          <a className="text-link" href="#contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-location"><FiMapPin aria-hidden="true" /><span>Based in the UAE</span><span className="location-divider" /><span className="availability-dot" /><span>Open to opportunities</span></div>
      </div>
      <div className="hero-visual"><DeveloperArtwork /><div className="hero-visual-caption"><span>Good ideas deserve great execution.</span><FiArrowRight aria-hidden="true" /></div></div>
    </section>
  );
}
