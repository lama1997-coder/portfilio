import { FiArrowUpRight, FiGithub, FiLayers, FiSmartphone, FiTool } from 'react-icons/fi';
import projectData from '../assets/project.json';
import moneyOverview from '../assets/projects/moneymov-overview.png';
import moneyScreen from '../assets/projects/moneymov-screen.png';
import { portfolio } from '../data/portfolio';

const projectDetails = {
  moneymov: {
    number: '01', category: 'FINANCE · MOBILE APP',
    description: 'A clearer view of everyday finances. Track money movements, organize accounts, and understand your spending.',
    tags: ['Mobile development', 'Personal finance'],
  },
  humam: {
    number: '02', category: 'HOME SERVICES · CUSTOMER APP',
    description: 'Book home maintenance services, connect with technicians, and track your service requests from one app.',
    tags: ['Home services', 'Customer app'],
    audience: 'FOR CUSTOMERS',
  },
  'humam-technicians': {
    number: '03', category: 'HOME SERVICES · TECHNICIAN APP',
    description: 'Helping technicians receive nearby customer requests, manage appointments, and set prices for their services.',
    tags: ['Service providers', 'Technician app'],
    audience: 'FOR TECHNICIANS',
  },
};

export default function Projects() {
  return (
    <section className="projects section-space container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="projects-title">Ideas, brought to life<span className="green-period">.</span></h2></div>
        <a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="project-grid">
        {projectData.projects.map((project) => {
          const details = projectDetails[project.id];
          return (
            <article className={'project-card ' + project.id} key={project.id}>
              <a className="project-visual" href={project.link} target="_blank" rel="noreferrer" aria-label={'Explore ' + project.name + ' on Google Play'}>
                <div className="project-visual-top"><span>{details.number} / {project.name}</span><span className="round-arrow"><FiArrowUpRight aria-hidden="true" /></span></div>
                {project.id === 'moneymov' ? (
                  <div className="money-art">
                    <div className="money-title">Money<span>Mov</span><small>A little clarity.<br />A lot more possibility.</small></div>
                    <div className="money-phone screen-back"><img src={moneyScreen} width="600" height="900" loading="lazy" alt="MoneyMov’s add account screen" /></div>
                    <div className="money-phone screen-front"><img src={moneyOverview} width="600" height="900" loading="lazy" alt="MoneyMov’s account activity screen" /></div>
                    <span className="money-art-circle" />
                  </div>
                ) : (
                  <div className="humam-art" aria-hidden="true">
                    <span className="humam-orbit humam-orbit-one" /><span className="humam-orbit humam-orbit-two" />
                    <span className="humam-word">humam<span>↗</span></span>
                    <div className="humam-monogram"><span>h</span><i /></div>
                    <div className="humam-art-footer"><span>{details.audience}</span>{project.id === 'humam-technicians' ? <FiTool /> : <FiSmartphone />}</div>
                  </div>
                )}
              </a>
              <div className="project-info">
                <p className="eyebrow project-category">{details.category}</p>
                <div className="project-title-row"><h3><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3><FiLayers aria-hidden="true" /></div>
                <p className="project-description">{details.description}</p>
                <div className="project-bottom"><div className="tags">{details.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" className="project-store-link" aria-label={'View ' + project.name + ' on Google Play'}><FiArrowUpRight aria-hidden="true" /></a></div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="project-footnote"><FiGithub aria-hidden="true" /><p>A few things I’ve built. More experiments and code live on <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a></p></div>
    </section>
  );
}
