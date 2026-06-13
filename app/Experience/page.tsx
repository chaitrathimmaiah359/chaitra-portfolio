export default function Experience() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Professional Experience
      </h1>

      {/* Career Journey */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Career Journey
        </h2>

        <div className="border rounded-xl overflow-hidden">

          <div className="grid grid-cols-2 bg-gray-100 font-semibold p-4 border-b">
            <div>Year</div>
            <div>Role</div>
          </div>

          <div className="grid grid-cols-2 p-4 border-b">
            <div>2015 – 2016</div>
            <div>Associate Product Engineer – Robert Bosch and Engineering solutions</div>
          </div>

          <div className="grid grid-cols-2 p-4 border-b">
            <div>2016 – 2018</div>
            <div>Product Software Responsible (PSR) – Robert Bosch and Engineering solutions</div>
          </div>

          <div className="grid grid-cols-2 p-4 border-b">
            <div>2018 – 2021</div>
            <div>Senior Product Engineer – Robert Bosch and Engineering solutions</div>
          </div>

          <div className="grid grid-cols-2 p-4 border-b">
            <div>2021 – 2023</div>
            <div>Senior Automation Analyst – Omnicom Media Solutions</div>
          </div>

          <div className="grid grid-cols-2 p-4 border-b">
            <div>2023 – 2025</div>
            <div>Data Automation - Subject Matter Expert – Omnicom Media Solutions</div>
          </div>

          <div className="grid grid-cols-2 p-4">
            <div>2025 – 2026</div>
            <div>Lead – AI & Data Quality – Omnicom Media Solutions</div>
          </div>

        </div>
      </section>

      {/* Omnicom */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Omnicom Media Solutions
        </h2>

        <div className="space-y-6">

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Lead – AI & Data Quality (2025 – 2026)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Drove AI adoption initiatives across engineering teams.</li>
              <li>Led implementation and adoption of GitHub Copilot and Mabl.</li>
              <li>Built Proof of Concepts for Agentic AI and multimodal AI solutions.</li>
              <li>Developed AI-powered prototypes including Data Analysis Agent, AWS Log Analysis Agent, and Recruitment Assessment Agent.</li>
              <li>Introduced Generative AI validation checks for campaign KPI monitoring and campaign management workflows.</li>
              <li>Evaluated emerging AI frameworks and engineering solutions.</li>
              <li>Mentored engineers and graduate trainees on AI adoption and automation best practices.</li>
              <li> Worked on Integrated testing at every stage of the product. API testing, UI testing,
                Smoke testing, Regression testing, Performance testing, Load testing, Security testing, and User 
                acceptance testing.
              </li>
              <li> Reviewed and improved existing automation frameworks, test scripts, and testing processes to 
              enhance efficiency and effectiveness.
              </li>
              <li>Participated in recruitment, onboarding, documentation, and training initiatives.</li>
              <li>Debugged and resolved issues in automation scripts and CI/CD pipelines</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Data Automation Lead (2023 – 2025)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Led Data Quality and Data Governance initiatives across enterprise data platforms.</li>
              <li>Implemented data quality frameworks using Great Expectations (GX) and Soda Core.</li>
              <li>Worked on Data Mesh and Data Lake modernization programs.</li>
              <li>Designed validation strategies across Bronze, Silver, and Gold data layers.</li>
              <li>Replicated Alteryx workflows using DBT to standardize and modernize workflows.</li>
              <li>Implemented business validation and governance checks to improve data reliability.</li>
              <li>Developed executive dashboards and reporting solutions using Power BI.</li>
              <li>Supported DORA metrics implementation and engineering performance reporting.</li>
              <li>Worked with AWS Airflow orchestration and Secoda Data Mesh initiatives.</li>
              <li>Collaborated with cross-functional teams to drive data automation initiatives.</li>
              <li>Worked on creating client dashboards for gold layer data and calcuted
                metrics like CPM and other client KPIs</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Senior Automation Analyst (2021 – 2023)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Worked on media, advertising, campaign management, and marketing technology platforms.</li>
              <li>Developed automation frameworks for API and web application testing using Python and Selenium.</li>
              <li>Built QA pipelines using Jenkins and integrated testing into CI/CD workflows.</li>
              <li>Collaborated closely with Product Owners, Architects, and Engineering Leaders.</li>
              <li>Performed production monitoring, load testing, performance testing, and release validation.</li>
              <li>Created executive dashboards, sprint analytics reports, and quality metrics.</li>
              <li>Provided recommendations for API optimization and user experience improvements.</li>
              <li>Supported client customization initiatives across YouTube and Meta-related projects.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Bosch */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Bosch
        </h2>

        <div className="space-y-6">

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Associate Product Engineer (2015 – 2016)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Started my engineering career within the Thermotechnology division.</li>
              <li>Worked on embedded systems and software-assisted product configuration.</li>
              <li>Supported product testing, validation, engineering documentation, and release activities.</li>
              <li>Participated in software line assembly and appliance automation initiatives.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Product Software Responsible (PSR) (2016 – 2018)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Led product software configuration and feature implementation activities.</li>
              <li>Worked on solar module configuration, validation, and product engineering initiatives.</li>
              <li>Participated in Zigbee and IoT product development programs.</li>
              <li>Contributed to ARM microprocessor migration and platform modernization efforts.</li>
              <li>Converted business requirements into software features and validation plans.</li>
              <li>Performed simulation testing, menu validation, compliance verification, and release readiness assessments.</li>
              <li>Worked on unit testing, integration testing, regression testing, and product qualification.</li>
              <li>Participated in customer visits, product demonstrations, and solution discussions.</li>
              <li>Collaborated with global engineering teams to ensure successful product delivery.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">
              Senior Product Engineer (2018 – 2021)
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
             <li>Designed and supported product configuration workflows through the SiTT engineering platform.</li>
             <li>Led configuration, validation, and integration activities for DCM software components.</li>
             <li>Verified embedded communication protocols and interface interoperability across multiple system modules.</li>
             <li>Executed User Acceptance Testing (UAT) to ensure business and customer requirements were met prior to 
             release.</li>
             <li>Performed risk analysis, defect leakage tracking, and quality improvement initiatives to enhance 
             product reliability.</li>
             <li>Established a walking-lab environment that significantly improved integration testing efficiency and 
              reduced validation turnaround time.</li>
            <li>Validated end-to-end communication between products using proprietary embedded communication protocols.</li>
            <li>Built an innovative prototype that transformed haptic sensor vibrations into digital signals, 
              enabling advanced signal processing and future IoT applications.</li>
              
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}