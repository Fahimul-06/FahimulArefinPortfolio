import React from 'react';
import Section from './ui/Section';
import { experiences, education, testimonials, Certifications } from '../data/experience';
import { Calendar, Briefcase, GraduationCap, Quote } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Experience & Education" 
      subtitle="My professional journey and academic background"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Professional Experience */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="mr-3 text-primary-600 dark:text-primary-400" size={24} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-700 last:pb-0 last:before:hidden"
              >
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400 -translate-x-[3px]" />
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h4>
                  <div className="flex items-center mt-1 mb-3">
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{experience.company}</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {experience.duration}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education and Testimonials */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="mr-3 text-primary-600 dark:text-primary-400" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-03">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-700 last:pb-0 last:before:hidden"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400 -translate-x-[3px]" />
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                    <div className="flex items-center mt-1">
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{item.institution}</p>
                      <span className="mx-2 text-gray-400">•</span>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {item.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="flex items-center mb-8">
              <Quote className="mr-3 text-primary-600 dark:text-primary-400" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Testimonials</h3>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-primary-600 dark:border-primary-400"
                >
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;