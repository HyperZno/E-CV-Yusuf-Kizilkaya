import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { useLanguage } from '../context/LanguageContext';
import cvPdf from '../assets/cv.pdf';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const { language } = useLanguage();
    const data = cvData[language];
    const t = data.ui;

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:min-h-[calc(100vh-10rem)] py-8 lg:py-0">
            <SEO />

            {/* Left Column: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left"
            >
                <div className="relative inline-block">
                    <span className="inline-block py-1 px-3 rounded-full bg-neon-blue/10 text-neon-blue font-bold text-[10px] tracking-wider uppercase mb-4 animate-pulse-slow">
                        • {t.availability}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                        {data.personalInfo.name.split(' ')[0]}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
                            {data.personalInfo.name.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                </div>

                <div className="space-y-4 lg:space-y-6 max-w-xl mx-auto lg:mx-0">
                    <h2 className="text-xl lg:text-2xl text-slate-700 font-mono font-bold border-l-4 border-neon-cyan lg:pl-4">
                        {data.personalInfo.title}
                    </h2>
                    <p className="text-sm lg:text-lg text-slate-600 leading-relaxed">
                        {data.personalInfo.about}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <motion.a
                        href="/experience"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg shadow-slate-900/30 overflow-hidden flex items-center justify-center"
                    >
                        <span className="relative z-10 flex items-center">
                            {t.viewExperience} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>

                    <motion.a
                        href={cvPdf}
                        download="Yusuf_Kizilkaya_CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 lg:px-8 py-3 lg:py-4 text-slate-700 font-bold border-2 border-slate-200 rounded-full hover:border-neon-blue hover:text-neon-blue transition-all flex items-center justify-center bg-white"
                    >
                        {t.downloadCv} <Download className="ml-2 w-4 h-4" />
                    </motion.a>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 lg:pt-8 border-t border-slate-100 max-w-md lg:max-w-2xl mx-auto lg:mx-0">
                    {[
                        { icon: Phone, label: language === 'tr' ? "Telefon" : "Phone", value: data.personalInfo.phone },
                        { icon: Mail, label: language === 'tr' ? "E-posta" : "Email", value: data.personalInfo.email },
                        { icon: MapPin, label: language === 'tr' ? "Konum" : "Location", value: data.personalInfo.address },
                        { icon: Linkedin, label: language === 'tr' ? "LinkedIn" : "LinkedIn", value: language === 'tr' ? "Profili Görüntüle" : "View Profile", link: data.personalInfo.linkedin }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 group p-2 hover:bg-slate-50 rounded-xl transition-all">
                            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                                <item.icon size={18} className="text-slate-500 group-hover:text-neon-blue transition-colors" />
                            </div>
                            <div className="flex flex-col min-w-0 text-left">
                                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">{item.label}</span>
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noreferrer" className="text-xs lg:text-sm text-slate-700 font-bold hover:text-neon-blue transition-colors whitespace-nowrap lg:whitespace-normal">{item.value}</a>
                                ) : (
                                    <span className="text-xs lg:text-sm text-slate-700 font-bold whitespace-nowrap lg:whitespace-normal">{item.value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Column: Visual / Graphic */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 lg:-translate-y-12 relative"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-gradient-to-tr from-neon-blue/20 to-neon-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>

                <div className="relative w-56 h-56 lg:w-80 lg:h-80 rounded-3xl shadow-2xl shadow-slate-200 border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 ease-out z-10">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                        <img
                            src={data.personalInfo.photo}
                            alt={data.personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-3 -right-3 bg-white shadow-xl border border-slate-100 p-2 px-4 rounded-full z-20 flex items-center gap-2"
                    >
                        <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                        <p className="text-[10px] font-bold text-slate-800 whitespace-nowrap">{t.statusLabel}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
