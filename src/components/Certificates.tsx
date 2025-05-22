import React from 'react';
import Section from './ui/Section';
import { certificates } from '../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <Section
      id="certificates"
      title="Certifications"
      subtitle="Professional certifications and achievements"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={certificate.imageUrl}
                alt={certificate.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm font-medium">{certificate.date}</p>
                  <h3 className="text-white text-xl font-bold mt-2">{certificate.name}</h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="text-primary-600 dark:text-primary-400 mr-2" size={20} />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{certificate.issuer}</p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {certificate.description}
              </p>

              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <span className="mr-2">Verify Certificate</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;