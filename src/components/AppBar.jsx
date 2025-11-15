import { useState, useEffect } from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"

export default function AppBar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`
                sticky top-0 z-50 transition-all duration-300
                ${isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-lg border-b border-[#12F7D6]/20 shadow-lg shadow-black/20' 
                    : 'bg-transparent'
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo/>
                    </div>
                    
                    {/* Navigation */}
                    <NavBar/>
                </div>
            </div>
        </header>
    )
}