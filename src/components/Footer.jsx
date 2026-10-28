import { FiArrowUp } from 'react-icons/fi';
import Logo from './Logo';
export default function Footer() {
  return (
    <footer className="site-footer container">
      <Logo /><p>© {new Date().getFullYear()} Lama Yousif. Built with care & React.</p>
      <a className="back-to-top" href="#home">Back to top <FiArrowUp aria-hidden="true" /></a>
    </footer>
  );
}
