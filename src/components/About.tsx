import React from 'react';
import Section from './ui/Section';
import { User, Mail, MapPin, Calendar, Download } from 'lucide-react';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Learn more about my background and what drives me"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-up">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/images/466132887_3917775731828594_3603733718405303476_n.jpg" 
            alt="Professional portrait" 
            className="w-full h-auto"
          />
          <div className="absolute inset-200 bg-gradient-to-t from-black/30 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold">Fahimul Arefin</h3>
              <p className="text-lg opacity-90">Fullstack Developer</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate Software Developer with 3+ years of experience creating engaging and user-friendly Softwares and web applications. I specialize in Software Development, Database Management, Software Testing, Debugging, RestAPI with modern frontend and backend technologies.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          🚀 Throughout my career, I've been driven by a commitment to delivering excellence in software development. Whether it's designing RESTful APIs, optimizing database performance, or implementing complex business logic, I approach each challenge with creativity and a focus on industry best practices.
          My approach combines technical expertise with an eye for design to build solutions that not only function flawlessly but also provide exceptional user experiences. I'm dedicated to writing clean, efficient code and staying up-to-date with the latest industry trends.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          🔧 I excel in collaborating with cross-functional teams to translate project requirements into technical solutions that exceed expectations. My ability to communicate effectively and adapt to evolving project needs enables me to thrive in dynamic work environments.
           </p>
          <p>
          🌟 Passionate about continuous learning, I stay updated with the latest advancements in backend technologies and methodologies. I am always eager to explore new tools and frameworks that enhance productivity and drive innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
            <div className="flex items-center">
              <User className="mr-3 text-primary-600 dark:text-primary-400" size={20} />
              <span className="text-gray-700 dark:text-gray-300">Fahimul Arefin</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 text-primary-600 dark:text-primary-400" size={20} />
              <span className="text-gray-700 dark:text-gray-300">arefinshowrav2000@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 text-primary-600 dark:text-primary-400" size={20} />
              <span className="text-gray-700 dark:text-gray-300">Mirpur, Dhaka -1216</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-3 text-primary-600 dark:text-primary-400" size={20} />
              <span className="text-gray-700 dark:text-gray-300">Available for hire</span>
            </div>
          </div>
          
        <a href="/images/ArefinCV.pdf" download>
          <Button 
            variant="primary" 
            className="mt-6" 
            icon={<Download size={18} />}
          >
            Download Resume
          </Button>
        </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
