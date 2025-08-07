export const siteConfig = {
  name: "Aggarwal Publicity & Marketing Pvt. Ltd.",
  description:
    "Leading Importer, Exporter, Distributor and Wholesaler of Industrial Chemical Products since 1994. Trusted specialists in Paraformaldehyde and Phthalic Anhydride.",
  url: "https://aggarwalpublicity.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "paraformaldehyde supplier",
    "phthalic anhydride distributor",
    "industrial chemical importer India",
    "chemical exporter Delhi",
    "chemical wholesaler",
    "Aggarwal Publicity chemicals",
    "industrial chemicals India",
    "chemical distribution company"
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
    title = `${siteConfig.name} | Industrial Chemicals Supplier`,
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
