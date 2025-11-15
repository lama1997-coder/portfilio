import { useState } from 'react'
import TextField from './TextField.jsx'
import Title from './Title.jsx'
import insta from '../assets/linkedin.svg'
import githup from '../assets/githup.svg'

export default function NavBar(){
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setActiveSection(sectionId);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="flex items-center gap-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-gray-800/50 backdrop-blur-md px-2 py-2 rounded-full border border-[#12F7D6]/20">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
                            ${activeSection === item.id 
                                ? 'text-gray-900 bg-[#12F7D6] shadow-lg shadow-[#12F7D6]/50' 
                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-3">
                <a 
                  href="https://linkedin.com/in/lama-yousef-53b9071a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-[#12F7D6]/30 flex items-center justify-center text-[#12F7D6] hover:border-[#12F7D6] hover:bg-[#12F7D6]/10 hover:shadow-lg hover:shadow-[#12F7D6]/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                    href="https://github.com/lama1997-coder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-[#12F7D6]/30 flex items-center justify-center hover:border-[#12F7D6] hover:shadow-lg hover:shadow-[#12F7D6]/30 transition-all duration-300"
                >
                    <img src={githup} alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[#12F7D6] hover:bg-[#12F7D6]/10 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    )
}