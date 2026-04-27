import { useCallback, useMemo, useRef, useState } from "react";

import type { HeroStatus } from "./hero.types";

export interface HeroSystemStatusState {
  readonly status: HeroStatus;
  readonly modeLabel: string;
  readonly description?: string;
}

export interface HeroSystemStatusActions {
  /**
   * Reset the hero status back to the latest baseline state.
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
   */
  readonly setState: (nextState: HeroSystemStatusState) => void;
}

export interface UseHeroSystemStatusResult {
  readonly state: HeroSystemStatusState;
  readonly actions: HeroSystemStatusActions;
}

/**
 * Hook for managing hero system-status transitions.
 *
 * Responsibilities:
 * - Keep live-style state transitions out of rendering components.
 * - Provide explicit actions for hero state changes.
 * - Avoid effect-driven state synchronization.
 *
 * Design rule:
 * - The initial state is used as the baseline.
 * - User-driven transitions should not be overwritten by parent re-renders.
 */
export function useHeroSystemStatus(
  initialState: HeroSystemStatusState,
): UseHeroSystemStatusResult {
  const baselineStateRef = useRef<HeroSystemStatusState>(initialState);

  const [state, setState] = useState<HeroSystemStatusState>(() => initialState);

  const setExplicitState = useCallback((nextState: HeroSystemStatusState) => {
    setState(nextState);
  }, []);

  const setOperational = useCallback(() => {
    setState(baselineStateRef.current);
  }, []);

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