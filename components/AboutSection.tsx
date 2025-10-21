
import React from 'react';
import Section from './Section';
import { CodeIcon, PhpIcon, CloudIcon } from './IconComponents';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
            <div className="p-2 border-2 border-accent rounded-lg shadow-lg">
                 <img src="https://picsum.photos/seed/cyrus-manatad/400/400" alt="Cyrus Manatad" className="w-full h-full object-cover rounded-md" />
            </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I’m an experienced web developer with 7+ years in the IT industry, known for creating efficient, scalable web applications. I enjoy solving problems, optimizing code, and delivering seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <CodeIcon className="w-6 h-6 mr-3 text-accent" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <PhpIcon className="w-6 h-6 mr-3 text-accent" />
              <span>PHP Expert</span>
            </div>
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <CloudIcon className="w-6 h-6 mr-3 text-accent" />
              <span>AWS/Plesk Experience</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
