import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { User, Briefcase, GraduationCap, Code, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cv';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import { clsx } from 'clsx';
// @ts-ignore
import { twMerge } from 'tailwind-merge';

const Layout: React.FC = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = cvData[language].ui;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navItems = [
        { path: '/', label: language === 'tr' ? 'Profil' : 'Profile', icon: User },
        { path: '/experience', label: t.viewExperience, icon: Briefcase },
        { path: '/education', label: language === 'tr' ? 'Eğitim' : 'Education', icon: GraduationCap },
        { path: '/skills', label: language === 'tr' ? 'Yetenekler' : 'Skills', icon: Code },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen font-sans text-dark-text bg-light-bg pb-20 md:pb-0 relative overflow-hidden">

            {/* Header - Visible on both Mobile and Desktop */}
            <header className={twMerge(
                "fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 z-50 transition-all duration-300",
                scrolled || location.pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}>
                <div className="flex items-center">
                    {/* The Logo from the image */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-neon-blue/40 mr-4">
                        YK
                    </div>
                    <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 uppercase">
                        YUSUF KIZILKAYA
                    </h1>
                </div>

                {/* Desktop Nav - Hidden on Mobile */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={twMerge(
                                "text-sm font-bold transition-colors relative group py-2",
                                isActive(item.path) ? "text-neon-blue" : "text-slate-500 hover:text-slate-800"
                            )}
                        >
                            {item.label}
                            {isActive(item.path) && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 w-full h-1 bg-neon-cyan rounded-full shadow-neon"
                                ></motion.span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-md border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-colors uppercase flex items-center gap-2"
                    >
                        <span className={clsx(language === 'tr' ? "text-neon-blue" : "text-slate-400")}>TR</span>
                        <span className="text-slate-300">|</span>
                        <span className={clsx(language === 'en' ? "text-neon-blue" : "text-slate-400")}>EN</span>
                    </button>
                    <a
                        href="mailto:yusuf-k.kaya-2000@hotmail.com"
                        className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                    >
                        {t.contactMe}
                    </a>
                </div>

                {/* Mobile Language Toggle Only */}
                <div className="md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="w-14 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:bg-slate-50 transition-colors uppercase gap-1 px-2"
                    >
                        <span className={clsx(language === 'tr' ? "text-neon-blue" : "text-slate-400")}>TR</span>
                        <span className="text-slate-200">/</span>
                        <span className={clsx(language === 'en' ? "text-neon-blue" : "text-slate-400")}>EN</span>
                    </button>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl z-50 flex justify-around items-center h-16 px-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="flex flex-col items-center justify-center w-full h-full relative"
                    >
                        <div className={twMerge(
                            "p-2 rounded-xl transition-all duration-300 relative",
                            isActive(item.path) ? "bg-neon-blue/10 text-neon-blue -translate-y-2" : "text-slate-400"
                        )}>
                            <item.icon size={24} className={isActive(item.path) ? "drop-shadow-sm" : ""} />
                            {!isActive(item.path) && <span className="sr-only">{item.label}</span>}
                        </div>
                        {isActive(item.path) && (
                            <span className="absolute bottom-1 text-[10px] font-bold text-neon-blue">
                                {item.label}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            {/* Main Content Area */}
            <main className="pt-24 md:pt-24 px-4 md:px-12 max-w-7xl mx-auto relative text-slate-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname + language}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>

                <footer className="mt-12 md:mt-20 pb-12 text-center border-t border-slate-100 pt-12">
                    <div className="flex justify-center space-x-6 mb-8">
                        <a
                            href="https://wa.me/905077140551"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all group"
                            title="WhatsApp"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/yusufk.kaya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-all"
                            title="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href={cvData[language].personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className="space-y-1">
                        <p className="text-slate-500 font-bold tracking-wider">© {new Date().getFullYear()} YUSUF KIZILKAYA</p>
                        <p className="opacity-50 text-[10px] uppercase font-bold tracking-widest">{t.footerTitle} | v2.0</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-50 inline-block px-8">
                        <a
                            href="https://www.professortech.com.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold text-slate-400 hover:text-neon-blue transition-colors tracking-widest uppercase"
                        >
                            Design By <span className="text-slate-900 border-b border-neon-blue/20">ProfessorTech</span>
                        </a>
                    </div>
                </footer>
            </main>

        </div>
    );
};

export default Layout;
