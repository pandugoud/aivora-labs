export default function WhyChooseUs() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Why Choose AIVORA LABS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              AI Experts
            </h3>

            <p className="mt-4 text-slate-400">
              Experienced engineers building enterprise AI systems.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-4 text-slate-400">
              Agile development with rapid iterations.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Secure & Scalable
            </h3>

            <p className="mt-4 text-slate-400">
              Cloud-native architecture designed for growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}