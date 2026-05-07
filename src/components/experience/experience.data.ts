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
    period: "May 2025 — Apr 2026",
    location: "Pretoria, South Africa · Hybrid",
    status: "ACTIVE",
    summary:
      "Strengthening enterprise release confidence through structured test analysis, manual QA execution, defect visibility, and stakeholder-aligned validation.",
    outcomes: [
      {
        statement:
          "Validated business-critical workflows against requirements to reduce release ambiguity before production.",
      },
      {
        statement:
          "Improved defect visibility through clear reporting, evidence capture, and structured QA feedback loops.",
      },
      {
        statement:
          "Supported stronger requirement alignment between QA, developers, product owners, and business stakeholders.",
      },
    ],
    toolMethods: [
      {
        label: "QA Execution",
        items: ["Manual testing", "Test planning", "Regression focus"],
        purpose:
          "Used to validate enterprise workflows and identify issues before release.",
      },
      {
        label: "Test Analysis",
        items: ["Requirement review", "Scenario design", "Result analysis"],
        purpose:
          "Used to translate business expectations into practical validation coverage.",
      },
      {
        label: "Release Feedback",
        items: ["Defect reports", "Developer feedback", "Stakeholder updates"],
        purpose:
          "Used to turn test findings into actionable delivery and release decisions.",
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
      "Built and deployed a responsive cargo-tracking interface that turned logistics data into a client-facing visibility experience.",
    outcomes: [
      {
        statement:
          "Delivered a React-based tracking interface to improve visibility across cargo movement workflows.",
      },
      {
        statement:
          "Integrated Leaflet map interactions to make location-based cargo activity easier to demonstrate and understand.",
      },
      {
        statement:
          "Packaged and served the application with Docker and Nginx to support stable deployment and client-side routing.",
      },
    ],
    toolMethods: [
      {
        label: "Frontend Delivery",
        items: ["React", "Bootstrap", "Responsive UI"],
        purpose:
          "Used to build a usable client-facing interface for cargo visibility.",
      },
      {
        label: "Geospatial UI",
        items: ["Leaflet", "Map markers", "Tracking views"],
        purpose:
          "Used to translate logistics movement into interactive visual workflows.",
      },
      {
        label: "Deployment",
        items: ["Docker", "Nginx", "Client-side routing"],
        purpose:
          "Used to package, serve, and stabilize the application delivery path.",
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
      "Validated enterprise software workflows by connecting requirements, usability, database behavior, defects, and stakeholder feedback.",
    outcomes: [
      {
        statement:
          "Converted requirements into test scenarios to improve validation coverage and reduce missed workflow issues.",
      },
      {
        statement:
          "Analyzed defects, usability concerns, and database impacts to strengthen system reliability.",
      },
      {
        statement:
          "Produced actionable QA reports that supported better product decisions and development feedback.",
      },
    ],
    toolMethods: [
      {
        label: "Testing Process",
        items: ["Test scenarios", "Usability testing", "Defect analysis"],
        purpose:
          "Used to validate system behavior and expose issues affecting quality.",
      },
      {
        label: "System Review",
        items: ["Requirement review", "Database impact analysis", "Design reviews"],
        purpose:
          "Used to connect expected behavior, implementation risk, and product impact.",
      },
      {
        label: "Quality Reporting",
        items: ["Test reports", "Bug documentation", "Client feedback"],
        purpose:
          "Used to communicate findings clearly to design, development, and business stakeholders.",
      },
    ],
    tags: ["TESTING", "QUALITY", "ENTERPRISE", "SYSTEMS"],
  },
];