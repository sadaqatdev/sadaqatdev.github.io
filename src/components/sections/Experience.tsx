"use client";

import { FadeIn } from "@/components/ui/motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Hayaland Inc / AutoVoB",
    location: "Tokyo, Japan / Dubai, UAE (Remote)",
    role: "Senior Flutter Developer",
    period: "Feb 2025 - Present",
    highlights: [
      "Maintain and develop AutoVoB buying and selling platform",
      "Develop Nexus Management System, List Automation System, Orders Collection Management",
    ],
  },
  {
    company: "JMM Innovations",
    location: "Riyadh, Saudi Arabia (Remote)",
    role: "Senior Flutter Developer",
    period: "Jun 2022 - 2025",
    highlights: [
      "Reduced crash rate by 30% through refactoring MLKit document scanner code base",
      "Developed reusable architectural components — engineered shared code, packages, and plugins across multiple applications",
      "Improved 31% app performance by optimizing Google Maps rendering for CargoGuard App",
      "Ensured offline and online functionality, catering to diverse user needs",
      "Secure storage, Dio, Encryption, Decryption, Internet banking, Responsive Design, Integration test, Unit test, websockets",
    ],
  },
  {
    company: "Micro Finance Software and Systems (MFSYS)",
    location: "Islamabad, Pakistan",
    role: "Senior Software Engineer Flutter",
    period: "Jun 2022 - Present",
    highlights: [
      "Built a flexible Android app for CRM, loans, deposits, and transactions with dynamic UI via custom portal",
      "Created comprehensive Internet banking app handling transactions, statements, and beneficiary management",
      "Streamlined bank operations across Pakistan, Syria, and Bahrain",
      "Built user-friendly and reliable applications using Flutter and Java for Android and iOS",
    ],
  },
  {
    company: "Raccoon Tech",
    location: "Islamabad, Pakistan",
    role: "Senior Flutter Developer",
    period: "Feb 2020 - Jun 2022",
    highlights: [
      "Developed innovative AI-based tools for image/photo editing, voice changing, and music applications",
      "Delivered high-quality polished apps to over millions of users",
      "Generated millions in revenue by integrating AdMob and Facebook Ads",
      "Specialized in on-device AI integration, enhancing app performance and user experience",
      "Implemented in-app subscriptions, boosting monetization and user retention",
    ],
  },
  {
    company: "SoftLinks FZCO",
    location: "Dubai, UAE (Remote)",
    role: "Flutter Developer",
    period: "Sep 2019 - Jan 2020",
    highlights: [
      "Led the development team, overseeing the entire development process and managing code merging",
      "Developed Ajwae Social Media Platform using MVVM clean architecture and Socket.IO",
      "Created Twaweza Delivery App, integrating UAE smart card reader, printing SDK, and QR code scanning",
      "Generated millions in revenue by integrating AdMob and Facebook Ads",
      "Integrated ChatGPT chatbot in the Happiness Club App",
    ],
  },
  {
    company: "Dot Asture",
    location: "Pakistan",
    role: "Android Developer",
    period: "Mar 2018 - Aug 2019",
    highlights: [
      "Led the team through development, building delivery apps and new Android applications using Java",
      "MVVM, Retrofit, Glide, Unit/Integration test",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A track record of delivering impactful mobile solutions across global companies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.company + exp.period} delay={index * 0.1}>
                <div className="relative pl-8 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

                  <div className="glass rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-indigo-400 font-medium mt-0.5">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm shrink-0">
                        <span className="flex items-center gap-1.5 text-gray-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
