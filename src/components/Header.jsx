import DefulttText from "./DefaultText"
import Profile from "./Profile";

export default function Header() {


    return (
        <section >
            <DefulttText title='Developer' brand1="1" big="1" />
            <section className="Header">
                <Profile/>
                <section className='grid-align'>
                    <section>
                    <DefulttText title="<h1>" dan={false} small-x="1" brand1="1" />
                    <DefulttText title="Hey <br/> I’m Lama, <br/> Full-stack developer " h1="1" />
                    <DefulttText title="</h1>" dan={false} small-x="1" brand1="1" />
                    </section>
                    <section className='grid-align'>
                    <DefulttText title="<p>" dan={false} small-x="1" brand1="1" />
                    <DefulttText  title="I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,"  small-x="1" />
                    <DefulttText title="</p>" dan={false} small-x="1" brand1="1" />
                    </section>
                </section>


            </section>

        </section>
    )
}