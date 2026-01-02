
import React from 'react';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';

const SEO: React.FC = () => {
  // Map our categories to section names
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  
  const menuSections = categories.map(cat => ({
    "@type": "MenuSection",
    "name": cat.charAt(0).toUpperCase() + cat.slice(1) + 's',
    "hasMenuItem": MENU_ITEMS.filter(item => item.category === cat).map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description,
      "offers": {
        "@type": "Offer",
        "price": item.price.replace('£', ''),
        "priceCurrency": "GBP"
      },
      "image": item.image
    }))
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": BUSINESS_INFO.name,
    "description": "Wembley's ultimate destination for premium 100% Aberdeen Angus beef burgers and charcoal-grilled kebabs.",
    "image": "https://picsum.photos/seed/burger-hero/1200/630",
    "@id": "https://angusburger.wembley",
    "url": "https://angusburger.wembley",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "££",
    "servesCuisine": ["Burgers", "Kebabs", "Middle Eastern", "Fast Food"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "115 Wembley Park Drive",
      "addressLocality": "Wembley",
      "addressRegion": "London",
      "postalCode": "HA9 8HG",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5583, 
      "longitude": -0.2858
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "12:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "12:00",
        "closes": "02:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "12:00",
        "closes": "00:00"
      }
    ],
    "menu": {
      "@type": "Menu",
      "name": "Angus Burger Main Menu",
      "hasMenuSection": menuSections
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.restaurantlogin.com/api/fb/gp_jye",
        "inLanguage": "en-GB",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeDirectOutbound"],
      "priceSpecification": {
        "@type": "DeliveryChargeSpecification",
        "appliesToDeliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeDirectOutbound",
        "price": 2.50,
        "priceCurrency": "GBP"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;
