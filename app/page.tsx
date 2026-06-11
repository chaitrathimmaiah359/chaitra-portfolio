export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        Chaitra Thimmaiah
      </h1>

      <p className="text-2xl mb-2">
        Quality Engineering Lead
      </p>

      <p className="text-lg mb-8 text-center">
        AI Solutions | Data Quality | Cloud Automation
      </p>

      <div className="flex gap-4">
        <button className="border rounded px-4 py-2">
          Resume
        </button>

        <button className="border rounded px-4 py-2">
          Projects
        </button>

        <button className="border rounded px-4 py-2">
          Blog
        </button>
      </div>
    </main>
  );
}