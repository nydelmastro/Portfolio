import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from '../../components/Profile/Profile';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const companies = [
  {
    name: "Portfolio Project",
    description: "Creating my Porfolio with ReacJS",
    link: "https://github.com/nydelmastro/Portfolio",
  },
  {
    name: "DuocUC Project",
    description: "App for DuocUC",
    link: "https://github.com/nydelmastro/ProyectoPractica",
  },
  {
    name: "Future project",
    description: "Thinking about it",
    link: "https://www.company3.com",
  },
  {
    name: "Future project",
    description: "Thinking about it",
    link: "https://www.company3.com",
  },

];

export default function Projects() {
  return (
    <div>
      <Profile
        title="Projects"
        content="This is a list of the projects I have worked on."
      />

      <div className="company-display">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </div>
    </div>
  );
}
