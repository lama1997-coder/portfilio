import DefulttText from "./DefaultText";
import { FaDownload, FaFileAlt, FaBriefcase } from "react-icons/fa";

export default function CVSection() {
  return (
    <section className="flex justify-center items-center py-16 px-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <DefulttText title="My Resume" className="text-[#12F7D6] text-title mb-4" />
          <DefulttText title="Explore my professional journey and technical expertise" />
        </div>

        {/* CV Card */}
        <div className="relative group">
          {/* Animated background gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#12F7D6] via-purple-500 to-[#12F7D6] rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500 group-hover:duration-200 animate-pulse"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-[#12F7D6]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left side - Icon and info */}
              <div className="flex items-center gap-6">
                {/* CV Icon */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#12F7D6] to-[#0ccabf] flex items-center justify-center shadow-lg shadow-[#12F7D6]/50 group-hover:scale-110 transition-transform duration-300">
                  <FaFileAlt className="text-4xl text-gray-900" />
                </div>
                
                {/* Text info */}
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Full Stack Developer CV
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaBriefcase className="text-[#12F7D6]" />
                    <span className="text-sm">Professional Resume - PDF Format</span>
                  </div>
                </div>
              </div>

              {/* Right side - Download button */}
              <a
                href="/Lama-Abdellatif-Yousif-Hussein-Full-Stack.pdf"
                download
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#12F7D6] to-[#0ccabf] text-gray-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#12F7D6]/50 hover:scale-105"
              >
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                
                <FaDownload className="text-xl relative z-10 group-hover/btn:animate-bounce" />
                <span className="relative z-10 whitespace-nowrap">Download CV</span>
              </a>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-6 pt-6 border-t border-[#12F7D6]/20">
              <p className="text-center text-sm text-gray-400">
                📧 Available for opportunities • 💼 Open to collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-[#12F7D6]/20 hover:border-[#12F7D6]/50 transition-colors">
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm text-gray-300">Quick Response</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-[#12F7D6]/20 hover:border-[#12F7D6]/50 transition-colors">
            <div className="text-2xl mb-2">🚀</div>
            <p className="text-sm text-gray-300">Ready to Start</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-[#12F7D6]/20 hover:border-[#12F7D6]/50 transition-colors">
            <div className="text-2xl mb-2">💡</div>
            <p className="text-sm text-gray-300">Full Stack Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

