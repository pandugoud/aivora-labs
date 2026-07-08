const stats = [
  ["250+", "Projects"],
  ["50+", "AI Engineers"],
  ["99%", "Client Satisfaction"],
  ["15+", "Countries"],
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map(([number, label]) => (
            <div
              key={label}
              className="glass rounded-2xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold gradient">
                {number}
              </h3>

              <p className="mt-3 text-slate-400">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}