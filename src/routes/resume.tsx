import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

const resumePdf =
  "/projectAssets/resume/Deep_Chhatbar_React_Native_Developer_Resume.pdf";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Job({
  title,
  company,
  period,
  location,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="font-medium text-gray-900">
          {title} <span className="text-gray-500 font-normal"> {company}</span>
        </h3>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">{location}</p>
      <ul className="mt-2 space-y-1.5">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <main className="min-h-svh bg-[#f2f2f2] py-10 sm:py-16 pb-24 sm:pb-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900">
            Deep Chhatbar
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-1">
            Software Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
            <a
              href="mailto:deepchhatbar658@gmail.com"
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              deepchhatbar658@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/deep-chhatbara07772217/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/deepchhatbar658"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Github
            </a>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Ahmedabad
            </span>
          </div>

          <a
            href={resumePdf}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Profile */}
        <Section title="Profile">
          <p className="text-sm text-gray-600 leading-relaxed">
            React Native engineer with 3.5 years building production apps for
            enterprise and consumer markets. I go deep where most mobile devs
            stop native Android modules, BLE, background services, offline-first
            architecture and I&apos;ve taken projects from zero to live on both
            stores.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
            <p>
              <span className="text-gray-900 font-medium">Languages:</span>{" "}
              TypeScript, JavaScript
            </p>
            <p>
              <span className="text-gray-900 font-medium">Frontend:</span> React
              Native, Expo, React, Next.js, TanStack Start
            </p>
            <p>
              <span className="text-gray-900 font-medium">
                Mobile Engineering:
              </span>{" "}
              New Architecture, Native Modules, BLE, Offline-First Apps,
              Background Services
            </p>
            <p>
              <span className="text-gray-900 font-medium">
                State & Storage:
              </span>{" "}
              Redux Toolkit, TanStack Query, MMKV
            </p>
            <p>
              <span className="text-gray-900 font-medium">Backend:</span>{" "}
              Node.js, Elysia.js, REST APIs, WebSockets
            </p>
            <p>
              <span className="text-gray-900 font-medium">Tools:</span> Xcode,
              Android Studio, App Store Connect, Play Console, Figma
            </p>
          </div>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <Job
            title="Software Engineer"
            company="Giriraj Digital"
            period="May 2025 – Present"
            location="Ahmedabad, India"
            bullets={[
              "Delivered 8 production React Native + TypeScript apps across sales, field service, IoT, and marketing domains, serving 1000+ enterprise users across Play Store and App Store.",
              "Architected a cross-project frontend foundation  application-agnostic Redux store, extracted API layer as a reusable package, and a shared component/hook library via yalc, adopted across 3+ projects.",
              "Built an Android native call-logging overlay using BroadcastReceiver, ForegroundService, and SYSTEM_ALERT_WINDOW to render UI in killed app state  similar to Truecaller.",
              "Diagnosed a production UI lockup from AsyncStorage on a 10k-item payload; migrated to MMKV, drove backend pagination, optimized lists with FlashList, and integrated ML Kit for OCR-based odometer and face verification.",
            ]}
          />
          <Job
            title="Programmer Analyst"
            company="Silent Infotech Pvt Ltd"
            period="Jan 2023 – Apr 2025"
            location="Ahmedabad, India"
            bullets={[
              "Led end-to-end development of a subscription-based clothing marketplace (React Native), from architecture through Play Store deployment.",
              "Optimized an automated trading platform by reducing bundle size by 50% and delivering key UI improvements.",
              "Migrated an ERP system from Ionic to React Native, integrating Redux and an offline-first architecture.",
              "Built a cross-platform Expo app (Android, iOS, web) with a dedicated NPM package encapsulating API services, Redux Persist state, and modular UI components including kanban, tree, and form views.",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-gray-900">Prompt to Figma</h3>
              <p className="text-xs text-gray-400 mb-1">
                AI-powered Figma plugin converting natural language prompts into
                production-ready designs via LLM APIs.
              </p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300">
                  Built a TypeScript rendering engine supporting 8 node types
                  with full styling, gradients, effects, Auto Layout, and a
                  two-pass hierarchy builder for reusable component systems.
                </li>
                <li className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300">
                  Architected a CORS-free bridge pattern where the UI iframe
                  posts AI requests to the main thread for CORS-free fetch and
                  figma.clientStorage persistence.
                </li>
                <li className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300">
                  Added a Node.js smoke test suite in a VM harness that
                  validates the entire bridge and asserts no direct fetch from
                  UI.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Freshina DMS</h3>
              <p className="text-xs text-gray-400 mb-1">
                Enterprise dairy supply chain CRM serving 100+ field agents
                across India. React Native 0.80, TypeScript, Redux Toolkit,
                Kotlin, Frappe/ERPNext.
              </p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300">
                  Built a real-time driver tracking module with a custom Kotlin
                  Android foreground service, Room DB offline cache, WorkManager
                  retry queues, and Ola Maps SDK with encoded polyline decoding.
                </li>
                <li className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300">
                  Architected a scalable Redux generic slice factory with
                  centralized API middleware and Redux Persist. Integrated 450+
                  Frappe/ERPNext endpoints with dual CSRF + token auth.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <p className="text-sm text-gray-600">
            B.E. Information Technology SSGEC Bhavnagar, 2023 · CGPA 8.0
          </p>
        </Section>
      </div>
    </main>
  );
}
