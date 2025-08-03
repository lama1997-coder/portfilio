import DefulttText from "./DefaultText";
import project from '../assets/project.json';

export default function Projects() {
  return (
    <section className="grid justify-center">
      <DefulttText title="Projects" className="text-[#12F7D6] text-title" />
      <DefulttText title="Here are some of the projects I've worked on" />

      <section className="grid gap-4 mt-4">
        {project.projects.map((item, index) => (
          <section key={index} className="p-2 border border-[#12F7D6] rounded-lg">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#12F7D6]">
              {item.name}
            </a>
          </section>
        ))}
      </section>
    </section>
  );
}
