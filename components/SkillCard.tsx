import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div
      className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {skill.name}
        </h3>
      </div>
    </div>
  );
}
