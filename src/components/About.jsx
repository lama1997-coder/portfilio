import bg from '../assets/aboutMe.png'
import image from '../assets/image1.png'
import Button from './Button'
import DefulttText from './DefaultText'
import Card from './Card'

export default function About() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text Content */}
          <section className="space-y-6 order-2 lg:order-1">
            {/* About Me Badge */}
            <div className="inline-block">
              <div className="px-6 py-2 bg-gradient-to-r from-[#12F7D6]/20 to-transparent border border-[#12F7D6] rounded-full">
                <span className="text-[#12F7D6] font-semibold text-lg">About Me</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#12F7D6] to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-[#12F7D6]/30">
                {/* Code-style opening tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#12F7D6] font-mono text-sm">&lt;developer&gt;</span>
                </div>

                {/* Greeting */}
                <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Hello! 👋
                </h2>

                {/* Description */}
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <span className="text-[#12F7D6] font-semibold">Full-Stack Developer</span> with over 
                    <span className="text-white font-semibold"> six years of experience</span>, specializing in 
                    server-side applications using <span className="text-[#12F7D6]">Node.js</span> and 
                    cross-platform mobile development with <span className="text-[#12F7D6]">Flutter</span> and 
                    <span className="text-[#12F7D6]"> React Native</span>.
                  </p>
                  
                  <p>
                    Highly skilled in enhancing analytical thinking and promoting collaboration within dynamic team 
                    settings. Proven track record in delivering robust, scalable applications and optimizing 
                    performance through innovative solutions.
                  </p>
                </div>

                {/* Skills highlight */}
                <div className="mt-6 pt-6 border-t border-[#12F7D6]/20">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-[#12F7D6]/10 border border-[#12F7D6]/30 rounded-lg text-sm text-[#12F7D6]">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-[#12F7D6]/10 border border-[#12F7D6]/30 rounded-lg text-sm text-[#12F7D6]">
                      Flutter
                    </span>
                    <span className="px-4 py-2 bg-[#12F7D6]/10 border border-[#12F7D6]/30 rounded-lg text-sm text-[#12F7D6]">
                      React Native
                    </span>
                    <span className="px-4 py-2 bg-[#12F7D6]/10 border border-[#12F7D6]/30 rounded-lg text-sm text-[#12F7D6]">
                      7+ Years
                    </span>
                  </div>
                </div>

                {/* Code-style closing tag */}
                <div className="flex items-center gap-2 mt-6">
                  <span className="text-[#12F7D6] font-mono text-sm">&lt;/developer&gt;</span>
                </div>
              </div>
            </div>
          </section>

          {/* Right side - Image */}
          <section className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#12F7D6] to-purple-600 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#12F7D6]/30 shadow-2xl shadow-[#12F7D6]/20 group-hover:border-[#12F7D6]/50 transition duration-300">
                  <img 
                    src={image} 
                    alt="Profile" 
                    className="w-full max-w-md h-auto object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#12F7D6] to-[#0ccabf] rounded-xl p-4 shadow-lg transform group-hover:scale-110 transition duration-300">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">6+</p>
                    <p className="text-xs text-gray-800 font-semibold">Years Exp</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  )
}
