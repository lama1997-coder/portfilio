import DefulttText from "./DefaultText";
import skill from '../assets/skill.json'


export default function Skills(){



    return (
        <section className="grid justify-center">
            <DefulttText title="Skills" className="text-[#12F7D6] text-title"/>
            <DefulttText title="I am striving to never stop learning and improving"/>

            <section>
            {
                    skill.skill.map((ee, index) => (
                        <section key={index}>
                            <img src={require(`../assets/${ee.icon}`)} alt={ee.title} />
                        </section>
                    ))
                }
            </section>
        </section>
    )


}