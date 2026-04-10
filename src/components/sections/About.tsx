"use client";

import { FadeIn } from "@/components/ui/motion";
import {
  Smartphone,
  Brain,
  Landmark,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "AI-Powered Apps",
    description:
      "On-device AI integration with TensorFlow Lite, ML Kit, and AI avatar generators for intelligent user experiences.",
  },
  {
    icon: Landmark,
    title: "Fintech Solutions",
    description:
      "Internet banking, CRM systems, secure transactions, and payment integrations across Pakistan, Syria & Bahrain.",
  },
  {
    icon: Globe,
    title: "Web3 & Innovation",
    description:
      "Web3 integrations, real-time analytics, intelligent automation, and cutting-edge utility applications.",
  },
  {
    icon: Shield,
    title: "Security & Encryption",
    description:
      "Secure storage, Dio encryption/decryption, websockets, and robust data protection for sensitive financial data.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized Google Maps rendering by 31%, reduced crash rates by 30%, and built offline-first architectures.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description:
      "Flutter & Dart expertise delivering pixel-perfect apps on Android and iOS from a single codebase.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <FadeIn direction="left">
            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed text-lg">
                Results-driven Flutter developer with{" "}
                <span className="text-indigo-400 font-semibold">5+ years</span> of
                experience designing and developing high-performance, cross-platform
                mobile applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in <strong className="text-gray-200">fintech solutions</strong>,{" "}
                <strong className="text-gray-200">Web3 apps</strong>, and{" "}
                <strong className="text-gray-200">AI-powered</strong> mobile applications,
                integrating secure transactions, real-time analytics, and intelligent
                automation. My apps have achieved{" "}
                <span className="text-indigo-400 font-semibold">5 million downloads</span>{" "}
                and I have successfully integrated AdMob and in-app purchase features
                that have generated{" "}
                <span className="text-indigo-400 font-semibold">millions in revenue</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Passionate about building scalable, user-centric applications with a
                strong focus on security, API integration, and performance
                optimization. I strive for excellence and innovation, ensuring every
                project aligns with business objectives and user needs.
              </p>
              <div className="pt-4">
                <div className="glass rounded-xl p-4 inline-flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Education</div>
                    <div className="text-sm font-medium">
                      BS Information Technology &mdash; Karakoram International University
                    </div>
                    <div className="text-xs text-gray-500">CGPA: 3.66/4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`glass rounded-xl p-5 hover:border-indigo-500/30 transition-all group ${
                    index === 0 || index === 5 ? "sm:col-span-2" : ""
                  }`}
                >
                  <area.icon className="w-8 h-8 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1.5">{area.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
