import DefulttText from "./DefaultText"
import Profile from "./Profile";

export default function Header() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#12F7D6]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,247,214,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,247,214,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Main content container */}
            <div className="relative max-w-7xl mx-auto w-full">
                {/* Top badge */}
                {/* <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#12F7D6]/10 to-purple-600/10 border border-[#12F7D6]/30 rounded-full backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12F7D6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#12F7D6]"></span>
                        </span>
                        <span className="text-[#12F7D6] font-semibold text-sm uppercase tracking-wider">Available for Work</span>
                    </div>
                </div> */}

                {/* Main grid layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left side - Profile card */}
                    <section className="order-1 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#12F7D6] to-purple-600 rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
                            
                            {/* Profile component with enhanced styling */}
                            <div className="relative transform hover:scale-105 transition-transform duration-500">
                                <Profile />
                            </div>
                        </div>
                    </section>

                    {/* Right side - Hero text */}
                    <section className="space-y-8 order-2 lg:order-2 text-center lg:text-left">
                        {/* Code tag */}
                        <div className="flex items-center gap-2">
                            <span className="text-[#12F7D6]/50 font-mono text-sm">&lt;h1&gt;</span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-gray-400">Hey</span>
                                <span className="block text-white">I'm <span className="bg-gradient-to-r from-[#12F7D6] to-purple-500 bg-clip-text text-transparent">Lama</span>,</span>
                                <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                                    Full-Stack developer
                                </span>
                            </h1>
                        </div>

                        {/* Code closing tag */}
                        <div className="flex items-center gap-2">
                            <span className="text-[#12F7D6]/50 font-mono text-sm">&lt;/h1&gt;</span>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-[#12F7D6]/50 font-mono text-sm">&lt;p&gt;</span>
                            </div>
                            
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                I help businesses grow by crafting amazing web experiences. 
                                If you're looking for a developer that likes to get stuff done,
                                <span className="text-[#12F7D6] font-semibold"> let's work together</span>.
                            </p>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[#12F7D6]/50 font-mono text-sm">&lt;/p&gt;</span>
                            </div>
                        </div>
 {/* Tech stack indicators */}
                        <div className="flex items-center gap-4 pt-8">
                            <div className="flex gap-3">
                                <div className="w-32 h-10 rounded-lg bg-gradient-to-br from-[#12F7D6]/20 to-transparent border border-[#12F7D6]/30 flex items-center justify-center text-[#12F7D6] font-bold hover:scale-110 transition-transform">
                                    Flutter
                                </div>
                                <div className="w-32 h-10 rounded-lg bg-gradient-to-br from-[#12F7D6]/20 to-transparent border border-[#12F7D6]/30 flex items-center justify-center text-[#12F7D6] font-bold hover:scale-110 transition-transform">
                                    React 
                                </div>
                                <div className="w-32 h-10 rounded-lg bg-gradient-to-br from-[#12F7D6]/20 to-transparent border border-[#12F7D6]/30 flex items-center justify-center text-[#12F7D6] font-bold hover:scale-110 transition-transform">
                                   React Native
                                </div>
                                <div className="w-32 h-10 rounded-lg bg-gradient-to-br from-[#12F7D6]/20 to-transparent border border-[#12F7D6]/30 flex items-center justify-center text-[#12F7D6] font-bold hover:scale-110 transition-transform">
                                    Node.js
                                </div>
                            </div>
                        </div>
                        {/* CTA Buttons */}
                       

                       
                    </section>

                </div>

                {/* Scroll indicator */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-gray-400 text-sm">Scroll down</span>
                    <svg className="w-6 h-6 text-[#12F7D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div> */}
            </div>
        </section>
    )
}
