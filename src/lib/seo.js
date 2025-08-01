export const siteConfig = {
  name: "Aggarwal Publicity & Marketing Pvt. Ltd.",
  description: "Leading Importer, Exporter, Distributors and Wholesaler of Industrial Chemical Products since 1994. Specializing in Paraformaldehyde, Phthalic Anhydride, and premium industrial chemicals.",
  url: "https://aggarwalpublicity.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "industrial chemicals",
    "chemical distributor",
    "paraformaldehyde",
    "phthalic anhydride",
    "chemical importer",
    "chemical exporter",
    "Delhi chemicals",
    "industrial chemical supplier"
  ],
  author: "Aggarwal Publicity & Marketing Pvt. Ltd.",
  creator: "Anil Aggarwal",
  publisher: "Aggarwal Publicity & Marketing Pvt. Ltd.",
  contact: {
    phone: "+91 98101 52290",
    email: "aggarwalpublicity@gmail.com",
    address: "8145/2, Street No: 7, Near Hotel White House, Multani Dhanda, Paharganj, New Delhi-110055"
  }
};

export function generateMetadata(page = {}) {
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    canonical,
    noindex = false
  } = page;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: canonical || siteConfig.url,
    },
  };
}
