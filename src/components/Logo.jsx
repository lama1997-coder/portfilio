export default function Logo(){
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            {/* Code Icon */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#12F7D6] blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-lg"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#12F7D6] to-[#0ccabf] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-900 font-bold text-xl font-mono">&lt;/&gt;</span>
                </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">DevLama</span>
                <span className="text-[#12F7D6] text-xs font-semibold">Full-Stack Developer</span>
            </div>
        </div>
    )
}