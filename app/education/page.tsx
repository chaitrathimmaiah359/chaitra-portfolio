export default function Education() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Education & Certifications
      </h1>

      {/* EDUCATION */}

      <section className="mb-12">
        <div className="border p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">
            Bachelor of Engineering (B.E.)
          </h2>

          <p>
            Electrical and Electronics Engineering
          </p>

          <p className="mt-2">
            Dayananda Sagar College of Engineering
          </p>

          <p className="text-gray-600 mt-2">
            Bengaluru, Karnataka, India
          </p>

          <p className="text-gray-600">
            Year of Graduation: 2011 - 2015
          </p>

          <p className="mt-4">
            Website:{" "}
            <a
              href="https://www.dsce.edu.in/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dsce.edu.in
            </a>
          </p>
        </div>
      </section>

      {/* DOMAIN EXPERTISE */}

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Domain Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border rounded-xl p-4">
            Marketing Technology & Advertising Platforms
          </div>

          <div className="border rounded-xl p-4">
            Data Quality & Data Governance
          </div>

          <div className="border rounded-xl p-4">
            Artificial Intelligence & Automation Engineering
          </div>

          <div className="border rounded-xl p-4">
            Cloud Engineering & DevOps Practices
          </div>

          <div className="border rounded-xl p-4">
            Thermotechnology & Energy Management
          </div>

          <div className="border rounded-xl p-4">
            Solar & Renewable Energy Solutions
          </div>

          <div className="border rounded-xl p-4">
            Embedded Systems & IoT Technologies
          </div>

          <div className="border rounded-xl p-4">
            Product Quality & Engineering Excellence
          </div>

          <div className="border rounded-xl p-4">
            Customer-Focused Product Engineering
          </div>

          <div className="border rounded-xl p-4">
            Data Analytics & Business Intelligence
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS & CONTINUOUS LEARNING */}

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Certifications & Continuous Learning
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-5">
            Microsoft Copilot & AI Productivity Programs
          </div>

          <div className="border rounded-xl p-5">
            Generative AI & Prompt Engineering
          </div>

          <div className="border rounded-xl p-5">
            Agentic AI & Multi-Agent Systems Research
          </div>

          <div className="border rounded-xl p-5">
            Mabl Test Automation Platform
          </div>

          <div className="border rounded-xl p-5">
            DBT Fundamentals & Data Transformation
          </div>

          <div className="border rounded-xl p-5">
            AWS Cloud & Infrastructure Learning
          </div>

          <div className="border rounded-xl p-5">
            Docker & Containerization
          </div>

          <div className="border rounded-xl p-5">
            Data Quality & Data Governance Practices
          </div>

          <div className="border rounded-xl p-5">
            Continuous Learning in AI, Cloud, Data Engineering,
            Product Engineering, and Emerging Technologies
          </div>

        </div>
      </section>

    </main>
  );
}