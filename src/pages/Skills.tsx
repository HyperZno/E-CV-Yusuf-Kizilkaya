import React from 'react';
import { Cpu, Layers, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Skills: React.FC = () => {
    const { language } = useLanguage();
    const data = cvData[language];
    const t = data.ui;

    return (
        <div className="py-12 px-4 max-w-6xl mx-auto pb-32">
            <SEO
                title={language === 'tr' ? "Yetenekler" : "Skills"}
                description={language === 'tr' ? "Yusuf Kızılkaya'nın inşaat mühendisliği alanındaki yetkinlikleri ve teknik becerileri." : "Competencies and technical skills of Yusuf Kızılkaya in the field of civil engineering."}
            />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-lg mb-4 text-neon-cyan">
                    <Cpu size={32} />
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t.skillsTitle}</h2>
                <p className="text-slate-500 mt-2 text-lg">{t.skillsSub}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.skills.items.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-neon-blue/10 border border-slate-100 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-neon-blue group-hover:to-neon-cyan transition-colors"></div>

                        <div className="flex items-center justify-between mb-3">
                            <Layers size={20} className="text-slate-400 group-hover:text-neon-blue transition-colors" />
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-colors">{language === 'tr' ? 'Yetenek' : 'Skill'} {index + 1}</span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-slate-900 mb-4">{skill}</h3>

                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${Math.random() * 20 + 80}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full shadow-neon-blue"
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}

                <div className="lg:col-span-3 mt-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center justify-center">
                        {language === 'tr' ? 'Diller' : 'Languages'}
                    </h3>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                            {data.languages.map((lang, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,163,255,0.4)]"></div>
                                        <span className="font-bold text-slate-800 text-lg">{lang}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50/50 rounded-xl border border-slate-100">
                                        {[1, 2, 3, 4, 5].map((starIdx) => (
                                            <Star
                                                key={starIdx}
                                                size={18}
                                                className={`${starIdx <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'} transition-all`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
