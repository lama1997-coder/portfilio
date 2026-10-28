import { SiFlutter, SiNodedotjs, SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
const technologies = [
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'React', Icon: SiReact },
  { name: 'React Native', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'HTML & CSS', Icon: SiHtml5, SecondIcon: SiCss3 },
];
export default function Skills() {
  return (
    <section className="tech-strip container" aria-label="Technologies I work with">
      <p>THE TOOLS<br /><strong>BEHIND THE WORK</strong></p>
      <ul>{technologies.map(({ name, Icon, SecondIcon }) => (
        <li key={name}><Icon aria-hidden="true" />{SecondIcon && <SecondIcon className="second-tech-icon" aria-hidden="true" />}<span>{name}</span></li>
      ))}</ul>
    </section>
  );
}
