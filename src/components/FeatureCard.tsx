import { Cpu, Zap, Shield } from "lucide-react";
import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="group relative transform-style-preserve-3d hover:rotateX-6 hover:-rotateY-6 transition-transform duration-700">
    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-[0_0_60px_rgba(249,115,22,0.15)]">
      <div className="text-orange-400 w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 group-hover:scale-125 transition flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-base sm:text-xl font-semibold text-center text-white">{title}</h3>
      <p className="mt-2 sm:mt-3 text-gray-400 text-xs sm:text-sm text-center">{desc}</p>
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition bg-orange-500/10 blur-xl -z-10" />
    </div>
  </div>
);
