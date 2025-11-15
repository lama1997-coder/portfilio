import DefulttText from "./DefaultText";
import project from '../assets/project.json';

export default function Projects() {
  const getStoreBadge = (link) => {
    if (link.includes('play.google.com')) {
      return {
        store: 'Google Play',
        icon: '🤖',
        gradient: 'from-green-500 to-green-700'
      };
    } else if (link.includes('apps.apple.com')) {
      return {
        store: 'App Store',
        icon: '🍎',
        gradient: 'from-blue-500 to-blue-700'
      };
    }
    return {
      store: 'View Project',
      icon: '🔗',
      gradient: 'from-purple-500 to-purple-700'
    };
  };

  return (
    <section className="grid justify-center px-4 py-8">
      <DefulttText title="Projects" className="text-[#12F7D6] text-title" />
      <DefulttText title="Mobile apps available on app stores" className="mb-8" style={{ color: '#FFFFFFFF' }} />

      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {project.projects.map((item, index) => {
          const badge = getStoreBadge(item.link);
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border-2 border-[#12F7D6]/30 bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:border-[#12F7D6] hover:shadow-lg hover:shadow-[#12F7D6]/20 hover:scale-105"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#12F7D6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* App Name */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#12F7D6] transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* Store Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300">
                    Available on {badge.store}
                  </span>
                </div>
                
                {/* Download Button */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${badge.gradient} text-white font-semibold text-sm transition-transform group-hover:translate-x-1`}>
                  <span>View App</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </section>
  );
}
