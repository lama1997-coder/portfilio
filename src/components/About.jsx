import bg from '../assets/aboutMe.png'
import image from '../assets/image1.png'

import Button from './Button'
import DefulttText from './DefaultText'
import Card from './Card'
export default function About() {


  var title = <>   <DefulttText title="<p>" dan={false} small-x="1" brand1="1" />
    <DefulttText title="Hello!" dan={false} small-x="1" brand1="1" />
    <DefulttText title="Full-Stack Developer with over six years of experience, specializing in server-side applications
using Node.js and cross-platform mobile development with Flutter and React-native. Highly
skilled in enhancing analytical thinking and promoting collaboration within dynamic team
settings. Proven track record in delivering robust, scalable applications and optimizing
performance through innovative solutions." small-x="1" />
    <DefulttText title="</P>" dan={false} small-x="1" brand1="1" /></>

  return (
    <section className="Header" style={{ backgroundImage: `url(${bg})`, minHeight: "calc(15vh + 15vw)", backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', gridTemplateColumns: "1FR 1FR" }}>
      <section className='grid gap-2'>
        <Card
          style={{
            padding: '1vh',
            width: 'min-content',
            textOverflow: '',
          }}
        >
          About Me
        </Card>
        <div style={{backgroundColor:"#292F36",borderRadius:'20px',padding:"3vh"}}>
          {title}
        </div>
      </section>
      <img src={image} />

    </section>
  )
}