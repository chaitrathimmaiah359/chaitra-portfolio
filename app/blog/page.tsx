export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-8">
        TechBytes by Chaitra
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Welcome to my Tech Blog.

        <br /><br />

        This space captures my learnings, experiments, product solutions,
        engineering optimizations, and technology explorations developed
        throughout my career.

        <br /><br />

        Here, I share practical approaches to solving real business problems
        through automation, AI, cloud technologies, data engineering,
        quality engineering, and platform modernization.

        <br /><br />

        My goal is to demonstrate how technology can be leveraged to reduce
        operational waste, improve engineering efficiency, optimize workflows,
        and create scalable solutions for future business challenges.

        <br /><br />

        Many of these articles are inspired by real-world projects,
        proof-of-concepts, and prototypes that explore future opportunities
        in AI, data platforms, sustainability, and intelligent automation.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Featured Articles
      </h2>

      <div className="space-y-6">

        <div className="border rounded-xl p-6 hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-2">
            Test Docker Locally & Reduce Cloud Waste
          </h3>

          <p className="text-gray-600 mb-4">
            Learn how local Docker testing can reduce unnecessary cloud
            resource consumption, lower infrastructure costs, accelerate
            debugging, and improve engineering efficiency.
          </p>

          <a
            href="https://techblog0374.wordpress.com/2026/03/31/test-docker-locally-reduce-cloud-waste/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read Article →
          </a>

        </div>

      </div>

    </main>
  );
}