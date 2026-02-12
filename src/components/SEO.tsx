import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
    const { language } = useLanguage();

    const siteTitle = "Yusuf Kızılkaya | İnşaat Mühendisi - Civil Engineer";
    const defaultDescription = language === 'tr'
        ? "Yusuf Kızılkaya'nın profesyonel CV ve portfölü. İnşaat Mühendisi, saha tecrübesi, yapı denetim ve proje yönetimi."
        : "Yusuf Kızılkaya's professional CV and portfolio. Civil Engineer with field experience, building inspection, and project management.";

    const defaultKeywords = "Yusuf Kızılkaya, İnşaat Mühendisi, Civil Engineer, CV, Portfolyo, Yapı Denetim, Saha Mühendisi, Proje Yönetimi";
    const siteUrl = "https://yusufkizilkaya.com"; // Adjust if user provides actual domain
    const defaultImage = "/og-image.png"; // Placeholder for OG image

    const seo = {
        title: title ? `${title} | Yusuf Kızılkaya` : siteTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${url || ''}`,
    };

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <html lang={language} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* Canonical Link */}
            <link rel="canonical" href={seo.url} />
        </Helmet>
    );
};

export default SEO;
