import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact | AIVORA LABS",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 min-h-screen">

        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>

              <h1 className="text-6xl font-bold leading-tight">
                Let's Build{" "}
                <span className="gradient">
                  AI Together
                </span>
              </h1>

              <p className="mt-8 text-xl text-slate-400">
                Ready to build AI software, AI Agents,
                Chatbots or Automation?

                Contact our engineering team today.
              </p>

              <div className="mt-12 space-y-6">

                <div className="glass p-6 rounded-2xl">

                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-slate-400 mt-2">
                    hello@aivoralabs.com
                  </p>

                </div>

                <div className="glass p-6 rounded-2xl">

                  <h3 className="font-bold text-xl">
                    Office
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Hyderabad, India
                  </p>

                </div>

                <div className="glass p-6 rounded-2xl">

                  <h3 className="font-bold text-xl">
                    Availability
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Monday - Saturday
                  </p>

                </div>

              </div>

            </div>

            <ContactForm />

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}