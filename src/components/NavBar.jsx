import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { portfolio } from '../data/portfolio';

const navItems = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -45% 0px', threshold: 0 });
    ['home', ...navItems.map(({ id }) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen]);

  return (
    <nav className="navigation" aria-label="Main navigation" ref={navRef}>
      <button className="menu-toggle" aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen} aria-controls="navigation-links"
        onClick={() => setIsOpen((open) => !open)} ref={menuButton}>
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>
      <div className={'nav-links' + (isOpen ? ' is-open' : '')} id="navigation-links">
        {navItems.map(({ id, label }) => (
          <a key={id} href={'#' + id}
            className={activeSection === id ? 'nav-link is-active' : 'nav-link'}
            aria-current={activeSection === id ? 'location' : undefined}
            onClick={() => { setActiveSection(id); setIsOpen(false); }}>{label}</a>
        ))}
        <a className="nav-resume" href={portfolio.resume} target="_blank" rel="noreferrer">
          Résumé <FiArrowUpRight aria-hidden="true" />
        </a>
        <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>
          Let’s talk <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
