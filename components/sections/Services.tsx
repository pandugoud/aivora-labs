import {
  Bot,
  Brain,
  Code2,
  Cpu,
  Database,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Generative AI",
    desc: "Enterprise LLM solutions powered by modern AI."
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous AI assistants for business automation."
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, scalable web applications using Next.js."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    desc: "Custom ML models for prediction and analytics."
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Modern data pipelines and AI-ready infrastructure."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Deploy securely on AWS, Azure and Google Cloud."
  },
];

export default function Services() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          AI Services
        </h2>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">
          We deliver intelligent software solutions that help
          businesses automate, innovate and scale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <item.icon
                className="text-cyan-400"
                size={42}
              />

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}