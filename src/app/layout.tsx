import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sadaqathussain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sadaqat Hussain | Senior Flutter Developer - 5M+ Downloads",
    template: "%s | Sadaqat Hussain",
  },
  description:
    "Senior Flutter Developer with 5+ years building high-performance mobile apps. 5M+ downloads, millions in revenue. Specializing in AI-powered apps, fintech solutions, and Web3 integrations. Available for hire.",
  keywords: [
    "Sadaqat Hussain",
    "Flutter Developer",
    "Senior Mobile Developer",
    "Flutter Specialist",
    "Dart Developer",
    "Mobile App Developer",
    "AI Mobile Apps",
    "Fintech Developer",
    "Web3 Mobile Developer",
    "Android Developer",
    "iOS Developer",
    "Cross Platform Developer",
    "Firebase Developer",
    "Flutter Freelancer",
    "Hire Flutter Developer",
    "Pakistan Flutter Developer",
    "Remote Mobile Developer",
  ],
  authors: [{ name: "Sadaqat Hussain", url: siteUrl }],
  creator: "Sadaqat Hussain",
  publisher: "Sadaqat Hussain",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sadaqat Hussain | Senior Flutter Developer - 5M+ Downloads",
    description:
      "Building scalable AI-powered mobile applications with 5M+ downloads and millions in revenue. Flutter, Dart, AI, Fintech & Web3 specialist. Available for hire.",
    url: siteUrl,
    siteName: "Sadaqat Hussain - Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sadaqat Hussain - Senior Flutter Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadaqat Hussain | Senior Flutter Developer",
    description:
      "5M+ downloads. Millions in revenue. Building AI-powered, fintech & Web3 mobile apps with Flutter.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sadaqat Hussain",
  url: siteUrl,
  jobTitle: "Senior Mobile Developer",
  description:
    "Senior Flutter Developer with 5+ years of experience. 5M+ app downloads. Specialist in AI-powered apps, fintech solutions, and Web3 integrations.",
  email: "sadaqathunzai@gmail.com",
  telephone: "+923495304657",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/sadaqathunzai",
    "https://linkedin.com/in/sadaqathunzai",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Karakoram International University",
  },
  knowsAbout: [
    "Flutter",
    "Dart",
    "Mobile App Development",
    "AI Integration",
    "Fintech",
    "Web3",
    "Firebase",
    "Android",
    "iOS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
