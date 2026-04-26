import type { ExperienceLogEntry } from "./experience.types";

/**
 * Canonical operational history entries.
 *
 * Purpose:
 * - Present work history as credible operational logs.
 * - Highlight progression across QA, frontend delivery, systems, and reliability.
 */
export const EXPERIENCE_LOGS: readonly ExperienceLogEntry[] = [
  {
    id: "alula-test-analyst",
    role: "Test Analyst",
    company: "Alula Technologies",
    period: "May 2025 — Present",
    location: "Pretoria, South Africa · Hybrid",
    status: "ACTIVE",
    summary:
      "Executed QA strategies across enterprise systems to strengthen release readiness and reliability.",
    outcomes: [
      {
        statement:
          "Identified system failures before production to improve release confidence.",
      },
      {
        statement:
          "Improved defect visibility across QA workflows through structured reporting.",
      },
      {
        statement:
          "Strengthened collaboration between QA, developers, and stakeholders to improve requirement alignment.",
      },
    ],
    toolMethods: [
      {
        label: "QA Methods",
        items: ["Manual testing", "Test planning", "Defect reporting"],
        purpose:
          "Used to validate enterprise workflows and improve release confidence.",
      },
      {
        label: "Test Analysis",
        items: ["Requirement review", "Scenario design", "Result analysis"],
        purpose:
          "Used to connect business expectations with system behavior and test coverage.",
      },
      {
        label: "Collaboration",
        items: ["Developer feedback", "Stakeholder communication", "QA reporting"],
        purpose:
          "Used to align findings with product decisions and delivery priorities.",
      },
    ],
    tags: ["QUALITY", "RELIABILITY", "ENTERPRISE", "SYSTEMS"],
  },
  {
    id: "steinweg-web-developer",
    role: "Web Developer",
    company: "C. Steinweg Bridge Ltd",
    period: "Aug 2024 — Nov 2024",
    location: "Johannesburg, South Africa · On-site",
    status: "CONTRACT",
    summary:
      "Built and deployed a client-facing cargo tracking interface for real-time logistics visibility.",
    outcomes: [
      {
        statement:
          "Delivered a responsive React tracking interface to improve cargo visibility.",
      },
      {
        statement:
          "Integrated Leaflet map views to make cargo movement easier to demonstrate.",
      },
      {
        statement:
          "Deployed with Docker and Nginx to support stable routing and delivery.",
      },
    ],
    toolMethods: [
      {
        label: "Frontend Delivery",
        items: ["React", "Bootstrap", "Responsive UI"],
        purpose:
          "Used to build a client-facing interface that made cargo tracking easier to view and present.",
      },
      {
        label: "Map Visualization",
        items: ["Leaflet", "Map markers", "Tracking views"],
        purpose:
          "Used to demonstrate cargo movement and location-based workflows visually.",
      },
      {
        label: "Deployment",
        items: ["Docker", "Nginx", "Client-side routing"],
        purpose:
          "Used to package and serve the application with stable delivery behavior.",
      },
    ],
    tags: ["FRONTEND", "SYSTEMS", "DEVOPS", "LOGISTICS"],
  },
  {
    id: "steinweg-software-tester",
    role: "Software Tester",
    company: "C. Steinweg Bridge Ltd",
    period: "Mar 2024 — Sep 2024",
    location: "Johannesburg, South Africa · On-site",
    status: "COMPLETED",
    summary:
      "Validated enterprise software workflows through structured testing, defect analysis, and stakeholder feedback.",
    outcomes: [
      {
        statement:
          "Translated requirements into test scenarios to improve validation coverage.",
      },
      {
        statement:
          "Analyzed defects, database impacts, and usability issues to improve system reliability.",
      },
      {
        statement:
          "Reported actionable findings to support product quality and user experience improvements.",
      },
    ],
    toolMethods: [
      {
        label: "Testing Process",
        items: ["Test scenarios", "Usability testing", "Defect analysis"],
        purpose:
          "Used to validate system behavior and uncover issues affecting quality.",
      },
      {
        label: "System Review",
        items: ["Requirement review", "Database impact analysis", "Design reviews"],
        purpose:
          "Used to connect requirements, implementation behavior, and product risks.",
      },
      {
        label: "Reporting",
        items: ["Test reports", "Bug documentation", "Client feedback"],
        purpose:
          "Used to communicate findings clearly to the design and development team.",
      },
    ],
    tags: ["TESTING", "QUALITY", "ENTERPRISE", "SYSTEMS"],
  },
];