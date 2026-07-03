import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <Image
          src="/images/profile.jpg"
          alt="Chaitra Thimmaiah"
          width={180}
          height={180}
          className="rounded-full shadow-lg mb-6"
        />

        <h1 className="text-5xl font-bold mb-4">
          Chaitra Thimmaiah
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          AI & Data Automation Lead | AI Solutions | Product Engineering
        </p>

        <p className="text-xl text-gray-800 mb-4">
          I transform business bottlenecks into AI powered engineering solutions and deploy products in production
        </p>

      </section>

      {/* CONTACT */}
<section className="py-16 px-6 border-t">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-4">
      Let's Connect
    </h2>

    <p className="text-gray-600 mb-8">
      Open to AI Solutions Engineering, Customer Engineering,
      Product Engineering, Data Quality Leadership, and AI Consulting opportunities.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="mailto:t.chaitra3@gmail.com"
        className="px-6 py-3 border rounded-lg hover:shadow-lg transition"
      >
        📧 Email Me
      </a>

      <a
        href="https://linkedin.com/in/chaitra-thimmaiah-2666b5218"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border rounded-lg hover:shadow-lg transition"
      >
        💼 LinkedIn
      </a>

      <a
        href="https://github.com/chaitrathimmaiah359"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border rounded-lg hover:shadow-lg transition"
      >
        💻 GitHub
      </a>

      <a
        href="/resume/ChaitraThimmaiah_AI_Lead.pdf"
        download
        className="px-6 py-3 border rounded-lg hover:shadow-lg transition"
      >
      📄 Download Resume
      </a>

    </div>

  </div>
</section>

    {/* QUICK STATS */}
<section className="max-w-5xl mx-auto px-6 pb-16">
  <div className="grid md:grid-cols-4 gap-4">

    <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
      <h3 className="text-3xl font-bold">10+</h3>
      <p className="text-gray-600">Years Experience</p>
    </div>

    <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
      <h3 className="text-3xl font-bold">AI</h3>
      <p className="text-gray-600">Solutions & Agents</p>
    </div>

    <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
      <h3 className="text-3xl font-bold">20+</h3>
      <p className="text-gray-600">Projects Delivered</p>
    </div>

    <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
      <h3 className="text-3xl font-bold">Global</h3>
      <p className="text-gray-600">Customer Impact</p>
    </div>

  </div>
</section>

    </main>
  );
  
}