export default function Trusted() {
  const companies = [
    "Microsoft",
    "OpenAI",
    "Google Cloud",
    "AWS",
    "Meta",
    "NVIDIA",
  ];

  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 uppercase tracking-widest mb-8">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="glass rounded-xl py-5 text-center text-slate-300 font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}