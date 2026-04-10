"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import {
  Cloud,
  Wrench,
  Blocks,
  GitBranch,
  Cpu,
} from "lucide-react";
import { FlutterIcon } from "@/components/ui/icons";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FlutterIcon,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Dart",
      "Flutter",
      "Android Native",
      "Java",
      "Kotlin",
      "Python",
      "PHP",
      "Node.js",
      "JavaScript",
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    skills: [
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "AWS Amplify",
      "Dart Server Pod",
      "Push Notifications",
      "Analytics",
      "Dynamic Links",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Xcode",
      "Android Studio",
      "VS Code",
      "Postman",
      "GitHub",
      "GitLab",
    ],
  },
  {
    title: "CI/CD & Ops",
    icon: GitBranch,
    color: "from-pink-500 to-rose-500",
    skills: [
      "GitHub Actions",
      "Jenkins",
      "Firebase Distribution",
      "Codemagic",
    ],
  },
  {
    title: "SDKs & Libraries",
    icon: Blocks,
    color: "from-amber-500 to-orange-500",
    skills: [
      "Stripe",
      "Apple Pay",
      "Google Pay",
      "Google Maps",
      "Leaflet Maps",
      "MapBox",
      "WebRTC",
      "Agora",
      "Socket.IO",
      "MQTT",
      "VOIP",
      "Riverpod",
      "Bloc",
      "GetX",
      "Provider",
      "Hive",
      "SQLite",
    ],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    skills: [
      "TensorFlow Lite",
      "ML Kit",
      "AI Avatar Generator",
      "ChatGPT Integration",
      "On-Device AI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit refined over 5+ years of building
              production-grade mobile applications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="glass rounded-xl p-6 h-full hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
