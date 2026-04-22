import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { HeroStatus } from "./hero.types";

/**
 * Internal state contract for hero status handling.
 *
 * Responsibilities:
 * - Represent the visible hero status signal
 * - Represent the active operating mode label
 * - Optionally expose supporting microcopy that clarifies the current mode
 */
export interface HeroSystemStatusState {
  readonly status: HeroStatus;
  readonly modeLabel: string;
  readonly description?: string;
}

/**
 * Supported configuration options for the hero system-status hook.
 */
export interface UseHeroSystemStatusOptions {
  /**
   * Whether the hook should automatically synchronize local state whenever the
   * provided initial state changes.
   *
   * Default:
   * - false
   *
   * Guidance:
   * - Keep false for primarily user-driven hero state transitions
   * - Set true when the parent source of truth should always win
   */
  readonly syncOnInitialStateChange?: boolean;
}

/**
 * Stable action contract exposed by the hero system-status hook.
 *
 * Purpose:
 * - Provide explicit, discoverable commands for future hero interactions
 * - Keep mutation logic centralized instead of scattered through components
 */
export interface HeroSystemStatusActions {
  /**
   * Reset the hero status back to the current baseline state.
   */
  readonly setOperational: () => void;

  /**
   * Move the hero into an inspection-running / scanning posture.
   */
  readonly setScanning: () => void;

  /**
   * Move the hero into a passive monitoring posture.
   */
  readonly setMonitoring: () => void;

  /**
   * Replace the full state explicitly.
   *
   * Useful for future extensions such as:
   * - booting sequences
   * - CTA-driven transitions
   * - async state updates from data or animation flows
   */
  readonly setState: (nextState: HeroSystemStatusState) => void;
}

/**
 * Return contract for the hero system-status hook.
 */
export interface UseHeroSystemStatusResult {
  readonly state: HeroSystemStatusState;
  readonly actions: HeroSystemStatusActions;
}

/**
 * Hook for managing hero system-status transitions.
 *
 * Purpose:
 * - Keep live-style state transitions out of rendering components
 * - Support future behaviors such as:
 *   - Booting -> Operational
 *   - Inspection Ready -> Inspection Running
 *   - CTA-triggered mode changes
 * - Provide a clean, testable state boundary for hero-level UI behavior
 *
 * Design notes:
 * - Uses stable callbacks to reduce unnecessary downstream re-renders
 * - Stores the latest baseline state in a ref so reset operations remain correct
 * - Allows optional synchronization when the caller intentionally wants
 *   external state changes to replace the local interactive state
 */
export function useHeroSystemStatus(
  initialState: HeroSystemStatusState,
  options: UseHeroSystemStatusOptions = {},
): UseHeroSystemStatusResult {
  const { syncOnInitialStateChange = false } = options;

  /**
   * Ref holding the latest baseline state.
   *
   * Reason:
   * - Prevent stale-closure issues when `initialState` changes between renders
   * - Ensure `setOperational()` always resets to the latest intended baseline
   */
  const baselineStateRef = useRef<HeroSystemStatusState>(initialState);

  /**
   * Local interactive state for the hero.
   */
  const [state, setState] = useState<HeroSystemStatusState>(initialState);

  /**
   * Keep the baseline ref in sync with the latest provided initial state.
   */
  useEffect(() => {
    baselineStateRef.current = initialState;
  }, [initialState]);

  /**
   * Optionally synchronize the rendered state when the external baseline changes.
   *
   * This is off by default because many interactive hero flows should preserve
   * user-triggered transitions unless the caller explicitly opts into sync.
   */
  useEffect(() => {
    if (!syncOnInitialStateChange) {
      return;
    }

    setState(initialState);
  }, [initialState, syncOnInitialStateChange]);

  /**
   * Explicit setter for replacing the entire hero system state.
   */
  const setExplicitState = useCallback((nextState: HeroSystemStatusState) => {
    setState(nextState);
  }, []);

  /**
   * Reset to the latest operational baseline.
   */
  const setOperational = useCallback(() => {
    setState(baselineStateRef.current);
  }, []);

  /**
   * Transition to an inspection-running state.
   */
  const setScanning = useCallback(() => {
    setState({
      status: {
        label: "System Status: Scanning",
        tone: "info",
      },
      modeLabel: "Mode: Inspection Running",
      description: "Analyzing portfolio signals and operating posture.",
    });
  }, []);

  /**
   * Transition to a passive monitoring state.
   */
  const setMonitoring = useCallback(() => {
    setState({
      status: {
        label: "System Status: Monitoring",
        tone: "warn",
      },
      modeLabel: "Mode: Active Monitoring",
      description: "Passive monitoring state with attention on active signals.",
    });
  }, []);

  /**
   * Stable action object for consumers.
   *
   * Memoized to reduce unnecessary prop churn when passed into child components.
   */
  const actions = useMemo<HeroSystemStatusActions>(
    () => ({
      setOperational,
      setScanning,
      setMonitoring,
      setState: setExplicitState,
    }),
    [setExplicitState, setMonitoring, setOperational, setScanning],
  );

  return {
    state,
    actions,
  };
}