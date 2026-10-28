import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

export default function AppBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'site-header' + (isScrolled ? ' is-scrolled' : '')}>
      <div className="container header-inner"><Logo /><NavBar /></div>
    </header>
  );
}
