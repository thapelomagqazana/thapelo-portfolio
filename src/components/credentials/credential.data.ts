import type { CredentialEntry } from "./credential.types";

/**
 * Canonical credential records.
 *
 * Purpose:
 * - Present education, programs, and certifications as verifiable trust signals.
 * - Keep academic background, technical foundation, and learning trajectory clear.
 * - Support fast recruiter scanning (<5 seconds).
 *
 * Ordering Strategy:
 * - Top = strongest current signal (in-progress depth or recent certification)
 * - Middle = supporting certifications / programs
 * - Bottom = foundational education
 */
export const CREDENTIALS: readonly CredentialEntry[] = [
  {
    id: "unisa-bsc-cs-math",
    title: "BSc Computer Science & Mathematics",
    institution: "University of South Africa (UNISA)",
    period: "2026 — Present",
    status: "IN_PROGRESS",
    type: "DEGREE",
    location: "Distance Learning",
    description:
      "Deepening foundations in algorithms, systems, AI, and mathematical computing.",
  },

  {
    id: "microsoft-az-900",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    institution: "Microsoft",
    period: "2026",
    status: "CERTIFIED",
    type: "CERTIFICATION",
    description:
      "Validates foundational understanding of cloud concepts, Azure services, pricing, and security principles.",
    verificationHref: "https://learn.microsoft.com/credentials/your-id",
  },

  {
    id: "mict-seta-systems-development",
    title: "NQF 5: Information Technology — Systems Development",
    institution: "MICT SETA",
    period: "Certified",
    status: "CERTIFIED",
    type: "CERTIFICATION",
    credentialId: "IS/LA/ETQA/427059",
    description:
      "Validates foundational software development, programming, testing processes, and systems development capability.",
  },

  {
    id: "wethinkcode-systems-development",
    title: "Systems Development Program",
    institution: "WeThinkCode",
    period: "2022 — 2024",
    status: "COMPLETED",
    type: "PROGRAM",
    description:
      "Project-based software engineering training focused on programming, testing, collaboration, and practical delivery.",
  },

  {
    id: "wits-construction-studies",
    title: "BSc Construction Studies",
    institution: "University of the Witwatersrand",
    period: "2017 — 2021",
    status: "COMPLETED",
    type: "DEGREE",
    description:
      "Built a foundation in project management, systems thinking, and structured problem solving.",
  },
];