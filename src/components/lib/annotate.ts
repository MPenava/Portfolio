import { annotate } from "rough-notation";

type BracketType = "top" | "bottom" | "left" | "right";

type AnnotationType =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface AnnotationConfig {
  type: AnnotationType;
  color?: string;
  iterations?: number;
  multiline?: boolean;
  animate?: boolean;
  strokeWidth?: number;
  padding?: number;
  brackets?: BracketType | BracketType[];
}

const notationColor = "#ffd400";

const annotations: Record<string, AnnotationConfig> = {
  highlight: {
    type: "highlight",
    color: notationColor,
    iterations: 4,
    multiline: true,
    animate: true,
  },
  underline: {
    type: "underline",
    color: notationColor,
    iterations: 4,
    multiline: true,
    animate: true,
    strokeWidth: 2,
  },
  box: {
    type: "box",
    color: notationColor,
    iterations: 2,
    multiline: false,
    animate: true,
    strokeWidth: 3,
  },
  circle: {
    type: "circle",
    color: notationColor,
    iterations: 2,
    multiline: false,
    animate: true,
    strokeWidth: 5,
    padding: 7,
  },
  "strike-through": {
    type: "strike-through",
    color: notationColor,
    iterations: 3,
    multiline: true,
    animate: true,
  },
  "crossed-off": {
    type: "crossed-off",
    color: notationColor,
    iterations: 2,
    multiline: true,
    animate: true,
  },
  bracket: {
    type: "bracket",
    brackets: ["top", "bottom"],
    color: notationColor,
    iterations: 1,
    multiline: false,
    animate: true,
    strokeWidth: 4,
  },
  "bracket-side": {
    type: "bracket",
    brackets: ["left", "right"],
    color: notationColor,
    iterations: 1,
    multiline: false,
    animate: true,
    strokeWidth: 4,
  },
};

window.addEventListener("load", () => {
  const iOSupported = "IntersectionObserver" in window;

  if (!iOSupported) return;

  const config: IntersectionObserverInit = {
    root: null,
    rootMargin: "0% 0% -25% 0%",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      const annotationType = target.dataset.notationType;

      if (!annotationType) {
        console.error(
          `Missing data-notation-type attribute on element`,
          target,
        );
        return;
      }

      const annotationConfig = annotations[annotationType];

      if (!annotationConfig) {
        console.error(`Invalid annotation type: ${annotationType}`);
        return;
      }

      const annotation = annotate(target, annotationConfig);

      if (entry.isIntersecting) {
        annotation.show();
        observer.unobserve(target);
      }
    });
  }, config);

  document
    .querySelectorAll<HTMLElement>(".notation")
    .forEach((item) => observer.observe(item));
});
