import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SITE_URL } from "../data/site";
import {
  resumeProfile,
  resumeSkills,
  resumeExperience,
  resumeProjects,
  resumeEducation,
  resumeContact,
} from "../data/resume";
import { ResumeSection } from "../components/ui/resume-section";
import { ResumeJobEntry } from "../components/ui/resume-job";

export const Route = createFileRoute("/resume")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Resume — Deep Chhatbar" },
      {
        name: "description",
        content:
          "Resume of Deep Chhatbar — React Native engineer with 3.5+ years building production apps for enterprise and consumer markets.",
      },
      { property: "og:title", content: "Resume — Deep Chhatbar" },
      {
        property: "og:description",
        content:
          "Resume of Deep Chhatbar — React Native engineer with 3.5+ years building production apps for enterprise and consumer markets.",
      },
      { property: "og:url", content: `${SITE_URL}/resume` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/resume` }],
  }),
});

const resumePdf =
  "/projectAssets/resume/Deep_Chhatbar_React_Native_Developer_Resume.pdf";

function Resume() {
  return (
    <main className="min-h-svh bg-[#f2f2f2] py-10 sm:py-16 pb-24 sm:pb-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900">
            Deep Chhatbar
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-1">
            Software Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
            <a
              href={resumeContact.emailHref}
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              {resumeContact.email}
            </a>
            <a
              href={resumeContact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              {resumeContact.linkedin.label}
            </a>
            <a
              href={resumeContact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              {resumeContact.github.label}
            </a>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {resumeContact.location}
            </span>
          </div>

          <a
            href={resumePdf}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>

        <ResumeSection title="Profile">
          <p className="text-sm text-gray-600 leading-relaxed">
            {resumeProfile}
          </p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
            {resumeSkills.map(({ label, items }) => (
              <p key={label}>
                <span className="text-gray-900 font-medium">{label}:</span>{" "}
                {items}
              </p>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          {resumeExperience.map((job) => (
            <ResumeJobEntry key={`${job.title}-${job.company}`} {...job} />
          ))}
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="space-y-5">
            {resumeProjects.map((project) => (
              <div key={project.name}>
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <p className="text-xs text-gray-400 mb-1">
                  {project.description}
                </p>
                <ul className="space-y-1">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <p className="text-sm text-gray-600">{resumeEducation}</p>
        </ResumeSection>
      </div>
    </main>
  );
}
