"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ExternalLink, Star, Download } from "lucide-react";
import { PlayStoreIcon, AppStoreIcon } from "@/components/ui/icons";

const projects = [
  {
    title: "AI Photo Editor",
    description:
      "A powerful AI-driven photo editing app with gallery management, lyrical video creation, and status maker. Leverages on-device AI for intelligent photo enhancements and creative editing tools.",
    tech: ["Flutter", "Dart", "TensorFlow Lite", "FFmpeg", "Image Processing", "AdMob"],
    impact: "Millions of downloads",
    category: "AI / Creative",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.gallery.easy.photo.editor.album.lyrical.video.status.maker",
    },
  },
  {
    title: "Wallpapers App",
    description:
      "HD wallpapers application powered by AI, delivering stunning, high-quality wallpapers with intelligent categorization and personalized recommendations.",
    tech: ["Flutter", "AI Generation", "Firebase", "AdMob", "REST APIs"],
    impact: "High user engagement",
    category: "AI / Lifestyle",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.ai.wallpaper.hd.cool.wallpapers",
    },
  },
  {
    title: "Adicto: AI Art Generator",
    description:
      "An innovative AI art generator that transforms text prompts and ideas into stunning visual artwork. Available on both iOS and Android platforms with advanced AI models.",
    tech: ["Flutter", "AI/ML", "Stable Diffusion", "Firebase", "In-App Purchases"],
    impact: "Cross-platform AI app",
    category: "AI / Creative",
    links: {
      appStore:
        "https://apps.apple.com/us/app/adicto-ai-art-generator/id6475164911",
      playStore:
        "https://play.google.com/store/apps/details?id=com.adicto.ai.art.imagegenerator.app",
    },
  },
  {
    title: "AI Background Remover",
    description:
      "Intelligent background removal tool using on-device AI processing. Provides precise cutouts with real-time preview and multiple background replacement options.",
    tech: ["Flutter", "ML Kit", "Image Processing", "On-Device AI", "AdMob"],
    impact: "Popular utility app",
    category: "AI / Utility",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.bg.remove.photo.editor.background.eraser",
    },
  },
  {
    title: "Deals Finder",
    description:
      "Coupons and deals discovery platform that helps users find the best deals and discounts. Features real-time deal aggregation and personalized notifications.",
    tech: ["Flutter", "Firebase", "REST APIs", "Push Notifications", "Google Pay"],
    impact: "Cross-platform",
    category: "E-Commerce",
    links: {
      appStore:
        "https://apps.apple.com/us/app/coupons-deals-dealsfinders/id1494800176",
      playStore:
        "https://play.google.com/store/apps/details?id=com.dealsfinders.app",
    },
  },
  {
    title: "Internet Banking Suite",
    description:
      "Comprehensive internet banking application handling transactions, beneficiary management, account statements, and secure money transfers. Deployed across Pakistan, Syria, and Bahrain.",
    tech: ["Flutter", "Java", "Encryption", "Secure Storage", "Dio", "WebSockets"],
    impact: "Multi-country deployment",
    category: "Fintech",
    links: {},
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of apps that have reached millions of users and generated
              significant revenue
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:border-indigo-500/30 transition-all group">
                {/* Project header */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-400 font-medium">
                      {project.impact}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project links */}
                {(project.links.playStore || project.links.appStore) && (
                  <div className="px-6 py-4 border-t border-white/5 flex gap-3">
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        <PlayStoreIcon className="w-4 h-4" />
                        Play Store
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.links.appStore && (
                      <a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <AppStoreIcon className="w-4 h-4" />
                        App Store
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
