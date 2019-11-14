import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Classes vs Hooks

When to use Hooks?

* For new components
* React > 16.8.0

When to use Classes?

* They are fine for existing components
* For ErrorBoundary components
`;
  return <MarkdownSlide markdown={markdown} />;
};
