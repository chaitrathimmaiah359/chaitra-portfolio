export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Projects & Prototypes
      </h1>

      <p className="text-gray-700 mb-8">
        Welcome to my Projects & Prototypes section.
        Here I showcase engineering solutions, automation initiatives,
        AI prototypes, and product innovations that solve real business problems.
      </p>

      <div className="border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          AI Recruitment Assessment Agent
        </h2>

        <p className="text-gray-600 mb-4">
          AI-powered recruitment assistant capable of resume evaluation,
          candidate scoring, interview preparation, and hiring insights.
        </p>

        <a
          href="https://github.com/chaitrathimmaiah359"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub →
        </a>
      </div>

    </main>
  );
}