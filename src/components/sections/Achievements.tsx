"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Download, DollarSign, Trophy, Award } from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView ? (
          <CountUp target={value} />
        ) : (
          "0"
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  const startAnimation = () => {
    if (hasRun.current || !ref.current) return;
    hasRun.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (ref.current) {
        ref.current.textContent = current.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLSpanElement | null>).current = el;
        if (el) startAnimation();
      }}
    >
      0
    </span>
  );
}

const stats = [
  {
    icon: Download,
    value: 5,
    suffix: "M+",
    label: "App Downloads",
    description: "Across all published applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    value: 2,
    suffix: "M+",
    label: "Revenue Generated",
    description: "Via AdMob & in-app purchases",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Trophy,
    value: 20,
    suffix: "+",
    label: "Apps Delivered",
    description: "Production-ready applications",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    value: 6,
    suffix: "+",
    label: "Companies Served",
    description: "Global clients across multiple countries",
    color: "from-purple-500 to-pink-500",
  },
];

const awards = [
  {
    title: "Flutter Forward Online",
    year: "2023",
    description: "Participated in Google's Flutter Forward event",
  },
  {
    title: "Winner - Flutter Karachi Quiz",
    year: "2023",
    description: "First place in Flutter Karachi online quiz competition",
  },
  {
    title: "Huawei HCIA Certification",
    year: "Skill Competition",
    description: "Participated in Huawei HCIA skill competition",
  },
  {
    title: "HEC Research Workshop",
    year: "Certificate",
    description:
      "Three-day workshop on academic research skills under Higher Education Commission Pakistan",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements & <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Measurable results that demonstrate real-world impact
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass rounded-xl p-6 text-center hover:border-indigo-500/30 transition-all group">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Awards */}
        <FadeIn>
          <h3 className="text-xl font-semibold text-center mb-8">
            Conferences, Awards & Certificates
          </h3>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((award) => (
            <StaggerItem key={award.title}>
              <div className="glass rounded-xl p-5 hover:border-indigo-500/30 transition-all h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-indigo-400">
                    {award.year}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1.5">{award.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
