"use client";

import { Mail, Heart } from "lucide-react";
import { FlutterIcon } from "@/components/ui/icons";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <FlutterIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-sm">
              Sadaqat Hussain
            </span>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using Next.js & Flutter expertise
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sadaqathunzai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sadaqathunzai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:sadaqathunzai@gmail.com"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
