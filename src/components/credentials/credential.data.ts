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
      "Building rigorous foundations in computer science, mathematics, algorithms, systems, AI, and analytical problem solving while working full-time.",
  },
  {
    id: "microsoft-az-900",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    institution: "Microsoft",
    period: "2026",
    status: "CERTIFIED",
    type: "CERTIFICATION",
    description:
      "Validates foundational knowledge of cloud concepts, Azure services, cloud pricing, governance, security, and shared responsibility models.",
    verificationHref:
      "https://learn.microsoft.com/en-us/users/thapelomagqazana-7919/credentials/609db8f154ce1e51",
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
      "Formal certification in systems development, programming fundamentals, software testing processes, and practical IT delivery.",
  },
  {
    id: "wethinkcode-systems-development",
    title: "Systems Development Program",
    institution: "WeThinkCode",
    period: "2022 — 2024",
    status: "COMPLETED",
    type: "PROGRAM",
    description:
      "Project-based software engineering training focused on programming, problem solving, testing, collaboration, and real-world delivery discipline.",
  },
  {
    id: "wits-construction-studies",
    title: "BSc Construction Studies",
    institution: "University of the Witwatersrand",
    period: "2017 — 2021",
    status: "COMPLETED",
    type: "DEGREE",
    description:
      "Developed strong foundations in project coordination, sequencing, risk awareness, systems thinking, and structured execution under real-world constraints.",
  },
];