import profileImage from '../assets/Profile-photo.png'
import DefulttText from './DefaultText'
import Title from './Title'
import email from '../assets/message.svg'
import location from '../assets/location.svg'
import work from '../assets/work.svg'
import Button from './Button'
import link from '../assets/link.svg'


export default function Profile() {


    return (
        <div className="card">

            <section>
                <img src={profileImage} />
                <DefulttText title='Lama Abdellatif' />
            </section>
            <section className='grid-align'>
                <Title logo={email} text='lamayousef1997@gmail.com' />
                <Title logo={location} text='UAE' />
                <Title logo={work} text='Full-time / Freelancer' />
                <Title logo={link} text='www.linkedin.com/in/lama-yousef-53b9071a1/'/>
            </section>
            <section className='flex-align'>
                <Button title="Flutter"/>
                <Button title="React"/>
                <Button title="HTML"/>
                <Button title="CSS"/>
            </section>

        </div>
    )



}