export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">
        AI Autonomus Agents, Agentic AI, N8N workflows
      </h1>

      <p className="text-gray-700 mb-10">
        A collection of enterprise AI agents, automation workflows, and AI-powered
        engineering solutions built to improve productivity, data quality, software
        delivery, and business operations.
      </p>

      {/* ===================== ROVO AGENTS ===================== */}

      <div className="border rounded-xl p-6 mb-8 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-semibold mb-4">
          Atlassian Rovo AI Agents (Autonomous Agents)
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="font-semibold text-lg">
              Jira Project Audit Agent
            </h3>
            <p className="text-gray-600">
              Reviews Jira projects for missing story points, acceptance criteria,
              workflow violations, stale tickets, and sprint risks while providing
              actionable recommendations to engineering teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Sprint Health Analyzer
            </h3>
            <p className="text-gray-600">
              Evaluates sprint progress, blocked stories, team workload,
              completion trends, and overall sprint health to support engineering
              managers and Scrum Masters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Production Bug Tracker Agent
            </h3>
            <p className="text-gray-600">
              Tracks production incidents, prioritizes critical defects,
              summarizes recurring issues, and helps engineering teams
              accelerate root cause analysis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Release Readiness Agent
            </h3>
            <p className="text-gray-600">
              Verifies release checklists, open defects, deployment readiness,
              testing completion, and overall release quality before production.
            </p>
          </div>

        </div>
      </div>

      {/* ===================== SECODA ===================== */}

      <div className="border rounded-xl p-6 mb-8 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-semibold mb-4">
          Secoda AI Agents (Autonomous Agents)
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="font-semibold text-lg">
              Missing Metadata & Preview Checker
            </h3>
            <p className="text-gray-600">
              Identifies datasets with incomplete metadata, missing previews,
              and undocumented assets to improve data discoverability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Data Lineage Validation Agent
            </h3>
            <p className="text-gray-600">
              Validates lineage relationships across enterprise data pipelines
              to ensure traceability from source systems to reporting layers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Documentation & Spell Check Agent
            </h3>
            <p className="text-gray-600">
              Reviews data catalog documentation for spelling, formatting,
              consistency, and completeness to improve data governance.
            </p>
          </div>

        </div>
      </div>

      {/* ===================== N8N ===================== */}

      <div className="border rounded-xl p-6 mb-8 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-semibold mb-4">
          n8n Intelligent Workflows
        </h2>

        <div className="space-y-6">

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Customer Feedback Analysis Workflow
              </h3>

              <a
                href="https://github.com/chaitrathimmaiah359/n8n-customer_product_feedback_classification_workflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub →
              </a>
            </div>

            <p className="text-gray-600">
              Collects customer feedback, performs sentiment analysis using AI,
              categorizes responses, and generates actionable business insights.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Gmail Processing & auto save in G-drive workflow (prototype)
              </h3>

              <a
                href="https://github.com/chaitrathimmaiah359/n8n-gmail-investment-doc-organizer-workflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub →
              </a>
            </div>

            <p className="text-gray-600">
              Reads gmail messages and saves investment reports/attachments to Google Drive
              AI summarization, and structured data storage using n8n workflows.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Summarize Newsletter & Send to Gmail Workflow (prototype)
              </h3>

              <a
                href="https://github.com/chaitrathimmaiah359/n8n-workflow-newsletter-to-gmail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub →
              </a>
            </div>

            <p className="text-gray-600">
             An n8n workflow that automatically generates AI-summary of tech newsletter and sends it to Gmail, streamlining email communication and content distribution.
            </p>
          </div>

        </div>
      </div>

      {/* ===================== AI SOLUTIONS ===================== */}

      <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-semibold mb-4">
          Agentic AI
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="font-semibold text-lg">
              AWS Log Analysis Agent
            </h3>
            <p className="text-gray-600">
              Analyzes CloudWatch logs, detects anomalies,
              summarizes failures, and recommends corrective actions.
            </p>
            <a
                href="https://github.com/chaitrathimmaiah359/aws_log_analyser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub →
              </a>
          </div>

        </div>
      </div>

    </main>
  );
}