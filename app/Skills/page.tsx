export default function Skills() {
  const skillGroups = [
    {
      title: "Programming & Automation",
      skills: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Selenium",
        "Playwright",
        "Pytest",
        "API Automation",
        "Test Automation Frameworks",
        "Load Testing",
        "Performance Testing",
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "OpenAI",
        "Agentic AI",
        "Multimodal AI",
        "Prompt Engineering",
        "GitHub Copilot",
        "Mabl AI",
        "AI Evaluation",
        "LLM Applications",
        "AI Adoption Strategy",
        "AI Prototyping",
      ],
    },
    {
      title: "Data Engineering & Data Quality",
      skills: [
        "DBT",
        "Data Quality",
        "Data Governance",
        "Data Mesh",
        "Data Lake",
        "Soda Core",
        "Great Expectations (GX)",
        "Metadata Management",
        "Data Validation",
        "Marketing Analytics",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
        "Cloud Architecture",
        "Environment Management",
        "Infrastructure Testing",
      ],
    },
    {
      title: "Workflow Orchestration",
      skills: [
        "Apache Airflow",
        "Workflow Automation",
        "Pipeline Orchestration",
        "ETL Workflows",
        "Data Pipeline Monitoring",
      ],
    },
    {
      title: "Dashboards & Analytics",
      skills: [
        "Power BI",
        "Executive Dashboards",
        "Reporting",
        "Sprint Analytics",
        "KPI Monitoring",
        "Campaign Analytics",
        "Business Intelligence",
      ],
    },
    {
      title: "Engineering Metrics",
      skills: [
        "DORA Metrics",
        "Quality Metrics",
        "Test Audit Reporting",
        "Release Metrics",
        "Performance Analysis",
        "Operational Excellence",
      ],
    },
    {
      title: "Product & Business",
      skills: [
        "Product Management",
        "Stakeholder Management",
        "Requirements Analysis",
        "Campaign Management",
        "Audience Building",
        "KPI Design",
        "Marketing Technology",
        "Customer Success",
      ],
    },
    {
      title: "Leadership & Collaboration",
      skills: [
        "Team Leadership",
        "Mentoring",
        "Technical Training",
        "Recruitment",
        "Interviewing",
        "Cross-functional Collaboration",
        "Agile",
        "Scrum",
      ],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>

      <p className="text-gray-600 mb-10">
        Technologies, platforms, frameworks, and leadership skills acquired
        across Product Engineering, Quality Engineering, Data Platforms, Cloud,
        and Artificial Intelligence.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border rounded-xl p-6 hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold mb-4">
              {group.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}