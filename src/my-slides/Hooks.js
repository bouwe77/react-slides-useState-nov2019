import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HOOKS

* Adding **state and behavior** to function components

* State, side effects, context, memoization, etc.

* No class components anymore

* Replaces Higher Order Components and Render Props
  `;
  return <MarkdownSlide markdown={markdown} />;
};
