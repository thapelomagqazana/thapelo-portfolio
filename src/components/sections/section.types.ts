/**
 * Shared props for recruiter-guided portfolio sections.
 *
 * Responsibilities:
 * - Standardize section ids and headings
 * - Keep section composition predictable and testable
 * - Reduce repeated prop patterns across page-level sections
 */
export interface PortfolioSectionProps {
  /**
   * Stable DOM id for navigation and anchor linking.
   */
  readonly id: string;

  /**
   * Stable section identifier used by active-section tracking.
   */
  readonly sectionId: string;

  /**
   * Visible heading for the section.
   */
  readonly title: string;

  /**
   * Short supporting summary shown under the section heading.
   */
  readonly summary: string;
}