import { render, screen } from "./test-utils";
import { MotionProvider } from "../app/MotionProvider";
import { FadeIn, SlideUp, GlowPulse } from "../components/motion";

/**
 * Motion wrapper tests.
 *
 * These tests validate:
 * - wrapper render behavior
 * - child composition stability
 */
describe("motion wrappers", () => {
  it("renders FadeIn children", () => {
    render(
      <MotionProvider>
        <FadeIn>
          <div>Fade Content</div>
        </FadeIn>
      </MotionProvider>,
    );

    expect(screen.getByText(/fade content/i)).toBeInTheDocument();
  });

  it("renders SlideUp children", () => {
    render(
      <MotionProvider>
        <SlideUp>
          <div>Slide Content</div>
        </SlideUp>
      </MotionProvider>,
    );

    expect(screen.getByText(/slide content/i)).toBeInTheDocument();
  });

  it("renders GlowPulse children", () => {
    render(
      <MotionProvider>
        <GlowPulse>
          <div>Glow Content</div>
        </GlowPulse>
      </MotionProvider>,
    );

    expect(screen.getByText(/glow content/i)).toBeInTheDocument();
  });
});