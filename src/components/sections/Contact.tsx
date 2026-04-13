"use client";

import { useState, type FormEvent, type ComponentType } from "react";
import { FadeIn } from "@/components/ui/motion";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons";

interface ContactItem {
  icon: ComponentType<{ className?: string }>;
  secondaryIcon?: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  copyValue: string;
  href: string;
  openInNewTab?: boolean;
}

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "sadaqathunzai@gmail.com",
    copyValue: "sadaqathunzai@gmail.com",
    href: "mailto:sadaqathunzai@gmail.com",
  },
  {
    icon: Phone,
    secondaryIcon: WhatsAppIcon,
    label: "Phone / WhatsApp",
    value: "+92 349 530 4657",
    copyValue: "+923495304657",
    href: "https://wa.me/923495304657",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 314 571 2536",
    copyValue: "+923145712536",
    href: "tel:+923145712536",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/sadaqatdev",
    copyValue: "https://github.com/sadaqatdev",
    href: "https://github.com/sadaqatdev",
    openInNewTab: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    copyValue: "https://www.linkedin.com/in/sadaqat-h-264b3018a/",
    href: "https://www.linkedin.com/in/sadaqat-h-264b3018a/",
    openInNewTab: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan (Open to Remote)",
    copyValue: "Pakistan (Open to Remote)",
    href: "#",
  },
];

function ContactInfoItem({ item, index }: { item: ContactItem; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (item.openInNewTab) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(item.copyValue).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      key={index}
      onClick={handleClick}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group w-full text-left cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors shrink-0">
        <item.icon className="w-5 h-5 text-indigo-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 flex items-center gap-1.5">
          {item.label}
          {item.secondaryIcon && (
            <item.secondaryIcon className="w-3.5 h-3.5 text-emerald-400" />
          )}
        </div>
        <div className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
          {item.value}
        </div>
      </div>
      <div className="shrink-0">
        {item.openInNewTab ? (
          <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
        ) : copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
        )}
      </div>
    </button>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sadaqathunzai@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let&apos;s build something amazing together. Whether you have a project
              in mind or just want to chat, I&apos;d love to hear from you.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              {contactInfo.map((item, i) => (
                <ContactInfoItem key={i} item={item} index={i} />
              ))}
              <p className="text-xs text-gray-600 pt-2 pl-3">
                Click any item to copy
              </p>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 transition-colors text-sm"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/25 transition-colors text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-emerald-600 text-white font-medium transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
