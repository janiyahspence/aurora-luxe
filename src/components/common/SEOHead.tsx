import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Aurora Luxe - Luxury Resort & Spa | 5-Star Hotel in Goa, India',
  description = 'Experience unparalleled luxury at Aurora Luxe, a 5-star resort in Goa. Premium suites, fine dining, spa wellness, and exclusive experiences await.',
  keywords = 'luxury resort, 5-star hotel, Goa, India, spa, wellness, fine dining, beach resort, luxury accommodation',
  image = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  url = 'https://auroraluxe.com',
  type = 'website'
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Aurora Luxe Resort');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Aurora Luxe Resort', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional SEO tags
    updateMetaTag('theme-color', '#D4AF37');
    updateMetaTag('msapplication-TileColor', '#D4AF37');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Resort",
      "name": "Aurora Luxe Resort & Spa",
      "description": description,
      "image": image,
      "url": url,
      "telephone": "+91-98765-43210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Candolim Beach Road",
        "addressLocality": "North Goa",
        "addressRegion": "Goa",
        "postalCode": "403515",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "15.5167",
        "longitude": "73.7667"
      },
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Spa"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Beach Access"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pool"
        }
      ],
      "priceRange": "₹₹₹₹₹"
    };
    
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;