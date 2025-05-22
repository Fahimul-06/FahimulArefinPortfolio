import React from 'react';
import Section from './ui/Section';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section 
      id="skills" 
      title="Skills & Expertise" 
      subtitle="Technologies and tools I work with"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => {
          // Dynamically get the icon from Lucide
          const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons];
          
          return (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;