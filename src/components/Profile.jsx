import profileImage from '../assets/Profile-photo.png'
import DefulttText from './DefaultText'
import Title from './Title'
import email from '../assets/message.svg'
import location from '../assets/location.svg'
import work from '../assets/work.svg'
import Button from './Button'
import link from '../assets/link.svg'


export default function Profile() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="card">

            <section className='flex-align'>
                <img src={profileImage} />
                <DefulttText title='Lama Abdellatif Yousif Hussein' />
            </section>
            <section className='grid-align'>
                <Title logo={email} text='lamayousef1997@gmail.com' />
                <Title logo={location} text='UAE' />
                <Title logo={work} text='Full-time / Freelancer' />
                <Title logo={link} text='www.linkedin.com/in/lama-yousef-53b9071a1/'/>
            </section>
             <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#12F7D6] to-[#0ccabf] text-gray-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#12F7D6]/50 hover:scale-105 text-center text-sm sm:text-base cursor-pointer"
                            >
                                <span className="relative z-10">Let's Talk</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#12F7D6]/30 text-white font-semibold rounded-xl hover:border-[#12F7D6] hover:bg-[#12F7D6]/10 transition-all duration-300 text-center text-sm sm:text-base cursor-pointer"
                            >
                                View Projects
                            </button>
                        </div>
            {/* <section className='flex-align'>
                <Button title="Flutter"/>
                <Button title="React"/>
                <Button title="HTML"/>
                <Button title="CSS"/>
            </section> */}

        </div>
    )



}