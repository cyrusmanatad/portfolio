
import React from 'react';
import Section from './Section';
import { skillsData } from '../constants';
import { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => (
  <div className="bg-navy-light p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span key={skill.name} className="bg-navy-lighter text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);


const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Tech Stack & Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category) => (
          <SkillCard key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
