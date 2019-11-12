import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Hooks

* Adding **state and behavior** to function components

* No Class Components, Higher Order Components or Render Props when creating new components
  `;
  return <MarkdownSlide markdown={markdown} />;
};
