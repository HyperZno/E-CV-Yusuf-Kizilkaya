import React from 'react';
import { MapPin, Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Experience: React.FC = () => {
    const { language } = useLanguage();
    const data = cvData[language];
    const t = data.ui;

    return (
        <div className="py-12 px-4 max-w-4xl mx-auto pb-32">
            <SEO
                title={language === 'tr' ? "Deneyim" : "Experience"}
                description={language === 'tr' ? "Yusuf Kızılkaya'nın profesyonel iş deneyimi ve mühendislik projeleri." : "Professional work experience and engineering projects of Yusuf Kızılkaya."}
            />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{t.experienceTitle}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
            </motion.div>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2"></div>

                {data.experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-white border-4 border-neon-blue rounded-full md:-translate-x-1/2 z-10 shadow-lg shadow-neon-blue/20 flex items-center justify-center transform -translate-x-1/2 md:translate-x-[calc(-50%)]">
                            <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                        </div>

                        <div className="md:w-1/2"></div>

                        <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-neon-blue/10 hover:-translate-y-1 transition-all duration-300">

                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                                        <div className="flex items-center text-sm font-medium text-neon-blue mt-1">
                                            <Building size={14} className="mr-1" /> {job.company}
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 mt-2 md:mt-0">
                                        <Calendar size={12} className="mr-1" />
                                        {job.startDate} - {job.endDate || (language === 'tr' ? 'Güncel' : 'Present')}
                                    </span>
                                </div>

                                <div className="flex items-center text-xs text-slate-500 mb-4">
                                    <MapPin size={12} className="mr-1" /> {job.location}
                                </div>

                                <ul className="space-y-3">
                                    {job.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-600 group">
                                            <span className="mt-1 mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-neon-cyan transition-colors"></span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
