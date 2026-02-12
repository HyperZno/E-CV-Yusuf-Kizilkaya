import React from 'react';
import { Award, BookOpen, GraduationCap, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cv';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import isoImg from '../assets/iso9001.png';

const Education: React.FC = () => {
    const { language } = useLanguage();
    const data = cvData[language];
    const t = data.ui;
    const [selectedCert, setSelectedCert] = React.useState<string | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <div className="py-12 px-4 max-w-6xl mx-auto pb-32">
            <SEO
                title={language === 'tr' ? "Eğitim" : "Education"}
                description={language === 'tr' ? "Yusuf Kızılkaya'nın akademik geçmişi, inşaat mühendisliği eğitimi ve sertifikaları." : "Academic background, civil engineering education, and certifications of Yusuf Kızılkaya."}
            />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 flex items-center gap-4 border-b border-slate-200 pb-6"
            >
                <div className="p-4 bg-white shadow-lg rounded-2xl text-neon-blue">
                    <GraduationCap size={32} />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.educationTitle}</h2>
                    <p className="text-slate-500 font-medium">{t.educationSub}</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center mb-6">
                        <BookOpen size={20} className="mr-2 text-neon-blue" /> {language === 'tr' ? 'Eğitim Geçmişi' : 'Education History'}
                    </h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        {data.education.map((edu) => (
                            <motion.div variants={item} key={edu.id} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-neon-blue/10 border border-slate-100 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-blue/5 to-transparent rounded-tr-3xl -z-10"></div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-neon-blue transition-colors">{edu.degree}</h4>
                                    <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold border border-slate-200">
                                        {edu.endDate}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center text-slate-500 gap-2">
                                    <span className="font-semibold text-slate-700 flex items-center">
                                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></div>
                                        {edu.school}
                                    </span>
                                    <span className="hidden sm:inline text-slate-300">•</span>
                                    <span className="text-sm">{edu.location}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center mb-6">
                        <Award size={20} className="mr-2 text-neon-cyan" /> {language === 'tr' ? 'Sertifikalar' : 'Certifications'}
                    </h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {data.certifications.map((cert) => (
                            <motion.div variants={item} key={cert.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-slate-100 hover:border-neon-cyan/50 transition-all cursor-default group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-xs font-bold text-neon-cyan uppercase tracking-wider">{cert.date}</div>
                                    <div className="flex gap-2 items-center">
                                        {cert.id === 1 && (
                                            <button
                                                onClick={() => setSelectedCert(isoImg)}
                                                className="flex items-center gap-1 px-2 py-0.5 bg-neon-blue/10 rounded text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300 group/btn"
                                            >
                                                <Eye size={12} className="group-hover/btn:scale-110 transition-transform" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                                    {language === 'tr' ? 'GÖRÜNTÜLE' : 'VIEW'}
                                                </span>
                                            </button>
                                        )}
                                        <Award size={14} className="text-slate-300 group-hover:text-neon-cyan transition-colors" />
                                    </div>
                                </div>
                                <div className="font-semibold text-slate-700 leading-tight flex items-center justify-between">
                                    {cert.name}
                                </div>
                            </motion.div>
                        ))}

                        <div className="mt-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">{language === 'tr' ? 'Bağlantılar' : 'Affiliations'}</h3>
                            <ul className="space-y-3">
                                {data.affiliations.map((aff, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex items-start">
                                        <span className="text-neon-blue mr-2 font-bold">›</span>
                                        {aff}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm cursor-zoom-out"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-slate-100">
                                <h3 className="font-bold text-slate-800">ISO 9001 - {language === 'tr' ? 'Sertifikası' : 'Certificate'}</h3>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>
                            <div className="p-2 overflow-auto max-h-[80vh] flex justify-center bg-slate-50">
                                <img
                                    src={selectedCert}
                                    alt="Certificate"
                                    className="max-w-full h-auto rounded shadow-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Education;
